import React, {useState} from "react";
import SearchIcon from '@material-ui/icons/Search';
import TextField from '@material-ui/core/TextField';
import InputBase from '@material-ui/core/InputBase';
import { Button } from "@material-ui/core";

const Search = props => {
  const [query, setQuery] = useState("")

  const handleClick = (e) => {
    e.preventDefault();
    console.log(e.target)
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

    </div>
  </div>

  )
};

export default Search;
