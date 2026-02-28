/**
 * server.js — servidor local para desenvolvimento
 * Rodar: node server.js
 * Acesse: http://localhost:8080
 */
const http = require('http');
const fs   = require('fs');
const path = require('path');

const ROOT = __dirname;
const PORT = 8080;

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.css':  'text/css; charset=utf-8',
  '.js':   'application/javascript; charset=utf-8',
  '.png':  'image/png',
  '.jpg':  'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.ico':  'image/x-icon',
  '.svg':  'image/svg+xml',
  '.md':   'text/plain; charset=utf-8',
  '.txt':  'text/plain; charset=utf-8',
};

const server = http.createServer(function (req, res) {
  let urlPath = req.url.split('?')[0]; // remove query strings

  // Rota raiz → index.html
  if (urlPath === '/') urlPath = '/index.html';

  // Se termina em / → tentar index.html dentro da pasta
  if (urlPath.endsWith('/')) urlPath += 'index.html';

  let filePath = path.join(ROOT, urlPath);
  const ext    = path.extname(filePath).toLowerCase();

  // Arquivo existe?
  if (!fs.existsSync(filePath)) {
    filePath = path.join(ROOT, '404.html');
    res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(fs.readFileSync(filePath));
    return;
  }

  const contentType = MIME[ext] || 'application/octet-stream';
  res.writeHead(200, { 'Content-Type': contentType });
  res.end(fs.readFileSync(filePath));
});

server.listen(PORT, '127.0.0.1', function () {
  console.log('✅ Servidor CIA rodando em http://localhost:' + PORT);
  console.log('   Pressione Ctrl+C para parar.\n');
});
