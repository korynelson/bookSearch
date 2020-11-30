import React, {useState} from "react";
import SearchIcon from '@material-ui/icons/Search';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';
import { Grid, } from "@material-ui/core";
import BookCard from '../../components/BookCard/index'

const Search = props => {
  const [query, setQuery] = useState("");
  const [bookData, setBookData] = useState(null);

  async function handleClick(e) {
    e.preventDefault();
    await axios.get(`/google${query}`).then((response) => {
      setBookData(response.data.items)
    }) 
    setQuery('')
  }


  const getBookCard = (bookID) => {
    if(
      bookData[bookID].volumeInfo.industryIdentifiers
      && bookData[bookID].volumeInfo.title
      && bookData[bookID].volumeInfo.description
      && bookData[bookID].volumeInfo.imageLinks
      && bookData[bookID].volumeInfo.authors
      && bookData[bookID].volumeInfo.infoLink
      && bookData[bookID]
      ){
      return(
        <Grid key = {bookData[bookID]._id} container spacing = {7}>
          <Grid item  xs = {1}/>
          <Grid item  xs = {10}>
            <BookCard 
              id = {bookData[bookID].volumeInfo.industryIdentifiers[0]}
              title = {bookData[bookID].volumeInfo.title}
              description = {bookData[bookID].volumeInfo.description}
              img = {bookData[bookID].volumeInfo.imageLinks.smallThumbnail}
              authors = {bookData[bookID].volumeInfo.authors}
              link = {bookData[bookID].volumeInfo.infoLink}
              data = {bookData[bookID]}
            />
          </Grid>
          <Grid item  xs = {1}/>
        </Grid>
      )
    }else{
      return(
        <Grid key = {bookData[bookID]._id} container spacing = {7}>
          <Grid item  xs = {1}/>
          <Grid item  xs = {10}>
            <BookCard 
              id = {"Not Enough Data To Render"}
              title = {"Not Enough Data To Render"}
              description = {"Not Enough Data To Render"}
              img = {"Not Enough Data To Render"}
              authors = {"Not Enough Data To Render"}
              link = {"Not Enough Data To Render"}
            />
          </Grid>
          <Grid item  xs = {1}/>
        </Grid>
      )
    }

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
