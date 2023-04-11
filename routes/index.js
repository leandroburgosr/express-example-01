const productsRouter = require('./produts.router');

function routerApi(app) {
  app.use('/products', productsRouter)

}

module.exports = routerApi;
