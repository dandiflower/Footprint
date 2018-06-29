import axios from 'axios';

export default {
  // Gets all articles
  getArticles: function () {
    return axios.get("http://localhost:3002/api/article");
  },
  
  // // Gets the article with the given id
  // getArticles: function(id) {
  //   return axios.get("/api/Articles" + id);
  // },
  // Deletes the article with the given id
  deleteArticle: function(id) {
    return axios.delete("http://localhost:3002/api/article/" + id);
  },
  // Saves a article to the database
  saveArticles: function(articleData) {
    return axios.post("http://localhost:3002/api/article", articleData);
  },

  searchArticles: function (article) {
    return axios.post("http://localhost:3002/api/search", article);
  }
};
