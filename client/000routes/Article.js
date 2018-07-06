const router = require("express").Router();
const articleController = require("../../controllers/articleController");
const axios = require('axios');


/* ARTICLE API ROUTES */
// ALL ROUTES THAT INTERACT WITH CONTROLLER

// Create function in articlecontroller
router.post("/article", (req, res) => {
  articleController.Create(req.body, (results) => {
    console.log(results);
    res.json(results);
  })
});

// Find function in articlecontroller
router.get("/article", (req, res)=>{
  articleController.FindAll((allArticles)=>{
    // console.log(allArticles)
    res.json(allArticles)
  })
});

// Delete function in articlecontroller
router.delete("/article/:id", (req, res) => {
  articleController.DeleteOne(req.params.id, (results)=>{
    console.log("results",results);
    res.json(results);
  })
});

/* END ARTICLE API ROUTES */ 


/* NYT API CALL*/
router.post("/search", (req, res)=>{
  const basesURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json"
  const topic = `q=${req.body.topic}`;
  const startDate = `begin_date=${req.body.startDate}`;
  const endDate = `end_date=${req.body.endDate}`;
  const apiKey = `9b3adf57854f4a19b7b5782cdd6e427a`;

  const queryURL = `${basesURL}?${topic}&${startDate}&${endDate}&api-key=${apiKey}`;
  axios.get(queryURL)
  .then((results)=>{
    console.log(results.data.response.docs);
    res.json(results.data.response.docs);
  });

});

module.exports = router;
