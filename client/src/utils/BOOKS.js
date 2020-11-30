import axios from "axios";

export default {
  // Gets user info
  getBooks: function() {
      console.log('entering axios getBooks')
    return axios.get("/books", {params: {title: "The Hunger Games" }});
  },

  saveBook: function(bookData){
    console.log(bookData)
    return axios.post('/books', bookData);
  }
};