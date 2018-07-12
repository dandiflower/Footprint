import React, { Component } from "react";
import { Input, FormBtn } from "./";
// import Radio from "../Radiobutton";
import RadioGroup from '../Radiobutton/RadioGroup'
import CustomizedSlider from "../Slidebar";
import axios from 'axios';
import HELPERS from "../../utils/helpers";
import Navbar from "../Navbar/Navbar";
import "./Form.css";


class Form extends Component {
    constructor() {
        super();
        this.state = {
                user: {
                    firstName: "",
                    zipCode: ""
                }
            }
        this.getSlideVal = this.getSlideVal.bind(this);
        // this.handleChanger = this.handleChanger.bind(this);
        // this.handleChangerOne = this.handleChanger.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
    }

    

    change = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();

        let answers = {
            firstName: document.getElementById("firstName").value,
            zipCode: document.getElementById("zipCode").value,
            q1: this.state.q1,
            q2: this.state.q2,
            q3: this.state.q3,
            q4: this.state.q4,
            q5: this.state.q5,
            q6: this.state.q6,
            q7: this.state.q7,
            q8: this.state.q8,
            q9: this.state.q9,
            q10: this.state.q10,
            q11: this.state.q11,
            q12: this.state.q12,
            q13:this.state.q13,
            q14: this.state.q14,
            q15: this.state.q15,
            q16: this.state.q16,
            userId: HELPERS.getCookies()

        }

        // this.props.onSubmit(this.state);
        HELPERS.addingAnswers(answers)
     
