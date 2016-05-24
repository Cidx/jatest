var express = require('express');
var app = express();

// set the port of our application
// process.env.PORT lets the port be set by Heroku
var port = process.env.PORT || 8080;

app.get('/', function (req, res) {
  res.send('Hello World!');
  console.log('Home Event');
});

// Node.js Example
app.get('/webhook', function (req, res) {
  if (req.query['hub.verify_token'] === 'ja_test_verify_token') {
    res.send(req.query['hub.challenge']);
  } else {
    res.send('Error, wrong validation token');    
  }
  console.log('Get Event');
  //console.log(request.body);
  
});

// handler receiving messages
app.post('/webhook', function (req, res) {
    /*var events = req.body.entry[0].messaging;
    for (i = 0; i < events.length; i++) {
        var event = events[i];
        if (event.message && event.message.text) {
            sendMessage(event.sender.id, {text: "Echo: " + event.message.text});
        }
    }*/
	console.log('Post Event');
	console.log(request.body);
	console.log(req.body.entry[0].messaging);
	console.log(req.body.entry[0].messaging[0]);
    res.sendStatus(200);
});

app.listen(port, function() {
    console.log('Our app is running on http://localhost:' + port);
});
