import React, { Component } from "react";
import { Input, FormBtn } from "./";
import CustomizedSlider from "../Slidebar"
import axios from 'axios';
import HELPERS from "../../utils/helpers";
import Navbar from "../Navbar/Navbar";
import "./Form.css";



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
                    user:{
                        firstName: "",
                        zipCode: ""
                    },
                    questions:{
                        q1: 0
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

    sliderValues(sliderInput){
        console.log("sliderInput",sliderInput)
        this.setState({
            q1:sliderInput
        })
    }

    sendVal() {
        const data = {
            name: this.state.user.name
        }
    }

    render() {
        return (

            <div>
                <Navbar />
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                    ghjgjhghjgj
                        <form>
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
                            <p>How many times a week do you eat meat?</p>

                            <span>Never</span>
                                <CustomizedSlider  
                                    sliderValues={this.sliderValues.bind(this)}/>
                            <span>Everyday</span>

                            <p> How much of the food that you eat is unprocessed, unpackaged or locally grown?</p>

                            <span>Never</span>
                            <CustomizedSlider  
                                sliderValues={this.sliderValues.bind(this)}/>
                            <span>Everyday</span>

                            <h3>Housing</h3>
                             <p> Which housing type best describes your home?</p>

                            {/* <RadioButton /> */}

                             <p>What material is your house constructed with?</p>

                            {/* <RadioButton /> */}
                            

                            <FormBtn 
                            onClick={this.onSubmit}> 
                            Submit
                            </FormBtn>
                            <br /> <br />

                        </form>

                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default Form;