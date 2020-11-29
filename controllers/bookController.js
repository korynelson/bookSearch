const db = require("../models/index");

// Defining methods for the userController
module.exports = {
  getBooks: (req, res) => {
    console.log('inside the controller')
    console.log(req.query)
    db.Book.find(req.query)
      .then((song) => {
        console.log('song')
        res.json(song);
      })
      .catch((err) => {
        console.log('error');
        res.status(422).json(err)});
  }   
}