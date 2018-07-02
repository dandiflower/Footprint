import React from "react";
import "./style.css";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
const QuizForm = props => (
    <form className="Quiz">
        <div className="form-group">
            <label htmlFor="question">Question: 1</label>
            <input
                name="question"
                type="range"
                className="form-control-range"
                id="formControlRange"
        />
            <button
                type="submit"
                onClick={props.handleFormSubmit}
                className="btn btn-success"
            >
                Submit
            </button>
        </div>
    </form>
);

export default QuizForm;
