const express = require('express');
const routerApi = require("./routes");
const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send("hello world!");
});

app.get('/new-route', (req, res) => {
  res.send("i'm a new route");
});

routerApi(app);

/*app.get('/users/', (req, res) => {
  const { limit, offset } = req.query;
  if (limit && offset) {
    res.json({
      limit,
      offset
    });
  } else {
    res.send("no params found");
  }

});*/

app.listen(port, () => {
  //console.log("is running");
});


