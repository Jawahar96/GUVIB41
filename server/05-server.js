const res = require('express/lib/response');
const fs=require('fs');

const express =('express');

const port =process.env || 3000
const app=express();

app.get('/',respondText)
app.get('/json' ,respondJson)
app.get('./dr',respondDynamicRespond);

app.listen(port ,() =>
    console.log(`Server is listening on port ${port}`));

    

function respondText(req,res){
    res.setHeader('Content-type', 'text/plain')
    res.end('Helo Guvi');
}


