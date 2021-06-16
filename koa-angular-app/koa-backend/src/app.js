const Koa = require("koa");
const router = require("./routes");
const bodyParser = require("koa-bodyparser");
const cors = require("koa-cors");

const app = new Koa();

app.use(bodyParser());
app.use(cors());
app.use(router.routes());

module.exports = app;
