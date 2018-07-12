import React from "react";
import Navbar from "../Navbar/Navbar";
import HELPERS from "../../utils/helpers.js";
import "./Results.css";
import Chart from "../Chart/Chart"


class Results extends React.Component {

state = {
    userId: HELPERS.getCookies(),
    firstName:"hannah"
}

// change = e => {
//     this.setState({
//         [e.target.name]: e.target.value
//     })
// }

// onSubmit = (e) => {
//     e.preventDefault();
//     e.logcheck();
//     e.logout();
// }

logout() {
    localStorage.removeItem('jwtToken');
    window.location.reload();
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

changeCharTitle() {
    this.setState()
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
                        <h1> How many times a week do you eat meat?</h1>
                        <Chart 
                        width={100}
                        height={50}
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