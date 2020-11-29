import React from "react";
import SearchIcon from '@material-ui/icons/Search';
import TextField from '@material-ui/core/TextField';

const Search = props => {

  return (
  <div>
    <div>Search for books here</div>
      <div>
        <SearchIcon></SearchIcon>
        <TextField></TextField>
    </div>
  </div>

  )
};

export default Search;
