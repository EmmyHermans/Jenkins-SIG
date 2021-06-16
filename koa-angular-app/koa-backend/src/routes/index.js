const Router = require("@koa/router");
const movieRouter = require("./movies");
const booksRouter = require("./books");

const router = new Router();

router.use("/movies", movieRouter.routes(), movieRouter.allowedMethods());
router.use("/books", booksRouter.routes(), booksRouter.allowedMethods());

module.exports = router;
