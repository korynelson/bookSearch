import React, { useEffect } from "react";
import BOOKS from '../../utils/BOOKS';

const SavedBooks = props => {

  useEffect(() => {
    console.log('getting books')
    BOOKS.getBooks({title: "The Hunger Games"}).then((res) => {
      console.log(res)
    });
  });

  return (
    <div>This is the saved books page</div>
  ) 
};

export default SavedBooks;