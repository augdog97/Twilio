This is a simple web app that uses the Twilio API and Bootstrap. 
You can send a message to any phone number and when the person reponds their message will render on the page.
This app is SIMPLE which means the functionality is just proof of concept nothing more. There is a possibility to add a login feature, 
getting rid of the last message received after a session ends, modern styling of the app. 

This app is to help those who are wanting to learn more about the Twilio api and how to use it in a simple manner. When working on this project I found that there was not alot of documentation on what I was trying to achieve, so I posted the solution with notes so those who are wanting the same goal can do so easily. 
The codebase is well documented for those who want to follow along. 

# INSTALL Steps: 
1. Create a folder for your project on your machine. 
2. Clone the REPO into the project folder
3. run npm install
4. Create a .env file and create env variables. (The variable names used are in index-router.js)
5. On the TWilio dashboard for your account sent the endpoint for the messages received to your ngrok HTTPS URL

* ngrok is used to connect the local host to the API. To install ngrok visit the link below, make an account, and follow download instructions. 
link: https://ngrok.com/

# Technologies used: 
1. HTML
2. CSS
3. Javascript
4. EJS Template engine
4. Bootstrap
5. Nodejs
6. Express
7. Twilio API
8. Jquery/AJAX

NOTE: In order to render a message that is sent to the twilio number, the page is set to refresh every second. A future release will have a better solution to the rendering. 