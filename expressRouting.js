const express = require('express');
const app = express();

// app implements basic http methods such get, post, put, delete. app.all() will accept any kind of http request
    // of these methods take two args, a path and a callback to execute if the path is matched

app.get('/', (req, res)=>{
    res.send('<h1>Blitzcrank shares some love!</h1>');
});

app.post('/', (req, res)=>{

});

app.put('/', (req, res)=>{

});

app.delete('/', (req, res)=>{

});



app.listen(3000, ()=>{
   console.log("server is listening on port 3000")
});