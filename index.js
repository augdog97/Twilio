const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser');


const indexRouter = require('./routes/index-router');

/* View Engine */
const ejs = require('ejs');
app.set('view engine', 'ejs');


app.use('/', indexRouter);


app.use(bodyParser.json());

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})