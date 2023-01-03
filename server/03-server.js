const http = require('http')

const port = process.env.PORT || 3000

const server = http.createServer(function (req, res) {
  console.log(req.url);
  if (req.url === '/Add') return Add(req, res)

  if (req.url === '/Sub') return Sub(req, res)

  if(req.url==='/Mul') return Mul(req,res);

  if (req.url==='/Div') return Div(req.res);

  respondNotFound(req, res)
})

server.listen(port);

console.log(`Server listening on port ${port}`);

a=2;
b=2

function Add(req, res) {
  res.setHeader('Content-type', 'text/plain')
  res.end('a+b')
}

function Sub(req, res) {
  res.setHeader('Content-Type', 'text/plain')
  res.end('a-b');
}

function Mul(req, res) {
  res.setHeader(404, { 'Content-Type': 'text/plain' })
  res.end('a*b')
}
function Div(req,res){
  res.setHeader('Content-Type','text/plain');
  res.end('a/b');
  
  server.listen(port);
}