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
  },
  saveBook: (req,res) => {
    const id = req.body.id;
    const title = req.body.volumeInfo.title;
    const authors = req.body.volumeInfo.authors;
    const description = req.body.volumeInfo.description;
    const img =req.body.volumeInfo.imageLinks.smallThumbnail;
    const link = req.body.volumeInfo.infoLink;

    const newBook = new db.Book({
      authors:authors,
      description:description, 
      img:img,
      link:link,
      title: title,
    });

    console.log(newBook)
    newBook.save((err, savedBook) => {
      if (err) return res.json(err);
      return res;
    });
  }
}