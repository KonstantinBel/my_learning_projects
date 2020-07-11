const http = require('http')
const PORT = 4000
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
    response.statusCode = 200
    response.setHeader('Content-Type', 'text/plain')
    response.end(body + ' ADDITIONAL INFO')

    if (body === 'stop') server.close()
  })
}

server = http.createServer(listener)
server.listen(PORT)

console.log(`Server listen port - ${PORT}.\nSend "stop" to exit.`)
