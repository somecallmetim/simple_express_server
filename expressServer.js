const express = require('express');
const path = require('path');
// "app" is the object that the "createApplication" function returns (createApplication is called inside express.js when
    // the above line of code executes) (this is the default export)
const app = express();

// serve up static files
app.use(express.static('public'));

// all is a method that takes 2 args, a route and a callback method. the callback is run if the route is requested
app.all('/', (req, res)=>{
    //express handles the basic headers(status code, mime-type)
    // res.send('<h1>Blitzcrank is home</h1>');

    console.log(path.join(__dirname + '/node.html'));
    res.sendFile(path.join(__dirname + '/node.html'));
    //express handles the end
});

app.all('*', (req, res)=>{
   res.send('<h1>Sorry, this is not the page you\'re looking for...' +
       '</h1>');
});

app.listen(3000, ()=>{
    console.log("server is listening on port 3000");
});