const http = require('http');
const httpProxy = require('http-proxy');

const proxy = httpProxy.createProxyServer({});

const PORT = 3000; // Use the PORT environment variable or default to 3000
const targetURL = '*'; // Replace this with the target URL you want to proxy

const server = http.createServer((req, res) => {
  // Proxying logic for all incoming requests
  proxy.web(req, res, { target: targetURL });
});

server.listen(PORT, () => {
  console.log(`Proxy server running on port ${PORT}`);
});
