import React from "react";
import axios from 'axios';
import Navbar from "../Navbar/Navbar";
import HELPERS from "../../utils/helpers.js";
import "./Results.css";
import Chart from "../Chart/Chart";


class Results extends React.Component {
    constructor() {
        super();
        this.state = {
            chartData: {},
            firstName: "",
            zipCode:"",
            q1: "",
            q2: "",
            q3: "",
            q4: "",
            q5: "",
            q6: "",
            q7: "",
            q8: "",
            q9: "",
            q10: "",
            q11: "",
            q12: "",
            q13: "",
            q14: "",
            q15: "",
            q16: "",
        }
    }

    allData = () => {
        HELPERS.getResults()
            .then(res => 
            console.log(res.data)
            )
    }

    getChartData = () => {
        // HELPERS.getResults()
        //     .then(res =>
                this.setState({
                    chartData: {
                        labels: ['You', 'USA Average'],
                        datasets: [{
                            label: 'Number of Days per Week',
                            //data: [res.data.q1, average]
                            data: [3, 5],
                            backgroundColor: ['rgba(255,99,132,0.2)', 'rgba(255,99,132,0.2)']
                        }]
                    }
                })
            // )

    }


    logout() {
        localStorage.removeItem('jwtToken');
        window.location.reload();
    }

    componentWillMount() {
        // this.allData()
        this.getChartData()
        console.log(this.state.userId)
        const getUser = {
            userId: this.state.userId
        }
        HELPERS.getResults(this.state.userId)
            .then(dbResults => {
                console.log("dbResults", dbResults)
                this.setState({
                    firstName: dbResults.data.firstName,
                    q1: dbResults.data.q1,
                })
            })
    }

// is the user authorized????
componentDidMount() {

    axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken');
    axios.get('/api/person')
        .then(res => {
            this.setState({ persons: res.data });
            console.log("this.state.persons", this.state.persons);
            this.props.history.push()
        })
        .catch((error) => {
            if (error.response.status === 401) {
                this.props.history.push("/login");
            }
        });
}



    render() {
        return (
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