            .then(response => {
                console.log("response", response)
                if (response.data === true) {
                    this.setState({ persons: response.data });
                    console.log("this.state.persons", this.state.persons);
                    // window.location.pathname = "/results"
                    this.props.history.push("/results")
                }
            })
    }





    // is the user authorized????
    // componentDidMount() {

    //     axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken');
    //     axios.get('/api/person')
    //         .then(res => {
    //             this.setState({ persons: res.data });
    //             console.log("this.state.persons", this.state.persons);

    //         })
    //         .catch((error) => {
    //             if (error.response.status === 401) {
    //                 this.props.history.push("/login");
    //             }
    //         });
    // }

    logout() {
        localStorage.removeItem('jwtToken');
        window.location.reload();
    }

    sliderInputHandler(value) {
        console.log("after change", value)
        this.setState({
            q1: value
        })
    }

    radioValues(radioValues) {
        console.log("radioValues", radioValues)
        this.setState({
           
        })
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    getSlideVal(id, val) {
        this.setState({ [id]: val })
        // console.log("getSlideVal", this.state[id])
    }

    render() {
        return (

            <div>
                <Navbar />
        <div className="container">
            <div className="row">
                <div className="col-md-12">
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

                        <hr />

                        <h3>Food</h3>
                        <p>How many times a week do you eat meat?</p>

                        <span>Never</span>
                        <CustomizedSlider
                            id="q1"
                            value={this.state.sliderValue}
                            min={0}
                            max={7} 
                            onChange={this.getSlideVal}
                            // sliderValue={this.sliderInputHandler.bind(this)}
                            // sliderValue={this.sliderValues.bind(this)} 
                        />
                        <span>Everyday</span>

                        <p> How much of the food that you eat is unprocessed, unpackaged or locally grown?</p>

                        <span>None</span>
                        <CustomizedSlider
                            id="q2"
                            value={this.state.sliderValue1}
                            min={0}
                            max={100}
                            onChange={this.getSlideVal}
                            />
                        <span>All</span>

                        <hr />

                        <h3>Housing</h3>
                        <p> Which housing type best describes your home?</p>

                        <RadioGroup
                            name="q3"
                            onChange={this.handleChange}
                            options={[
                                ['Freestanding, no running water','Freestanding, no running water'],
                                ['Freestanding, running water','Freestanding, running water'],
                                ['Multi-story apartment','Multi-story apartment'],
                                ['Duplex unit','Duplex unit'],
                                ['Luxury condominium','Luxury condominium']

                            ]} value={this.state.q3}
                            />

                        <p>What material is your house constructed with?</p>
                        <RadioGroup
                            name="q4"
                            onChange={this.handleChange}
                            options={[
                                ['Straw/bamboo','Straw/bamboo'],
                                ['Wood','Wood'],
                                ['Adobe','Adobe'],
                                ['Brick/concrete','Brick/concrete'],
                                ['Steel/other','Steel/other']

                            ]} value={this.state.q4}
                            />

                        <p>How many people live in your household?</p>

                        <span>Just me</span>
                        <CustomizedSlider
                            id="q5"
                            value={this.state.sliderValue}
                            min={0}
                            max={10}
                            onChange={this.getSlideVal}
                        // sliderValue={this.state.sliderValues.bind(this)} 
                        />
                        <span>10+</span>

                        <p>What is the size of your home (square feet)?</p>

                        <span>Tiny</span>
                        <CustomizedSlider
                            id="q6"
                            value={this.state.sliderValue}
                            min={0}
                            max={100}
                            onChange={this.getSlideVal}
                        // sliderValues={this.sliderValues.bind(this)} 
                        />
                        <span>A mansion</span>

                        <hr />

                        <h3>Energy</h3>
                        <p>Do you have electricity in your home?</p>

                         <RadioGroup
                            name="q7"
                            onChange={this.handleChange}
                            options={[
                                ['Yes','Yes'],
                                ['No','No'],

                            ]} value={this.state.q7}
                            />

                        <p>How energy efficient is your home?</p>

                        <span>Not efficient at all</span>
                        <CustomizedSlider
                            id="q8"
                            value={this.state.sliderValue}
                            rangeslider__handle-tooltip={false}
                            labels={
                                {
                                0: "no efficiency",
                                50: "mid efficiency",
                                100: "Very efficient"
                                }
                            }
                            onChange={this.getSlideVal}
                        // sliderValues={this.sliderValues.bind(this)} 
                        />
                        <span>Very efficient</span>

                        <p>What percentage of your home’s electricity comes from renewable sources (either directly or through purchased green power)?</p>

                        <span>Low</span>
                        <CustomizedSlider
                            id="q9"
                            value={this.state.sliderValue}
                            min={0}
                            max={100}
                            onChange={this.getSlideVal}
                        // sliderValues={this.sliderValues.bind(this)} 
                        />
                        <span>High</span>

                        <p>Compared to your neighbors, how much trash do you generate?</p>

                        <span>Significantly less</span>
                        <CustomizedSlider
                            id="q10"
                            value={this.state.sliderValue}
                            min={0}
                            max={100}
                            onChange={this.getSlideVal}
                        // sliderValues={this.sliderValues.bind(this)} 
                        />
                        <span>A lot more</span>

                        <hr />

                        <h3>Transportation</h3>
                        <p>How far do you travel by car or motorcycle each week? </p>

                        <h4>Car</h4>
                        <span>Zero</span>
                        <CustomizedSlider
                            id="q11"
                            value={this.state.sliderValue}
                            min={0}
                            max={100}
                            onChange={this.getSlideVal}
                        // sliderValues={this.sliderValues.bind(this)} 
                        />
                        <span>Very far</span>

                        <h4>Motorcycle</h4>
                        <span>Zero</span>
                        <CustomizedSlider
                            id="q12"
                            value={this.state.sliderValue}
                            min={0}
                            max={100}
                            onChange={this.getSlideVal}
                        // sliderValues={this.sliderValues.bind(this)} 
                        />
                        <span>Very far</span>

                        <p>What is the average fuel economy the vehicles you use most often? </p>

                        <span>Inefficient</span>
                        <CustomizedSlider
                            id="q13"
                            value={this.state.sliderValue}
                            min={0}
                            max={100}
                            onChange={this.getSlideVal}
                        // sliderValues={this.sliderValues.bind(this)} 
                        />
                        <span>Efficient or Electric</span>

                        <p>When you travel by car, how often do you carpool?</p>

                        <span>Never</span>
                        <CustomizedSlider
                            id="q14"
                            value={this.state.sliderValue}
                            min={0}
                            max={100}
                            onChange={this.getSlideVal}
                        // sliderValues={this.sliderValues.bind(this)}
                        />
                        <span>Always</span>

                        <p>How far do you travel on public transportation each week?</p>

                        <span>Not far</span>
                        <CustomizedSlider
                            id="q15"
                            value={this.state.sliderValue}
                            min={0}
                            max={100}
                            onChange={this.getSlideVal}
                        // sliderValues={this.sliderValues.bind(this)} 
                        />
                        <span>Very Far</span>

                        <p>How many hours do you fly each year?</p>

                        <span>None</span>
                        <CustomizedSlider
                            id="q16"
                            value={this.state.sliderValue}
                            min={0}
                            max={100}
                            onChange={this.getSlideVal}
                        // sliderValues={this.sliderValues.bind(this)} 
                        />
                        <span>Many</span>

                        <br /> <br />

                        <FormBtn onClick={this.onSubmit}>
                            Submit
                        </FormBtn>
                    </form>
                   
                </div>
            </div>
        </div>
        </div >
        )
    }
}

export default Form;