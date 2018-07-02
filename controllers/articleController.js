const db = require("../models");
const axios = require("axios");
const cheerio = require("cheerio");

// Defining methods for the booksController
module.exports = {

  Create:  (article, cb) => {
    //work here
    db.Article.create(article)
      .then(function (dbArticle) {
        // View the added result in the console
        console.log(dbArticle);
        cb(dbArticle);
      })
      .catch(function (err) {
        // If an error occurred, send it to the client
        return cb(err);
      })

  },

  FindAll: (cb) =>{
    db.Article
      .find()
      .sort({ date: 1 })
      .then(dbModel => cb(dbModel))
      .catch(err => cb(err));
  },

  DeleteOne:  (articleID, cb) => {
    db.Article.remove({ _id: articleID })
    .then(dbResults => cb(dbResults))
    .catch(function(err) {
      console.log("err", err)
      return cb(err);
    })
  }

  // scraper: function(req, res) {
  
  //   // A GET route for scraping the website
  //   app.get("/scrape", function (req, res) {
  //     // First, we grab the body of the html with request
  //     axios.get("https://www.nytimes.com/?action=click&pgtype=Homepage&module=MastheadLogo&region=TopBar&WT.z_jog=1&hF=t&vS=undefined").then(function (response) {
  //       // Then, we load that into cheerio and save it to $ for a shorthand selector
  //       const $ = cheerio.load(response.data);

  //       // Now, we grab every tag, and do the following:
  //       $("article").each(function (i, element) {

  //         // Save an empty result object
  //         const result = {};

  //         // Add the text and href of every link, and save them as properties of the result object
  //         result.title = $(element)
  //           .children("a")
  //           .text();
  //         result.date = $(element)
  //           .children("time")
  //           .text();
  //         result.url = $(element)
  //           .children("a")
  //           .attr("href");

  //         console.log("========================================");
  //         console.log(result);

  //         })
  //       })
  //     })
    
//               // Create a new Article using the `result` object built from scraping



// // If we were able to successfully scrape and save an Article, send a message to the client
//     res.send("Scrape Complete");
//   },



    // Route for getting all Articles from the db
    // app.get("/articles", function(req, res) {
    //   // Grab every document in the Articles collection
    //   db.Article.find({})
    //     .then(function(dbArticle) {
    //       // If we were able to successfully find Articles, send them back to the client
    //       res.json(dbArticle);
    //     })
    //     .catch(function(err) {
    //       // If an error occurred, send it to the client
    //       res.json(err);
    //     });
    // })
}