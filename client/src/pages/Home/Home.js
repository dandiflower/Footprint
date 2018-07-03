import React, { Component } from "react";
import CRUD from "../../utils/API";
// import QuizForm from "../../components/QuizForm";
// import QuizResults from "../../components/QuizResults";

class Home extends Component {
  state = {
    results: []
  };

  handleFormSubmit = event => {
    event.preventDefault();
    const article = {
      question: document.getElementById('question').value,
    }

    console.log(article);

    CRUD.searchArticles(article)
      .then(res => {
        if (res.data.status === "error") {
          throw new Error(res.data.message);
        }
        console.log(res.data)
        this.setState({ results: res.data });
      })
      .catch(err => console.log("search err",err));
  };

  handleSave = event =>{
    const el = event.target;
    const index = parseInt(el.getAttribute('data-index'));
    // console.log(this.state.results[index]);
    
    const article = this.state.results[index];
   
  
      const saveArticle = {
        headline: article.headline['print_headline'],
        url: article['web_url'],
        description: article.snippet,
        source: article.source,
        pub_date: article['pub_date'],
    
      }

    if(article.multimedia.length != 0) { 
      saveArticle["image"] = article.multimedia[0].legacy.xlarge
    }
   // console.log(saveArticle);
    CRUD.saveArticles(saveArticle)
    .then(response=>{
      // remove the result at index from state
      let state = this.state.results;
      state.splice(index, 1);

      this.setState({
        results: state
      })

    })
    .catch(err =>{
      console.log("save err", err);
    })
  }

  render() {
    return (
      <div>
        {/* <div className="container">
          <h1 className="text-center">Do this Quiz!</h1>
          <QuizForm
            handleFormSubmit={this.handleFormSubmit}
          />
          <QuizResults 
            results={this.state.results} 
            handleSave={this.handleSave}
           />
        </div> */}
      </div>
    );
  }
}

export default Home;

