const db = require("../models/index");

// Defining methods for the userController
module.exports = {
  getBooks: (req, res) => {
    console.log('inside the controller')
    console.log(req.query)
    db.Book.find()
      .then((song) => {
        res.json(song);
      })
      .catch((err) => {
        res.status(422).json(err)});
  }   
}