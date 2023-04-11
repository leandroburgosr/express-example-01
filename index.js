const express = require('express');
const app = express();
const port = 3000;
const { faker } = require("@faker-js/faker");

app.get('/', (req, res) => {
  res.send("hello world!");
});

app.get('/new-route', (req, res) => {
  res.send("i'm a new route");
});

app.get('/products', (req, res) => {
  const products = [];
  const { limit } = req.query;
  for (let i = 0; i < limit; i++) {
    products.push({
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(), 10),
      image: faker.image.imageUrl()
    });
  }
  res.json(products);
});

app.get('/products/filter', (req, res) => {
  res.send("i'm a feedback");
});

app.get('/products/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    id,
    name: 'producto 1',
    price: 3000
  });
});

app.get('/users/', (req, res) => {
  const { limit, offset } = req.query;
  if (limit && offset) {
    res.json({
      limit,
      offset
    });
  } else {
    res.send("no params found");
  }

});

app.listen(port, () => {
  //console.log("is running");
});


