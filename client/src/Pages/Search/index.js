import React, {useState} from "react";
import SearchIcon from '@material-ui/icons/Search';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';
import { CircularProgress, Grid, Typography } from "@material-ui/core";
import BookCard from '../../components/BookCard/index'

const Search = props => {
  const [query, setQuery] = useState("");
  const [bookData, setBookData] = useState("");

  async function handleClick(e) {
    e.preventDefault();
    console.log(e.target)
    await axios.get(`/google${query}`).then((response) => {
      console.log('hello')
      console.log(response)
      setBookData(response.data.items)
    }) 
    setQuery('')
  }


  const getBookCard = (bookID) => {
    console.log(bookData[`${bookID}`])
    return(
      <Grid key = {bookData[bookID]._id} container spacing = {7}>
        <Grid item spacing = {7} xs = {1}/>
        <Grid item spacing = {7} xs = {10}>
          <BookCard 
            id = {bookData[bookID].volumeInfo.industryIdentifiers[1]}
            title = {bookData[bookID].volumeInfo.title}
            description = {bookData[bookID].volumeInfo.description.slice(0,25)}
            img = {bookData[bookID].volumeInfo.imageLinks.smallThumbnail}
            authors = {bookData[bookID].volumeInfo.authors}
            link = {bookData[bookID].volumeInfo.infoLink}
          />
        </Grid>
        <Grid item spacing = {7} xs = {1}/>
      </Grid>
    )
  }

  return (
  <div>
    <div>Search for books here</div>
      <div>
        <form onSubmit = {(e) => handleClick(e)}>
            <SearchIcon />
            <TextField type='text' value={query} onChange={(e) => setQuery(e.target.value)}>
            </TextField>
        </form>
  <div>      <br></br>
      {bookData ? (
          <div>
            {Object.keys(bookData).map(bookID => 
            getBookCard(bookID)
            )}
          </div>
      ) : (
        <div >
          <p>
            Search for books to see resutls
          </p>
        </div>
      )}</div>
    
    </div>
  </div>

  )
};

export default Search;
