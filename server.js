const express = require('express');
const dotenv = require('dotenv');
const bootcamps = require('./routes/bootcamps.js');

// mounting the routes 
dotenv.config({ path: './config/config.env' });
const PORT = process.env.PORT || 5000;
const app = express();

app.use('/api/v1/bootcamps', bootcamps);

app.listen(PORT, console.log(`server running at ${process.env.PORT}`))