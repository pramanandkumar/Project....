const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  // agar koi request aaye to index.html serve karo
  if (req.url === '/' || req.url === '/index.html') {
    fs.readFile(path.join(__dirname, '../fronted/index.html'), (err, data) => {
      if (err) {
        res.writeHead(500, {'Content-Type': 'text/plain'});
        res.end('Error loading page');
      } else {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(data);
      }
    });
  } else {
    res.writeHead(404, {'Content-Type': 'text/plain'});
    res.end('Page not found');
  }
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});
