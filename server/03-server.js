const http = require('http')
const querystring= require('querystring')

const querystring = require('querystring')

const port = process.env.PORT || 1337

//req.url - It will always contain the full path of the client request
//Routing - All client requests are not same, we should respond differently 
//           based on the requested url path
const server = http.createServer(function (req, res) {
  console.log(req.url);
  if (req.url === '/Add') return Add(req, res)

  if (req.url === '/Sub') return Sub(req, res)

  if(req.url==='/Mul') return Mul(req,res);

  if (req.url==='/Div') return Div(req.res);

 


  if (req.url.match(/^\/dr/)) return respondDymanicResponse(req, res)

  if (req.url.match(/^\/dr/)) return respondDymanicResponse(req, res)

  respondNotFound(req, res)

})

server.listen(port)

console.log(`Server listening on port  {port}`);


 
let a=20;
  let b=30;
function Add(req, res) {
  
  res.setHeader('Content-Type', 'text/plain')
  res.end(a+b);
  

function respondText(req, res) {
  // res.setHeader('Content-type', 'text/plain')
  res.end('Hello')
 
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


function respondNotFound(req, res) {
  res.writeHead(404, { 'Content-Type': 'text/plain' })
  res.end('Not Found')
}

function respondDymanicResponse(req, res) {
  const { input = '' } = querystring.parse(
    req.url
      .split('?')
      .slice(1)
      .join('')
  )
  const { inputB = '' } = querystring.parse(
    req.url
      .split('?')
      .slice(1)
      .join('')
  )
  console.log(input)
  console.log(inputB)
  res.setHeader('Content-Type', 'application/json')
  res.end(
    JSON.stringify({
      normal: input,
      caps: input.toUpperCase(),
      count: input.length,
      reverse: input.split('').reverse().join('')
    })
  )
}

