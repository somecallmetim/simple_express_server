const express = require('express');
const app = express();

// mounts the public folder so that express knows it can serve files that are placed in there
app.use(express.static('public'));

// you can mount as many folders as you'd like, though you'd never actually serve up your node_modules VERY BAD PRACTICE
app.use(express.static('node_modules'));

app.listen(3000, ()=>{
    console.log('server is listening on port 3000');
});