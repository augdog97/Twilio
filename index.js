const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser');


const indexRouter = require('./routes/index-router');


/* View Engine */
const ejs = require('ejs');
app.set('view engine', 'ejs');


app.use('/', indexRouter);




app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.get('*', (req, res) => {
    res.sendStatus(404);
})


app.listen(port, () => {
    console.log(`Twilio app listening at http://localhost:${port}`)
})