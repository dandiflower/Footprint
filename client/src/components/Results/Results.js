import React from "react";
import axios from 'axios';
import Navbar from "../Navbar/Navbar";
import HELPERS from "../../utils/helpers.js";
import "./Results.css";
import Chart from "../Chart/Chart";
import PieChart from "../Chart/PieChart";


class Results extends React.Component {
    constructor() {
        super();
        this.state = {
            firstName: "",
            zipCode: "",
            q1: 0,
            q2: 0,
            q3: "",
            q4: "",
            q5: 0,
            q6: 0,
            q7: "",
            q8: 0,
            q9: 0,
            q10: 0,
            q11: 0,
            q12: 0,
            q13: 0,
            q14: 0,
            q15: 0,
            q16: 0,
            userId: "",
            chartData: {},
            chartDataB: {},
        }
    }

    allData = () => {
        HELPERS.getResults()
            .then(res =>
                console.log(res.data)
            )
    }
    // componentWillMount() {
    //     this.getChartData();
    // }

    async componentDidMount() {
        axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken');
        axios.get('/api/person')
            .then(res => {
                // this.setState({ persons: res.data });
                this.setState({
                    firstName: res.data.firstName,
                    q1: res.data[0].q1,    
                    q2: res.data[0].q2,
                    q3: res.data[0].q3,
                    q4: res.data[0].q4,
                    q5: res.data[0].q5,
                    q6: res.data[0].q6,
                    q7: res.data[0].q7,
                    q8: res.data[0].q8,
                    q9: res.data[0].q9,
                    q10: res.data[0].q10,
                    q11: res.data[0].q11,
                    q12: res.data[0].q12,
                    q13: res.data[0].q13,
                    q14: res.data[0].q14,
                    q15: res.data[0].q15,
                    q16: res.data[0].q16,
                })
                this.getChartData()
                console.log("this.state", this.state);
                this.props.history.push()
                
            })
            
            .catch((error) => {
                if (error.response.status === 401) {
                    this.props.history.push("/login");
                }
            });
            
    }

    componentWillMount() {
        this.allData()

        console.log("this.sbfggfdluniebllcrlgkceljbierkcrugtate in componentDidUpdate", this.state)
        console.log(this.state.userId)
        this.getChartData()
        const getUserId = {
            userId: this.state.userId
        }
        HELPERS.getResults(getUserId)
            .then(dbResults => {
                console.log("dbResults", dbResults)
                this.setState({
                    firstName: dbResults.data.firstName,
                    q1: dbResults.data.q1,
                    q2: dbResults.data.q2,
                    q3: dbResults.data.q3,
                    q4: dbResults.data.q4,
                    q5: 0,
                    q6: 0,
                    q7: "",
                    q8: 0,
                    q9: 0,
                    q10: 0,
                    q11: 0,
                    q12: 0,
                    q13: 0,
                    q14: 0,
                    q15: 0,
                    q16: 0,
                })
            })
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
            },
            chartDataB: {
                labels: ['You', 'USA Average'],
                datasets: [{
                    label: 'Number of Days per Week',
                    //data: [res.data.q1, average]
                    data: [3, 5],
                    backgroundColor: ['rgba(255,99,132,0.2)', 'rgba(255,99,132,0.2)']
                }]
            },
            pieChartData: {
                labels: ['Category1', 'Category2', 'Category3'],
                datasets: [{
                    data: [80, 10, 10],
                    backgroundColor: [
                        '#FF6384',
                        '#36A2EB',
                        '#FFCE56'
                    ],
                    hoverBackgroundColor: [
                        '#FF6384',
                        '#36A2EB',
                        '#FFCE56'
                    ]
                }]
            }
        })
        // )

    }

// don't uncomment below.. causes problems jb

    // componentDidUpdate() {
       
    //     console.log("componentDidUpdate this.state", this.state)
    //     this.getChartData();
    // }

// I uncommented this 8.15.18 -jb ...below 



    logout() {
        delete document.cookie[this.state.user];
        localStorage.removeItem('jwtToken');
        window.location.reload();
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

                            <div>  </div>

                            {/* 1st question */}
                            <Chart
                                chartData={this.state.chartData}
                                location='How many times a week do you eat meat?'
                                legendPosition="bottom"
                                height={400}
                                max={10}
                            />

                            {/* 2nd question  */}
                            <Chart
                                chartData={this.state.chartDataB}
                                location='How much of the food that you eat is unprocessed, unpackaged or locally grown?'
                                legendPosition="bottom"
                                height={400}
                                max={100}
                            />

                            {/* 3rd question  */}
                            <PieChart
                                chartData={this.state.pieChartData}
                                location='Which housing type best describes your home?'

                            />

                            {/* 4th question  */}
                            <PieChart
                                chartData={this.state.pieChartData}
                                location='What material is your house constructed with?'

                            />

                            {/* fif5thth question  */}
                            <Chart
                                chartData={this.state.chartData}
                                location='How many people live in your household?'
                                legendPosition="bottom"
                                height={400}
                                max={100}
                            />

                            {/* 6th question  */}
                            <Chart
                                chartData={this.state.chartData}
                                location='What is the size of your home?'
                                max={100}
                            />

                            {/* 7th question  */}
                            <PieChart
                                chartData={this.state.pieChartData}
                                location='Do you have electricity in your home?'

                            />

                            {/* 8th question  */}
                            <Chart
                                chartData={this.state.chartData}
                                location='How energy efficient is your home?'
                                legendPosition="bottom"
                                height={400}
                                max={100}
                            />

                            {/* 9th question  */}
                            <Chart
                                chartData={this.state.chartData}
                                location='What percentage of your home’s electricity comes from renewable sources (either directly or through purchased green power)?'
                                legendPosition="bottom"
                                height={400}
                                max={100}
                            />

                            {/* 10th question  */}
                            <Chart
                                chartData={this.state.chartData}
                                location='Compared to your neighbors, how much trash do you generate?'
                                legendPosition="bottom"
                                height={400}
                                max={100}
                            />

                            {/* 11th question  */}
                            <Chart
                                chartData={this.state.chartData}
                                location='How far do you travel by car or motorcycle each week? '
                                legendPosition="bottom"
                                height={400}
                                max={100}
                            />

                            {/* 12th question  */}
                            <Chart
                                chartData={this.state.chartData}
                                location='How far do you travel by car or motorcycle each week?'
                                legendPosition="bottom"
                                height={400}
                                max={100}
                            />

                            {/* 13th question  */}
                            <Chart
                                chartData={this.state.chartData}
                                location='What is the average fuel economy the vehicles you use most often? '
                                legendPosition="bottom"
                                height={400}
                                max={100}
                            />

                            {/* 14th question  */}
                            <Chart
                                chartData={this.state.chartData}
                                location='When you travel by car, how often do you carpool? '
                                legendPosition="bottom"
                                height={400}
                                max={100}
                            />

                            {/* 15th question  */}
                            <Chart
                                chartData={this.state.chartData}
                                location='How far do you travel on public transportation each week?'
                                legendPosition="bottom"
                                height={400}
                                max={100}
                            />

                            {/* 16th question  */}
                            <Chart
                                chartData={this.state.chartData}
                                location='How many hours do you fly each year?'
                                legendPosition="bottom"
                                height={400}
                                max={100}
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