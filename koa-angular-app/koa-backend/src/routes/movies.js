const Router = require("@koa/router");
const movies = require("../resources/movies.json");

const router = new Router();

router.get("/", async (ctx, next) => {
  ctx.body = movies;
});

module.exports = router;
