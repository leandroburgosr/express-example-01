const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send("hello world!");
});

app.get('/new-route', (req, res) => {
  res.send("i'm a new route");
});

app.get('/products', (req, res) => {
  res.json({
    name: 'producto 1',
    price: 3000
  });
});

app.get('/products/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    id,
    name: 'producto 1',
    price: 3000
  });
});

app.listen(port, () => {
  console.log("is running");
});


