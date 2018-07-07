const router = require("express").Router();
const bookController = require("../../controllers/bookController");
const axios = require('axios');


/* book API ROUTES */
// ALL ROUTES THAT INTERACT WITH CONTROLLER

// Create function in bookcontroller
router.post("/book", (req, res) => {
  bookController.Create(req.body, (results) => {
    console.log(results);
    res.json(results);
  })
});

// Find function in bookcontroller
router.get("/", (req, res)=>{
  bookController.FindAll((allbooks)=>{
    // console.log(allbooks)
    res.json(allbooks)
  })
});

// Delete function in bookcontroller
router.delete("/book/:id", (req, res) => {
  bookController.DeleteOne(req.params.id, (results)=>{
    console.log("results",results);
    res.json(results);
  })
});

/* END book API ROUTES */ 


/* NYT API CALL*/
router.post("/search", (req, res)=>{
  const basesURL = "https://api.nytimes.com/svc/search/v2/booksearch.json"
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
