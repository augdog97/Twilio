
/* Imports */
var express = require('express');
var router = express.Router();
var path = require('path');
const bodyParser = require('body-parser');
const fetch = require('node-fetch');

/* .env import */
require('dotenv').config();

/* This parses the JSON from the AJAX req */
router.use(bodyParser.json());


/* Inputing the API keys for Twilio, they are in a .env file */
var accountSid = process.env.ACCOUNT_SID; // Your Account SID from www.twilio.com/console
var authToken = process.env.AUTH_TOKEN;   // Your Auth Token from www.twilio.com/console

/* Creating boilerplate Twilio */
var twilio = require('twilio');
const { data } = require('jquery');
var client = new twilio(accountSid, authToken); 


/* GET home page */
router.get('/',  async (req, res, next) => {
  const url_api = 'https://api.twilio.com/2010-04-01/Accounts/{Account Sid}/Messages/{Message Id}';
 
 
  /* Test */
  const test = 'https://httpbin.org/get'

  try {
    await fetch(test)
      .then(res => res.json())
      .then(data => {
        const ip = data.origin;
        console.log(ip);
        res.render('index', {
          ip: ip
        }); 
      })
  } catch (error) {
    console.log(error);
  }
    
 
}); 


  /*Twilio 
  1. Create a message on Twilio and send the message
  2. The body is JSON from the AJAX request 
  */
router.post('/',   (req, res, next) => {
    
      client.messages.create({
        body: `${req.body.message}`,
        to: `${req.body.number}`,  // Text this number
        from: process.env.PHONE_NUMBER // From a valid Twilio number
    })
        .then((message) => console.log(message.sid)); 

    next();
     
 
}) 

router.post('/', async (req,res) => {
  const messageBody = req.body.Body;
})

module.exports = router;
