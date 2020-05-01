const http = require('http');

http.createServer((request, response) => {
  const { headers, method, url } = request;
  let body = [];
  request.on('error', (err) => {
    console.error(err);
  }).on('data', (chunk) => {
    body.push(chunk);
  }).on('end', () => {
    body = Buffer.concat(body).toString();
    console.log(JSON.parse(body));
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/plain');
    response.end('Hello, World!\n');
    // At this point, we have the headers, method, url and body, and can now
    // do whatever we need to in order to respond to this request.
  });
}).listen(3001); // Activates this server, listening on port 8080.
