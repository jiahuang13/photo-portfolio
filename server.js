const express = require("express");
const https = require("https");
const fs = require("fs");
const jsonServer = require("json-server");
const morgan = require("morgan");

const app = express();
const serverOptions = {
  key: fs.readFileSync("./db/localhost.key"),
  cert: fs.readFileSync("./db/localhost.crt"),
};

// 创建一个写入日志文件的 stream 对象
const accessLogStream = fs.createWriteStream("./access.log", { flags: "a" });

// 使用 morgan 中间件记录日志
app.use(morgan("combined", { stream: accessLogStream }));

const router = jsonServer.router("./db/db.json");
const middlewares = jsonServer.defaults();

app.use(middlewares);
app.use(router);

https.createServer(serverOptions, app).listen(3001, () => {
  console.log("JSON Server is running on HTTPS port 3001");
});
