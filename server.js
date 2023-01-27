"use strict";

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
require("./config/db");

const app = express();
const jwt = require("jsonwebtoken");

const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use((req, res, next) => {
  if (req.headers && req.headers.authorization && req.headers.authorization.split(" ")[0] === "JWT") {
    jwt.verify(req.headers.authorization.split(" ")[1], "RESTfulAPIs", (err, decode) => {
      if (err) req.user = undefined;
      req.user = decode;
      next();
    });
  } else {
    req.user = undefined;
    next();
  }
});

var product_routes = require("./api/routes/productRoutes"); //importing route
product_routes(app);

var user_routes = require("./api/routes/userRoutes"); //importing route
user_routes(app);

var owner_routes = require("./api/routes/ownerRoutes"); //importing route
owner_routes(app);

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
