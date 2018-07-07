import axios from 'axios';

export default {
  // Gets all articles
  getBook: function () {
    return axios.get("/api/book");
  },
  
  // Gets the book with the given id
  getbook: function(id) {
    return axios.get("/api/book" + id);
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/book/" + id);
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    return axios.post("/api/", bookData);
  },

  searchBook: function (book) {
    return axios.post("/api/quiz", book);
  }
};
