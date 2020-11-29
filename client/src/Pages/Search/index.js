import React, {useState} from "react";
import SearchIcon from '@material-ui/icons/Search';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';

const Search = props => {
  const [query, setQuery] = useState("");
  const [resutls, setResults] = useState("");

  async function handleClick(e) {
    e.preventDefault();
    console.log(e.target)
    await axios.get(`/google${query}`).then((response) => {
      console.log('hello')
      console.log(response)
      setResults(response.data.items[0].volumeInfo.title)
    }) 
    setQuery('')
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
  <div>{resutls}</div>
    </div>
  </div>

  )
};

export default Search;
