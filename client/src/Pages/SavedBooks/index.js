import React, { useEffect, useState } from "react";
import BOOKS from '../../utils/BOOKS';
import BookCard from '../../components/BookCard/index'
import { CircularProgress, Grid, Typography } from "@material-ui/core";



const SavedBooks = props => {
  const [bookData, setBookData] = useState(null);

  useEffect(() => {
    BOOKS.getBooks({title: "The Hunger Games"}).then((res) => {
      setBookData(res.data)
    });
  }, []);


  const getBookCard = (bookID) => {
    return(
      <Grid key = {bookData[bookID]._id} container spacing = {7}>
        <Grid item spacing = {7} xs = {1}/>
        <Grid item spacing = {7} xs = {10}>
          <BookCard 
            id = {bookData[bookID]._id}
            title = {bookData[bookID].title}
            description = {bookData[bookID].description}
            img = {bookData[bookID].img}
            authors = {bookData[bookID].authors}
            link = {bookData[bookID].link}
            data = {bookData[bookID]}
          />
        </Grid>
        <Grid item spacing = {7} xs = {1}/>
      </Grid>
    )
  }

  return (
    <div>
      <br></br>
      {bookData ? (
          <div>
            {Object.keys(bookData).map(bookID => 
            getBookCard(bookID)
            )}
          </div>
      ) : (
        <div >
          <CircularProgress/>
        </div>
      )}


    </div>
  ) 
};

export default SavedBooks;