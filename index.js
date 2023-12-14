const express = require('express');

const app = express();

app.get('/',(req,res)=>{
    res.send('<center style="width:50%;"><h1>Hello</h1></center>');
})


app.listen(3000,()=>{
    console.log('Listening on port 3000');
})