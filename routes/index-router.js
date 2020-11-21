/* TASK LIST 
1. Get the value of the number field in the get route for the number field
3. Render the message sent FROM the Twilio number TO another number */






/* Imports */
var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser');


/* .env import */
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
/* try getting the message from the number that was input into the number field on the form. res.json.number and get the most recent message. 
  then render that mesage in the index view.
  m.body is capturing the body of the message in a variable to be used in the EJS template
  if there is an error then log the error to the console
  */
  try {
     client.messages
      .list({
        from: res.json.number,
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
  - Using interpolation to capture the value of the message and number variable from the ajax request.
  - the Twilio phone number is saved in an environment file
3. Console log the ID of the message that was sent
4. next() moves down to the next POST route
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
/* THIS ROUTE IS NOT REQUIRED: when a message is received it logs the id of that message to the console. */
router.post('/',  (req, res) => {
  const sid = req.body.SmsSid;
  console.log(sid);
})

/* export the router */
module.exports = router;