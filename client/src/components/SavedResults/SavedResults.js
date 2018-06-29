import React from "react";
import "./style.css";

const SavedResults = props => (
    <div>
        {props.results.map((result, index) => (
            <div className="card" key={index}>
                {result.image != undefined ? <img className="card-img-top" src={`https://www.nytimes.com/${result.image}`} alt="Card image cap" /> : ""}
               
                <div className="card-body">
                    <h5 className="card-title">{result.headline}</h5>
                    <p className="card-text">{result.description}</p>
                    <a href={result.url} className="btn btn-primary">see more</a>
                    <button data-id={result["_id"]} data-index={index} className="btn btn-primary deleteArticle" onClick={props.deleteArticle}>Delete</button>
                </div>
            </div>
        ))}


    </div>

);

export default SavedResults;
