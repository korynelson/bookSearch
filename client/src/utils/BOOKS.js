import axios from "axios";

export default {
  // Gets user info
  getBooks: function() {
    return axios.get("/books");
  },

  saveBook: function(bookData){
    return axios.post('/books', bookData);
  },

  deleteBook: function(bookData){
    return axios.delete('/books', bookData);
  }
};