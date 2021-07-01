const Koa = require("koa");
const router = require("./routes");
const bodyParser = require("koa-bodyparser");
const cors = require("koa-cors");
const serve = require("koa-static");

const app = new Koa();

if (process.env.NODE_ENV === "production") {
  app.use(serve(__dirname + "/public"));
}

app.use(bodyParser());
app.use(cors());
app.use(router.routes());

if (process.env.NODE_ENV === "production") {
  app.use(function* index() {
    yield send(this, __dirname + "/public/index.html");
  });
}

module.exports = app;
