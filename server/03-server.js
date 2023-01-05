const http = require('http')
const querystring= require('querystring')

const port = process.env.PORT || 1337

const server = http.createServer(function (req, res) {
  console.log(req.url);
  if (req.url === '/Add') return Add(req, res)

  if (req.url === '/Sub') return Sub(req, res)

  if(req.url==='/Mul') return Mul(req,res);

  if (req.url==='/Div') return Div(req.res);

 

})

server.listen(port)

console.log(`Server listening on port  {port}`);

 
let a=20;
  let b=30;
function Add(req, res) {
  
  res.setHeader('Content-Type', 'text/plain')
  res.end(a+b);
  
}

function Sub(req, res) {
  res.setHeader('Content-Type', 'text/plain')
  res.end('a-b');
  
}

function Mul(req, res) {
  res.setHeader(  'Content-Type', 'text/plain' )
  res.end('a*b')
}
function Div(req,res){
  res.setHeader('Content-Type','text/plain');
  res.end('a/b');
  
}




