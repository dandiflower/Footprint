import React, { Component } from "react";
import API from "../../utils/API";
import SearchForm from "../../components/SearchForm";
import SearchResults from "../../components/SearchResults";

class Home extends Component {
  state = {
    results: []
  };

  handleFormSubmit = event => {
    event.preventDefault();
    const article = {
      topic: document.getElementById('topic').value,
      startDate: document.getElementById('startDate').value,
      endDate: document.getElementById('endDate').value
    }


    article.startDate = article.startDate.replace(/[^\w\s]/gi, '');
    article.endDate = article.endDate.replace(/[^\w\s]/gi, '');
    console.log(article);

    API.searchArticles(article)
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
    API.saveArticles(saveArticle)
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
        <div className="container">
          <h1 className="text-center">Search For An Article!</h1>
          <SearchForm
            handleFormSubmit={this.handleFormSubmit}
          />
          <SearchResults 
            results={this.state.results} 
            handleSave={this.handleSave}
           />
        </div>
      </div>
    );
  }
}

export default Home;

