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

    componentDidMount() {
        axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken');
        axios.get('/api/person')
            .then(res => {
                this.setState({ persons: res.data });
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
                    userId: res.data[0].userId
                })
                console.log("this.state before", this.state);
                
                console.log("this.state mid", this.state);
                // this.getChartData()
                console.log("this.state after1", this.state);
                this.props.history.push()
                
                
            })
            // console.log("this.state after2", this.state);
            .catch((error) => {
                if (error.response.status === 401) {
                    this.props.history.push("/login");
                }
            });
            
    }

    // shouldComponentUpdate(nextProps,nextState) {
    //     this.getChartData()
    //     console.log("this.state shouldComponentUpdate", this.state)
    // }
    // componentWillMount() {
    //     this.allData()

    //     console.log("this.sbfggfdluniebllcrlgkceljbierkcrugtate in componentDidUpdate", this.state)
    //     console.log(this.state.userId)
    //     this.getChartData()
    //     const getUserId = {
    //         userId: this.state.userId
    //     }
    //     HELPERS.getResults(getUserId)
    //         .then(dbResults => {
    //             console.log("dbResults", dbResults)
    //             this.setState({
    //                 firstName: dbResults.data.firstName,
    //                 q1: dbResults.data.q1,
    //                 q2: dbResults.data.q2,
    //                 q3: dbResults.data.q3,
    //                 q4: dbResults.data.q4,
    //                 q5: 0,
    //                 q6: 0,
    //                 q7: "",
    //                 q8: 0,
    //                 q9: 0,
    //                 q10: 0,
    //                 q11: 0,
    //                 q12: 0,
    //                 q13: 0,
    //                 q14: 0,
    //                 q15: 0,
    //                 q16: 0,
    //             })
    //         })
    // }

    getChartData = () => {
        // HELPERS.getResults()
        //     .then(res =>
        this.setState({
            chartData: {
                labels: ['You', 'USA Average'],
                datasets: [{
                    label: 'Number of Days per Week',
                    //data: [res.data.q1, average]
                    // data: [this.state.q1, 5],
                    data: [2,5],
                    backgroundColor: ['rgba(255,99,132,0.2)', 'rgba(255,99,132,0.2)']
                }]
            },
            chartDataB: {
                labels: ['You', 'USA Average'],
                datasets: [{
                    label: 'Number of Days per Week',
                    //data: [res.data.q1, average]
                    // data: [this.state.q2, 5],
                    data: [20,10],
                    backgroundColor: ['rgba(255,99,132,0.2)', 'rgba(255,99,132,0.2)']
                }]
            },
            pieChartData: {
                // labels: [this.state.q3, 'Category2', 'Category3'],
                labels: ['Freestanding, no running water', 'Freestanding, running water', 'Multi-story apartment', 'Duplex unit'],
                datasets: [{
                    data: [50,10,30,5,5],
                    backgroundColor: [
                        '#FF6384',
                        '#36A2EB',
                        '#FFCE56',
                        '#447AB2',
                        '#800000',
                    ],
                    hoverBackgroundColor: [
                        '#FF6384',
                        '#36A2EB',
                        '#FFCE56'
                    ]
                }]
            },
            pieChartDataB: {
                // labels: [this.state.q3, 'Category2', 'Category3'],
                labels: ['Straw/bamboo', 'Wood', 'Adobe', 'Brick/concrete', 'Steel/other'],
                datasets: [{
                    data: [10,25,35,10,20],
                    backgroundColor: [
                        '#FF6384',
                        '#36A2EB',
                        '#FFCE56',
                        '#447AB2',
                        '#800000',
                    ],
                    hoverBackgroundColor: [
                        '#FF6384',
                        '#36A2EB',
                        '#FFCE56'
                    ]
                }]
            },
            pieChartDataC: {
                // labels: [this.state.q3, 'Category2', 'Category3'],
                labels: ['Yes', 'No'],
                datasets: [{
                    data: [90,10],
                    backgroundColor: [
                        '#FF6384',
                        '#36A2EB',
                        
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


                            {/* 1st question */}
                            <Chart
                                chartData={this.state.chartData}
                                location='1) How many times a week do you eat meat?'
                                legendPosition="bottom"
                                height={400}
                                max={10}
                            />

                            {/* 2nd question  */}
                            <Chart
                                chartData={this.state.chartDataB}
                                location='2) How much of the food that you eat is unprocessed, unpackaged or locally grown?'
                                legendPosition="bottom"
                                height={400}
                                max={100}
                            />

                            {/* 3rd question  */}
                            <PieChart
                                chartData={this.state.pieChartData}
                                location='3) Which housing type best describes your home?'

                            />

                            {/* 4th question  */}
                            <PieChart
                                chartData={this.state.pieChartDataB}
                                location='4) What material is your house constructed with?'

                            />

                            {/* fif5thth question  */}
                            <Chart
                                chartData={this.state.chartData}
                                location='5) How many people live in your household?'
                                legendPosition="bottom"
                                height={400}
                                max={100}
                            />

                            {/* 6th question  */}
                            <Chart
                                chartData={this.state.chartData}
                                location='6) What is the size of your home?'
                                max={100}
                            />

                            {/* 7th question  */}
                            <PieChart
                                chartData={this.state.pieChartDataC}
                                location='7) Do you have electricity in your home?'
                            />

                            {/* 8th question  */}
                            <Chart
                                chartData={this.state.chartData}
                                location='8) How energy efficient is your home?'
                                legendPosition="bottom"
                                height={400}
                                max={100}
                            />

                            {/* 9th question  */}
                            <Chart
                                chartData={this.state.chartData}
                                location='9) What percentage of your home’s electricity comes from renewable sources (either directly or through purchased green power)?'
                                legendPosition="bottom"
                                height={400}
                                max={100}
                            />

                            {/* 10th question  */}
                            <Chart
                                chartData={this.state.chartData}
                                location='10) Compared to your neighbors, how much trash do you generate?'
                                legendPosition="bottom"
                                height={400}
                                max={100}
                            />

                            {/* 11th question  */}
                            <Chart
                                chartData={this.state.chartData}
                                location='11a) How far do you travel by car each week? '
                                legendPosition="bottom"
                                height={400}
                                max={100}
                            />

                            {/* 12th question  */}
                            <Chart
                                chartData={this.state.chartData}
                                location='11b) How far do you travel by motorcycle each week?'
                                legendPosition="bottom"
                                height={400}
                                max={100}
                            />

                            {/* 13th question  */}
                            <Chart
                                chartData={this.state.chartData}
                                location='13) What is the average fuel economy the vehicles you use most often? '
                                legendPosition="bottom"
                                height={400}
                                max={100}
                            />

                            {/* 14th question  */}
                            <Chart
                                chartData={this.state.chartData}
                                location='14) When you travel by car, how often do you carpool? '
                                legendPosition="bottom"
                                height={400}
                                max={100}
                            />

                            {/* 15th question  */}
                            <Chart
                                chartData={this.state.chartData}
                                location='15) How far do you travel on public transportation each week?'
                                legendPosition="bottom"
                                height={400}
                                max={100}
                            />

                            {/* 16th question  */}
                            <Chart
                                chartData={this.state.chartData}
                                location='16) How many hours do you fly each year?'
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