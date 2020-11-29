import React, { useEffect, useState } from "react";
import BOOKS from '../../utils/BOOKS';

const SavedBooks = props => {
  const [bookNumber, setBookNumber] = useState(0);

  useEffect(() => {
    console.log('getting books')
    BOOKS.getBooks({title: "The Hunger Games"}).then((res) => {
      console.log(res)
      setBookNumber(res.data.length)
    });
  });

  return (
    <div>
        <div>{bookNumber}</div>
        <div>This is the saved books page</div>
    </div>
  ) 
};

export default SavedBooks;