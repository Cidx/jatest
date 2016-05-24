var express = require('express');
var app = express();

// set the port of our application
// process.env.PORT lets the port be set by Heroku
var port = process.env.PORT || 8080;

app.get('/', function (req, res) {
  res.send('Hello World!');
});

// Node.js Example
app.get('/webhook', function (req, res) {
  if (req.query['hub.verify_token'] === 'EAAWOXoAWUzcBAHdpf1QIeH4VIiZAMFPdhbEX4norAlQDdRHcOLS9mV5KSnrejONw5JFeUJABJjzqHCirjRsoj998kD5GaT5hdxTifaEkQfz2iHgnLYdCuT4Bay7ZBK4eN6xtZCBWtZASYNdc8d4NOYvqIIjubKYjKzZAZAxE1ZAvAZDZD') {
    res.send(req.query['hub.challenge']);
  } else {
    res.send('Error, wrong validation token');    
  }
});

app.listen(port, function() {
    console.log('Our app is running on http://localhost:' + port);
});