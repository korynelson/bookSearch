const router = require("express").Router();
const bookController = require("../controllers/bookController");

router.get("/books", bookController.getBooks);
router.post("/books", bookController.saveBook);
router.delete("/books", bookController.deleteBook);

module.exports = router;