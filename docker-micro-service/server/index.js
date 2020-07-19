const http = require('http')
const axios = require('axios')

const PORT = 3000
let server

const listener = (request, response) => {
  let body = []
  request.on('error', (err) => {
    console.error(err)
  }).on('data', (chunk) => {
    body.push(chunk)
  }).on('end', () => {
    body = Buffer.concat(body).toString()
    console.log(`body - "${body}"`)

    // log request data
    body && axios.post('http://logger:4000', body)
      .then(axiosResponse => {
        console.log(`logger say: ${axiosResponse.data}`)
      })

    // get additional data and sen response
    axios.post('http://reformer:4000', body)
      .then(axiosResponse => {
        console.log(`reformer say: ${axiosResponse.data}`)
        response.statusCode = 200
        response.setHeader('Content-Type', 'text/plain')
        response.end(axiosResponse.data)
      })
      .catch(err => {
        console.log(err.message)
        response.statusCode = 500
        response.end('error fetch reformer')
      })
  })
}

server = http.createServer(listener)
server.listen(PORT)

console.log(`Server listen port - ${PORT}`)
