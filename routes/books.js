const router = require("express").Router();
const bookController = require("../controllers/bookController");

router.get("/books", bookController.getBooks);

module.exports = router;