const http = require('http')
const fs = require('fs')
const PORT = 4000
let server

const listener = (request, response) => {
  const { method } = request

  switch (method) {
    case 'GET':
        fs.readFile('/user/app/volume/log', 'utf8', (err, data) => {
          if (err) { sendError(response, err) }
          else { sendData(response, data) }
        })
      break;

    case 'DELETE':
        fs.writeFile('/user/app/volume/log', '', () => {})
        sendData(response, 'clear log')
      break;

    case 'POST':
      getRequestData(request)
        .then(data => {
          console.log(`body - "${data}"`)
          sendData(response, 'add entry')
          fs.appendFile('/user/app/volume/log', `${(new Date).toLocaleString()} - ${data}\n`, () => {})

          if (data === 'stop') server.close()
        })
        .catch(err => {
          console.error(err.stack)
          sendError(response, err)
        })
      break;

    default:
      break;
  }
}

function sendError(response, err) {
  response.statusCode = 500
  response.setHeader('Content-Type', 'text/plain')
  response.end(`fail: ${err.message}`)
}

function sendData(response, data) {
  response.statusCode = 200
  response.setHeader('Content-Type', 'text/plain')
  response.end(data)
}

function getRequestData(request) {
  return new Promise((resolve, reject) => {
    let body = [];

    request
      .on('error', (err) => { reject(err) })
      .on('data', (chunk) => { body.push(chunk) })
      .on('end', () => {
        body = Buffer.concat(body).toString()
        resolve(body)
      })
  })
}

server = http.createServer(listener)
server.listen(PORT)

console.log(`Server listen port - ${PORT}.\nSend "stop" to exit.`)
