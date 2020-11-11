var express = require('express');
var router = express.Router();
var path = require('path');
const bodyParser = require('body-parser');

/* This parses the JSON from the AJAX req */
router.use(bodyParser.json());


require('dotenv').config();

/* Inputing the API keys for Twilio, they are in a .env file */
var accountSid = process.env.ACCOUNT_SID; // Your Account SID from www.twilio.com/console
var authToken = process.env.AUTH_TOKEN;   // Your Auth Token from www.twilio.com/console
/* Creating boilerplate Twilio */
var twilio = require('twilio');
var client = new twilio(accountSid, authToken); 


/* GET home page */
router.get('/', function (req, res, next) {
    res.render('index')  
});


  /*Twilio 
  1. Create a message on Twilio and send the message
  2. The body is JSON from the AJAX request 
  */
router.post('/', (req, res) => {
    
      client.messages.create({
        body: `${req.body.message}`,
        to: `${req.body.number}`,  // Text this number
        from: '+12058946009' // From a valid Twilio number
    })
        .then((message) => console.log(message.sid)); 
        console.log(req.body)

}) 

module.exports = router;
