const express = require('express');
const passport = require('passport');
const middlewares = require('./middlewares');

const app = express();

middlewares(app, passport);

const server = app.listen(8080, () =>
  console.log(`Server started on http://localhost:${server.address().port}.`)
);
