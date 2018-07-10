import React, { Component } from "react";
import { Input, FormBtn } from "./";
import Radio from "../Radiobutton";
import CustomizedSlider from "../Slidebar";
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
                        q15: 0
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
            q1: sliderInput
        })
    }

    radioValues(radioValues){
        console.log("radioValues", radioValues)
        this.setState({
            
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

                            <span>None</span>
                            <CustomizedSlider  
                                sliderValues={this.sliderValues.bind(this)}/>
                            <span>All</span>

                            <h3>Housing</h3>
                            <p> Which housing type best describes your home?</p>

                            <ul>
                                <Radio id="q" value="Freestanding, no running water"/>
                                <Radio value="Freestanding, running water"/>
                                <Radio value="Multi-story apartment"/>
                                <Radio value="Duplex unit"/>
                                <Radio value="Luxury condominium"/>
                            </ul>

                             <p>What material is your house constructed with?</p>

                            <ul>
                                <Radio value="Straw/bamboo"/>
                                <Radio value="Wood"/>
                                <Radio value="Adobe"/>
                                <Radio value="Brick/concrete"/>
                                <Radio value="Steel/other"/>
                                
                            </ul>

                             <p>How many people live in your household?</p>

                            <span>Just me</span>
                                <CustomizedSlider  
                                    sliderValues={this.sliderValues.bind(this)}/>
                            <span>10+</span>

                            <p>What is the size of your home?</p>

                            <span>Tiny</span>
                                <CustomizedSlider  
                                    sliderValues={this.sliderValues.bind(this)}/>
                            <span>A mansion</span>

                            <h3>Energy</h3>
                            <p>Do you have electricity in your home?</p>

                            {/* <Toggle /> */}
                            
                            <p>How energy efficient is your home?</p>

                            <span>Not efficient at all</span>
                                <CustomizedSlider  
                                    sliderValues={this.sliderValues.bind(this)}/>
                            <span>Very efficient</span>

                             <p>What percentage of your home’s electricity comes from renewable sources (either directly or through purchased green power)?</p>

                            <span>Low</span>
                                <CustomizedSlider  
                                    sliderValues={this.sliderValues.bind(this)}/>
                            <span>High</span>

                            <p>Compared to your neighbors, how much trash do you generate?</p>

                            <span>Significantly less</span>
                                <CustomizedSlider  
                                    sliderValues={this.sliderValues.bind(this)}/>
                            <span>A lot more</span>

                            <h3>Transportation</h3>
                            <p>How far do you travel by car or motorcycle each week? </p>

                            <h4>Car</h4>
                            <span>Zero</span>
                            <CustomizedSlider  
                                    sliderValues={this.sliderValues.bind(this)} />
                            <span>Very far</span>

                            <h4>Motorcycle</h4>
                            <span>Zero</span>
                                <CustomizedSlider  
                                    sliderValues={this.sliderValues.bind(this)}/>
                            <span>Very far</span>

                            <p>What is the average fuel economy the vehicles you use most often? </p>

                            <span>Inefficient</span>
                                <CustomizedSlider  
                                    sliderValues={this.sliderValues.bind(this)}/>
                            <span>Efficient or Electric</span>

                            <p>When you travel by car, how often do you carpool?</p>

                            <span>Never</span>
                                <CustomizedSlider  
                                    sliderValues={this.sliderValues.bind(this)}/>
                            <span>Always</span>

                            <p>How far do you travel on public transportation each week?</p>

                            <span>Not far</span>
                                <CustomizedSlider  
                                    sliderValues={this.sliderValues.bind(this)}/>
                            <span>Very Far</span>

                            <p>How many hours do you fly each year?</p>

                            <span>None</span>
                                <CustomizedSlider  
                                    sliderValues={this.sliderValues.bind(this)}/>
                            <span>Many</span>

                        <br /> <br />

                            <FormBtn 
                            onClick={this.onSubmit}> 
                            Submit
                            </FormBtn>
                            

                        </form>

                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default Form;