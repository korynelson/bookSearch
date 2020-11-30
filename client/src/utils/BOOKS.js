import axios from "axios";

export default {
  // Gets user info
  getBooks: function() {
    return axios.get("/books");
  },

  saveBook: function(bookData){
    return axios.post('/books', bookData);
  },

  deleteBook: function(deleteId){
    return axios.delete('/books',{params: deleteId});
  }
};