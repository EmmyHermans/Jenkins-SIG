const Router = require("@koa/router");
const books = require("../resources/books.json");

const router = new Router();

// "queries and aggregations hands-on" JSON queries #1
router.get("/", async (ctx, next) => {
  ctx.body = books;
});

module.exports = router;
