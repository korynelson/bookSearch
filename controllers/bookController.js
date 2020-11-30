const db = require("../models/index");

// Defining methods for the userController
module.exports = {
  getBooks: (req, res) => {
    db.Book.find()
      .then((books) => {
        res.json(books);
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

    newBook.save((err, savedBook) => {
      if (err) return res.json(err);
      return res;
    });
  },

  deleteBook: (req , res) => {
    const id = req.query[0];
    db.Book.findOneAndDelete({_id:id},(err, bookMatch) => {
      if (bookMatch) {
        return res.json({
          error: `I found that book in the databse: ${id}`,
        });
      }else{
        console.log('couldnt find that book')
      }
  });
}
}