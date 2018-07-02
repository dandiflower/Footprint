import React from "react";
import "./style.css";

const SearchResults = props => (
    <div className="test">
        {props.results.map((result, index) => (
            <div className="card" key={index}>
                {result.multimedia.length != 0 ? <img className="card-img-top" src={`https://www.nytimes.com/${result.multimedia[0].legacy.xlarge}`} alt="Card image cap" />  : "" }
                    <div className="card-body">
                        <h5 className="card-title">{result.headline['print_headline']}</h5>
                        <p className="card-text">{result.snippet}</p>
                        <a href={result['web_url']} className="btn btn-primary">see more</a>
                        <button data-index={index} className="btn btn-primary saveArticle" onClick={props.handleSave}>Save</button>
                    </div>
            </div>
                ))}
        
        
    </div>

        );

export default SearchResults;
        