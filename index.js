const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser');


const indexRouter = require('./routes/index-router');

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
/* View Engine */
const ejs = require('ejs');
app.set('view engine', 'ejs');


app.use('/', indexRouter);








app.get('*', (req, res) => {
    res.sendStatus(404);
})


app.listen(port, () => {
    console.log(`Twilio app listening at http://localhost:${port}`)
})