const mongoose = require("mongoose");
const db = require("../models");

// This file empties the books list and inserts the book bellow 
mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/googlebooks"
);
const bookSeed = [
    {
        authors: ["Suzanne Collins"],
        description: "Set in a dark vision of the near future, a terrifying reality TV show is taking place. Twelve boys and twelve girls are forced to appear in a live event called The Hunger Games. There is only one rule: kill or be killed. When sixteen-year-old Katniss Everdeen steps forward to take her younger sister's place in the games, she sees it as a death sentence. But Katniss has been close to death before. For her, survival is second nature.",
        img: "http://books.google.com/books/content?id=sazytgAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
        link: "http://books.google.com/books?id=sazytgAACAAJ&dq=title:The+Hunger+Games&hl=&source=gbs_api",
        title: "The Hunger Games",
    },
    {
      authors: ["William C. Dietz"],
      description: "The humans aboard the spaceship the Pillar of Autumn crash-land onto a mysterious ringworld, where they",
      img: "http://books.google.com/books/content?id=UgfJO3kUF90C&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      link: "http://books.google.com/books?id=UgfJO3kUF90C&dq=Halo&hl=&source=gbs_api",
      title: "Halo: The Flood",
  },
];
db.Book
  .remove({})
  .then(() => db.Book.insertMany(bookSeed))
  .then(data => {
    console.log(data + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
