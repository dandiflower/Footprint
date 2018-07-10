import React, { Component } from "react";
import Navbar from "../Navbar/Navbar";
import HELPERS from "../../utils/helpers.js";

class Results extends React.Component {

state = {
    userId: HELPERS.getCookies(),
    firstName:""
}

componentWillMount(){
    console.log(this.state.userId)
    const getUser = {
        userId: this.state.userId
    }
    HELPERS.getResults(this.state.userId)
    .then(dbResults=>{
        console.log("dbResults", dbResults)
        this.setState({
            firstName: dbResults.data.firstName
        })
    })
}


render(){
    return(
        <div>
            <Navbar />
            <div className="container">

                <h1>results page</h1>
                <h2>welcome,{this.state.firstName}</h2>
                
            </div>
        </div>
    );
}


}


export default Results;