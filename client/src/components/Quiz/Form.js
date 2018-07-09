import React, { Component } from "react";
import { Input, FormBtn } from "./";
// import Slidebar from "../Slidebar"
import axios from 'axios';
import HELPERS from "../../utils/helpers.js";



class Form extends Component {
    state = {
        firstName: "",
        zipCode: "",
        numPplInHome: "",
        numVehicle: "",
        heatSource: {
            naturalGas: false,
            electricity: false,
            fuelOil: false,
            propane: false
        }
    }

    change = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    
    onSubmit = (e) => {
        e.preventDefault();

        const answers = {
            firstName: document.getElementById("firstName").value,
            zipCode: document.getElementById("zipCode").value,
            numPplInHome: document.getElementById("numPplInHome").value,
            numVehicle: document.getElementById("numVehicle").value,
            heatSource: {
                naturalGas: false,
                electricity: false,
                fuelOil: false,
                propane: false
            },
            userId: HELPERS.getCookies()
            
        }
        console.log(answers)
        // this.props.onSubmit(this.state);
        HELPERS.addingAnswers(answers)
        .then(response=>{
            console.log("response", response)
            if(response.data === true){
                 this.setState({
                    firstName: "",
                    zipCode: "",
                    numPplInHome: "",
                    numVehicle: "",
                    heatSource: {
                        naturalGas: false,
                        electricity: false,
                        fuelOil: false,
                        propane: false
                    }
             })
             window.location.pathname = "/result"
        }
    })
}
    
    // is the user authorized????

    componentDidMount() {
        axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken');
        axios.get('/api/person')
            .then(res => {
                this.setState({ persons: res.data });
                console.log(this.state.persons);

            })
            .catch((error) => {
                if (error.response.status === 401) {
                    this.props.history.push("/login");
                }
            });
        }

    logout() {
        localStorage.removeItem('jwtToken');
        window.location.reload();
    }

    // slidebarValue = event => {
    //     let selectedValue = event.target.value;
    //     console.log("selected value: ", selectedValue);

    // }



    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                    
                        {/* <form>
                            <p>
                                {localStorage.getItem('jwtToken') &&
                                    <button 
                                        className="btn btn-primary" 
                                        onClick={this.logout}>
                                        Logout
                                    </button>
                                }
                            </p>


                            <p>First name: </p>
                            <Input 
                                id="firstName"
                                name="firstName" 
                                placeholder="first name"
                                value={this.state.firstName}
                                onChange={e => this.change(e)} />
                            <br />

                            <p> Zip code:</p>
                            <Input 
                            id="zipCode"
                                name="zipCode" 
                                placeholder="zip code" 
                                value={this.state.zipCode} 
                                onChange={e => this.change(e)} />
                            <br />


                            <h3>Food</h3>
                            <p> How many times a week do you eat meat?</p>
                            <Slidebar slidebarValue={(event)=>this.slidebarValue.event} />
                            
                            <Input 
                            id="numPplInHome"
                            name="numPplInHome" 
                            placeholder="number of people in your home" 
                            value={this.state.numPplInHome} 
                            onChange={e => this.change(e)} />
                            <br />

                            <p>How much of the food that you eat is unprocessed, unpackaged or locally grown? </p>
                            <Input 
                            id="numVehicle"
                            name="numVehicle" 
                            placeholder="number of vehicles" 
                            value={this.state.numVehicle} 
                            onChange={e => this.change(e)} />
                            <br />

                            <h3>Housing</h3>
                            <p>Which housing type best describes your home?</p>
                            <Input 
                            name="naturalGas" 
                            type="checkbox" 
                            placeholder="naturalGas" 
                            value={this.state.heatSource} 
                            onChange={e => this.change(e)} /><span>Natural Gas</span>
                            <br />
                            <Input 
                            name="electricity" 
                            type="checkbox" 
                            placeholder="electricity" 
                            value={this.state.electricity} 
                            onChange={e => this.change(e)}  /><span>Electricity</span>
                            <br />
                            <Input 
                            name="fuelOil" 
                            type="checkbox" 
                            placeholder="fuelOil" 
                            value={this.state.fuelOil} 
                            onChange={e => this.change(e)} /><span>Fuel Oil</span>
                            <br />
                            <Input name="propane" type="checkbox" placeholder="propane" value={this.state.propane} onChange={e => this.change(e)} /><span>Propane</span>
                            <br /> <br />


                            <FormBtn 
                            onClick={this.onSubmit}> 
                            Submit
                            </FormBtn>
                            <br /> <br />

                        </form> */}

                    </div>
                </div>
            </div>
        )
    }
}

export default Form;