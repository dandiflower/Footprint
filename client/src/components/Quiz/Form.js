import React, { Component } from "react";
import { Input, FormBtn } from "./";
import Radio from "../Radiobutton";
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
            },
            questions: {
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
        }


        this.handleChange = this.handleChange.bind(this);
        this.handleChange1 = this.handleChange.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
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
            q1: document.getElementById("q1").value,
            q2: document.getElementById("q2").value,
            q3: document.getElementById("q3ul").value,
            q4: document.getElementById("q4ul").value,
            q5: document.getElementById("q5").value,
            q6: document.getElementById("q6").value,
            q7: "add toggle here",
            q8: document.getElementById("q8").value,
            q9: document.getElementById("q9").value,
            q10: document.getElementById("q10").value,
            q11: document.getElementById("q11").value,
            q12: document.getElementById("q12").value,
            q13: document.getElementById("q13").value,
            q14: document.getElementById("q14").value,
            q15: document.getElementById("q15").value,
            q16: document.getElementById("q16").value,

            userId: HELPERS.getCookies()

        }
        console.log("const answers", answers)
        // this.props.onSubmit(this.state);
        HELPERS.addingAnswers(answers)
            .then(response => {
                console.log("response", response)
                if (response.data === true) {
                    this.setState({
                        user: {
                            firstName: "",
                            zipCode: ""
                        },
                        questions: {
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
                            q16: 0
                        }
                    })
                    // window.location.pathname = "/results"

                }
            })
    }
    // is the user authorized????
    componentDidMount() {
        axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken');
        axios.get('/api/person')
            .then(res => {
                this.setState({ persons: res.data });
                console.log("this.state.persons", this.state.persons);

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

    // sliderValues(sliderInput) {
    //     console.log("sliderInput", sliderInput)
    //     this.setState({
    //         q1: sliderInput
    //     })
    // }

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

    handleChange(event) {
        this.setState({
            q3: event.target.value
        });
        setTimeout(() => { console.log("handleChangeq3", this.state.q3) }, 100)
    }

    handleChange1(event) {
        this.setState({
            q4: event.target.value
        });
        setTimeout(() => { console.log("handleChangeq4", this.state.q4) }, 100)
    }


    sendVal() {
        const data = {
            user: {
                firstName: this.state.user.firstName,
                zipCode: this.state.user.zipCode
            },
            questions: {
                q1: this.state.questions.q1,
                q2: this.state.questions.q2,
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
                q16: 0
            }
        }
        console.log("send val", data)
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
                                    sliderValue={this.sliderInputHandler.bind(this)}
                                    // sliderValue={this.sliderValues.bind(this)} 
                                    />
                                <span>Everyday</span>

                                <p> How much of the food that you eat is unprocessed, unpackaged or locally grown?</p>

                                <span>None</span>
                                <CustomizedSlider
                                    id="q2"
                                    value={this.state.sliderValue} />
                                <span>All</span>

                                <hr />

                                <h3>Housing</h3>
                                <p> Which housing type best describes your home?</p>

                                <ul id="q3ul">
                                    <Radio
                                        id="q3o1"
                                        name="q3name"
                                        value="Freestanding, no running water"
                                        // checked={this.state.q3 ==="Freestanding, no running water"}
                                        onClick={this.handleChange}
                                    />
                                    <Radio
                                        id="q3o2"
                                        name="q3name"
                                        type="radio"
                                        value="Freestanding, running water"
                                        onClick={this.handleChange}
                                    />
                                    <Radio
                                        id="q3o3"
                                        name="q3name"
                                        value="Multi-story apartment"
                                        onClick={this.handleChange}
                                    />
                                    <Radio
                                        id="q3o4"
                                        name="q3name"
                                        value="Duplex unit"
                                        onClick={this.handleChange}
                                    />
                                    <Radio
                                        id="q3o5"
                                        name="q3name"
                                        value="Luxury condominium"
                                        onClick={this.handleChange}
                                    />
                                </ul>

                                <p>What material is your house constructed with?</p>

                                <ul id="q4ul">

                                    <Radio
                                        id="q4o1"
                                        name="q4name"
                                        value="Straw/bamboo"
                                        onClick={this.handleChange1}
                                    />
                                    <Radio
                                        value="Wood"
                                        id="q4o2"
                                        name="q4name"
                                        onClick={this.handleChange1}
                                    />
                                    <Radio
                                        value="Adobe"
                                        id="q4o3"
                                        name="q4name"
                                        onClick={this.handleChange1}
                                    />
                                    <Radio
                                        value="Brick/concrete"
                                        id="q4o4"
                                        name="q4name"
                                        onClick={this.handleChange1}
                                    />
                                    <Radio
                                        value="Steel/other"
                                        id="q4o5"
                                        name="q4name"
                                        onClick={this.handleChange1}
                                    />

                                </ul>

                                <p>How many people live in your household?</p>

                                <span>Just me</span>
                                <CustomizedSlider
                                    id="q5"
                                    // sliderValue={this.state.sliderValues.bind(this)} 
                                    />
                                <span>10+</span>

                                <p>What is the size of your home?</p>

                                <span>Tiny</span>
                                <CustomizedSlider
                                    id="q6"
                                    // sliderValues={this.sliderValues.bind(this)} 
                                    />
                                <span>A mansion</span>

                                <hr />

                                <h3>Energy</h3>
                                <p>Do you have electricity in your home?</p>

                                {/* <Toggle /> */}

                                <p>How energy efficient is your home?</p>

                                <span>Not efficient at all</span>
                                <CustomizedSlider
                                    id="q8"
                                    // sliderValues={this.sliderValues.bind(this)} 
                                    />
                                <span>Very efficient</span>

                                <p>What percentage of your home’s electricity comes from renewable sources (either directly or through purchased green power)?</p>

                                <span>Low</span>
                                <CustomizedSlider
                                    id="q9"
                                    // sliderValues={this.sliderValues.bind(this)} 
                                    />
                                <span>High</span>

                                <p>Compared to your neighbors, how much trash do you generate?</p>

                                <span>Significantly less</span>
                                <CustomizedSlider
                                    id="q10"
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
                                    // sliderValues={this.sliderValues.bind(this)} 
                                    />
                                <span>Very far</span>

                                <h4>Motorcycle</h4>
                                <span>Zero</span>
                                <CustomizedSlider
                                    id="q12"
                                    // sliderValues={this.sliderValues.bind(this)} 
                                    />
                                <span>Very far</span>

                                <p>What is the average fuel economy the vehicles you use most often? </p>

                                <span>Inefficient</span>
                                <CustomizedSlider
                                    id="q13"
                                    // sliderValues={this.sliderValues.bind(this)} 
                                    />
                                <span>Efficient or Electric</span>

                                <p>When you travel by car, how often do you carpool?</p>

                                <span>Never</span>
                                <CustomizedSlider
                                    id="q14"
                                    // sliderValues={this.sliderValues.bind(this)}
                                     />
                                <span>Always</span>

                                <p>How far do you travel on public transportation each week?</p>

                                <span>Not far</span>
                                <CustomizedSlider
                                    id="q15"
                                    // sliderValues={this.sliderValues.bind(this)} 
                                    />
                                <span>Very Far</span>

                                <p>How many hours do you fly each year?</p>

                                <span>None</span>
                                <CustomizedSlider
                                    id="q16"
                                    // sliderValues={this.sliderValues.bind(this)} 
                                    />
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