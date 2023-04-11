const express = require('express');

const productsRouter = require('./produts.router');

function routerApi(app) {
  const router = express.Router();
  app.use("/api", router);
  app.use('/products', productsRouter)

}

module.exports = routerApi;
