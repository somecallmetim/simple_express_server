const express = require('express');
// "app" is the object that the "createApplication" function returns (createApplication is called inside express.js when
    // the above line of code executes)
const app = express();

// all is a method that takes 2 args, a route and a callback method. the callback is run if the route is requested
app.all('*', (req, res)=>{
    //express handles the basic headers(status code, mime-type)
    res.send('<h1>Blitzcrank is home</h1>');
    //express handles the end
});

app.listen(3000, ()=>{
    console.log("server is listening on port 3000");
});