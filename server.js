const express = require("express");
const https = require("https");
const fs = require("fs");
const jsonServer = require("json-server");

const app = express();
const serverOptions = {
  key: fs.readFileSync("./db/localhost.key"),
  cert: fs.readFileSync("./db/localhost.crt"),
};

const router = jsonServer.router("./path/to/db.json");
const middlewares = jsonServer.defaults();

app.use(middlewares);
app.use(router);

https.createServer(serverOptions, app).listen(3001, () => {
  console.log("JSON Server is running on HTTPS port 3001");
});
