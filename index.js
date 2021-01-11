const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const bodyParser = require('body-parser');
var path = require('path');
const livereload = require("livereload");
const connectLivereload = require("connect-livereload");

/* Import of Routers */
const indexRouter = require('./routes/index-router');
const messagesRouter = require('./routes/messages-route');

/*  Allows express access to the public folder to serve which has scripts and CSS Sheets.*/
app.use(express.static('public'));
app.use(bodyParser.json());
/* Must be false for TWILIO */
app.use(bodyParser.urlencoded({ extended: false }));
/* View Engine */
const ejs = require('ejs');
app.set('view engine', 'ejs');

/* Find a better solution to render only the message incoming div

const liveReloadServer = livereload.createServer();
liveReloadServer.watch(path.join(__dirname, 'views'));

app.use(connectLivereload());
liveReloadServer.server.once("connection", () => {
    setInterval(() => {
        liveReloadServer.refresh("/messages");
    }, 1000);
}); */

/* Using the indexrouter defined from above */
app.use('/', indexRouter);
app.use('/', messagesRouter);

/* If a user tries to visit a page that doesnt exist they will get a 404 response */
app.get('*', (req, res) => {
    res.sendStatus(404);
})

/* Standard express server call  */
app.listen(port, () => {
    console.log(`Twilio app listening at http://localhost:${port}`)
})