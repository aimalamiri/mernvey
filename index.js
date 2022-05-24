const express = require('express');
// import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send({hi: 'there!'});
});

const PORT = process.env.POST || 8080; 
app.listen(PORT, () => {
  console.log(`Example app listening on port http://localhost:${PORT}`)
});
