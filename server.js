const express = require('express');
const dotenv = require('dotenv');


dotenv.config({path : './config/config.env'});
const PORT = process.env.PORT || 5000;
const app = express();

app.get('/', function (req, res) {
  res.send('hello world')
})

app.listen(PORT , console.log(`server running at ${process.env.PORT}`))