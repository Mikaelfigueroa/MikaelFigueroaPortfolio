var express = require("express")            //connects express to node.js
var app = express()                     //creates the app object which is everything
var path = require("path")


  // Set static folder
  app.use(express.static('client'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'index.html'));
  });


var http = require('http').createServer(app);
//--------------------------------------------------------------------------------//
http.listen(process.env.PORT || 5000, () => {
  console.log('----------------server is running-----------')
  console.log('|||||||||||||||||||||||||||||||||||||||||||||||')
})