const express = require('express');
const dotenv = require('dotenv');

dotenv.config({ path: './config/config.env' });
const PORT = process.env.PORT || 5000;
const app = express();

app.get('/api/v1/bootcamps', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Show all bootcamps'
  })
})

app.post('/api/v1/bootcamps', (req, res) => {
  res.status(201).json({
    success: true,
    message: 'create new bootcamp'
  })
})

app.put('/api/v1/bootcamps/:id', (req, res) => {
  const itemId = req.params.id;
  console.log(itemId);
  res.status(200).json({
    success: true,
    message: `Bootcamp update for ${itemId}`
  })
})

app.delete('/api/v1/bootcamps/:id', (req, res) => {
  const itemId = req.params.id;
  console.log(itemId);
  res.status(200).json({
    success: true,
    message: `Bootcamp delete for ${itemId}`
  })
})

app.listen(PORT, console.log(`server running at ${process.env.PORT}`))