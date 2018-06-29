import React, { Component } from "react";
import API from "../../utils/API";
// import { Link } from "react-router-dom";

import SavedResults from "../../components/SavedResults";




class Saved extends Component {
  state = {
    articles: []
  }

  componentDidMount(){
    this.getArticles();
  }

  getArticles() {
    API.getArticles()
      .then(results =>{
       // console.log("results", results.data)
        this.setState({
          articles: results.data
        })
      })
  }

  deleteArticle = (e) => {
    const el = e.target;
    const id = parseInt(el.getAttribute('data-id'));
    const index = parseInt(el.getAttribute('data-index'));
    console.log("id", id)
    API.deleteArticle(id)
    .then(results=>{
      // remove the result at index from state
      let state = this.state.articles;
      state.splice(index, 1);
      this.setState({
        articles: state
      });

    })
  }

  render() {
    return (
      <div>
       <SavedResults results={this.state.articles} deleteArticle={this.deleteArticle}/>
      </div>
    );
  }
}

export default Saved;
