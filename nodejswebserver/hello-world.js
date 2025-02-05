const http = require('http');
const log = require('pretty-log');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World\n');
});

server.listen(3000, () => {
  log.success('✅ Server draait op http://localhost:3000');
});


