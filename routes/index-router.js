var express = require('express');
var router = express.Router();
var path = require('path');
const bodyParser = require('body-parser');
require('dotenv').config();

/* This parses the JSON from the AJAX req */
router.use(bodyParser.json());




/* Inputing the API keys for Twilio, they are in a .env file */
var accountSid = process.env.ACCOUNT_SID; // Your Account SID from www.twilio.com/console
var authToken = process.env.AUTH_TOKEN;   // Your Auth Token from www.twilio.com/console

/* Creating boilerplate Twilio */
var twilio = require('twilio');
var client = new twilio(accountSid, authToken); 


/* GET home page */
router.get('/',  (req, res, next) => {
    try {
      res.render('index');  
    } catch (error) {
      res.send(error);
    } 
    
   next()
}); 


  /*Twilio 
  1. Create a message on Twilio and send the message
  2. The body is JSON from the AJAX request 
  */
router.post('/',  async (req, res, next) => {
      client.messages.create({
        body: `${req.body.message}`,
        to: `${req.body.number}`,  // Text this number
        from: process.env.PHONE_NUMBER // From a valid Twilio number
    })
        .then((message) => console.log(message.sid)); 

  // Access the message body and the number it was sent from.
  await console.log(`Incoming message from ${req.body.From}: ${req.body.Body}`);
    const message = req.body.Body;
    res.render('index', {
      message: message
    })
}) 






module.exports = router;
