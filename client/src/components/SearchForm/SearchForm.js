import React from "react";
import "./style.css";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
const SearchForm = props => (
    <form className="search">
        <div className="form-group">
            <label htmlFor="topic">TOPIC</label>
            <input
                name="topic"
                type="text"
                className="form-control"
                placeholder="Type in a news topic"
                id="topic"
            />
            <label htmlFor="startDate">Start Date</label>
            <input
                name="startDate"
                type="date"
                className="form-control"
                placeholder="YYYYMMDD"
                id="startDate"
            />
            <label htmlFor="endDate">End Date</label>
            <input
                name="endDate"
                type="date"
                className="form-control"
                placeholder="YYYYMMDD"
                id="endDate"
            />
            <button
                type="submit"
                onClick={props.handleFormSubmit}
                className="btn btn-success"
            >
                Search
            </button>
        </div>
    </form>
);

export default SearchForm;
