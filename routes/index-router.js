/* TASK LIST 
1. Get the value of the number field in the get route for the number field
3. Render the message sent FROM the Twilio number TO another number */






/* Imports */
var express = require('express');
var router = express.Router();
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
const { render } = require('ejs');
var client = new twilio(accountSid, authToken);



/* GET home page */
router.get('/', async (req, res, next) => {

  try {
    client.messages
      .list({
        from: '+17185412931',
        limit: 1
      })
      .then(messages => messages.forEach(m => 
        res.render('index', {
          messagesId: m.body
        })));
  } catch (error) {
    console.log(error);
  }


});


/*Twilio 
1. Create a message on Twilio and send the message
2. The body is JSON from the AJAX request 
*/
router.post('/', (req, res, next) => {

  client.messages.create({
    body: `${req.body.message}`,
    to: `${req.body.number}`,  // Text this number
    from: process.env.PHONE_NUMBER // From a valid Twilio number
  })
    .then((message) => console.log(message.sid));

  next();


})

router.post('/',  (req, res) => {
  const sid = req.body.SmsSid;
  console.log(sid);
})

module.exports = router;