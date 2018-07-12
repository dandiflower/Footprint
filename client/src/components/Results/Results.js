import React from "react";
import Navbar from "../Navbar/Navbar";
import HELPERS from "../../utils/helpers.js";
import "./Results.css";
import Chart from "../Chart/Chart"


class Results extends React.Component {
    constructor() {
        super();
        this.state = {
            chartData: {}
        }
    }

getChartData() {
    this.setState({
        chartData: {
            labels: ['You', 'USA Average'],
            datasets: [{
                label: 'Number of Days',
                data:[
                    3,
                    5
                ],
                backgroundColor: ['rgba(255,99,132,0.2)', 'rgba(255,99,132,0.2)']
            }]
        }
    });
}


logout() {
    localStorage.removeItem('jwtToken');
    window.location.reload();
}

componentWillMount(){
    this.getChartData()
    console.log(this.state.userId)
    const getUser = {
        userId: this.state.userId
    }
    HELPERS.getResults(this.state.userId)
    .then(dbResults=>{
        console.log("dbResults", dbResults)
        this.setState({
            firstName: dbResults.data.firstName,
            q1: dbResults.data.q1,
        })
    })
}




render(){
    return(
        <div>
            <Navbar />
            <div id="results--card--center">
                <div className="container">
                    <div className="card" >
                        <div className="card-header">
                            <h1>See your results {this.state.firstName}!</h1>
                        </div>
                        <ul className="list-group list-group-flush">
                            <li id="listResults" className="list-group-item text-center"><h2>See in the graph below how your footprint compares to the rest of people!</h2></li>
                            <li className="text-center">  </li>
                        </ul>
                    
                        {/* first question */}
                        <Chart 
                        chartData={this.state.chartData}
                        location='How much meat you eat compared to the average US citizen'
                        legendPosition="bottom"
                        height={400}
                        max={10}
                        />   

                        {/* second question  */}
                        <Chart 
                        
                        />
                      

                        <p>
                            {localStorage.getItem('jwtToken') &&
                                <button
                                    className="btn btn-primary"
                                    onClick={this.logout}>
                                    Logout
                                </button>
                            }
                        </p>

                    </div>
                </div>
            </div>
           
        </div>
    );
}


}


export default Results;