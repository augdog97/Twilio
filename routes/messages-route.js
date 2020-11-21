

/* Imports */
var express = require('express');
var messagesRouter = express.Router();
const bodyParser = require('body-parser');

/* .env import */
require('dotenv').config();

/* This parses the JSON from the AJAX req */
messagesRouter.use(bodyParser.json());


/* Inputing the API keys for Twilio, they are in a .env file */
var accountSid = process.env.ACCOUNT_SID; // Your Account SID from www.twilio.com/console
var authToken = process.env.AUTH_TOKEN;   // Your Auth Token from www.twilio.com/console

/* Creating boilerplate Twilio */
var twilio = require('twilio');
var client = new twilio(accountSid, authToken);

messagesRouter.get('/messages', (req,res) => {
   
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

module.exports = messagesRouter;