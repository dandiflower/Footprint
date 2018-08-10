import React from "react";
import { Input, FormBtn } from "./";
// import Radio from "../Radiobutton";
import RadioGroup from '../Radiobutton/RadioGroup'
import CustomizedSlider from "../Slidebar";
import axios from 'axios';
import HELPERS from "../../utils/helpers";
import Navbar from "../Navbar/Navbar";
import "./Form.css";


class QuestionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: "",
            zipCode: "",
            q1: 0,
            q2: 0,
            q3: 0,
            q4: 0,
            q5: 0,
            q6: 0,
            q7: 0,
            q8: 0,
            q9: 0,
            q10: 0,
            q11: 0,
            q12: 0,
            q13: 0,
            q14: 0,
            q15: 0,
            q16: 0,
            userId: ""
        };

        this.handleSliderChange = this.handleSliderChange.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(sthis);
    }

    // handleOnChange = value => {
    //     this.setState({
    //         q1: this.value,
    //         q2: value
    //     })
    //     console.log ("values of slider", q1)
    // }
    // state = {
    //     userId: "",
    //     q1: "",
    //     q2: "",
    //     q3: "",
    //     q4: "",
    //     q5: "",
    //     q6: "",
    //     q7: "",
    //     q8: "",
    //     q9: "",
    //     q10: "",
    //     q11: "",
    //     q12: "",
    //     q13: "",
    //     q14: "",
    //     q15: "",
    //     q16: ""
    // };

    // for radio button values
    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    // for slider values
    // handleOnChange = (value) => {
    //     this.setState({
    //         sliderValue: this.value,
    //         q2: this.value
    //     })
        // console.log("sliderValue", this.state.sliderValue)
    //   }
    // getSlideVal(id, val) {
    //     this.setState({ [id]: val })
    //     console.log("getSlideVal", this.state[id])
    // }

    // getSlideVal() {
    //     this.state.getSlideVal = this.getSlideVal.bind(this);
    //     console.log("getSlideVal", this.state)
    // }
    // this.handleChanger = this.handleChanger.bind(this);
    // this.handleChangerOne = this.handleChanger.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);

    // sliderInputHandler(value) {
    //     console.log("after change", value)
    //     this.setState({
    //         q1: value
    //     })
    // }

    handleSliderChange(event) {
        
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    change = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit(event) {
        console.log("handleSubmit", this.state.q1);
        event.preventDefault();
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
            q13: this.state.q13,
            q14: this.state.q14,
            q15: this.state.q15,
            q16: this.state.q16,
            userId: HELPERS.getCookies()

        }

        // this.props.onSubmit(this.state);
        HELPERS.addingAnswers(answers)

            .then(response => {

                if (response.data === true) {
                    this.setState({ UserData: answers });

                    window.location.pathname = "/results"
                    // this.props.history.push(`/person/results/${userId}` )
                }
            })

        console.log(answers)
    }


    // is the user authorized????
    componentDidMount() {
        this.getUserID()
        // this.getSlideVal()
        // let { sliderValue } = this.state
        // setTimeout(() => {
        //     console.log(this.state.userId);
        // }, 100);
        axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken');
        axios.get('/api/person')
            .then(res => {
                this.setState({ persons: res.data });
                // console.log("this.state.persons", this.state.persons);
                this.props.history.push()
            })
            .catch((error) => {
                if (error.response.status === 401) {
                    this.props.history.push("/login");
                }
            });
    }



    getUserID = () => {
        let cookies = document.cookie;
        cookies = cookies.split(",");
        let user = cookies[0].split("=");
        if (user.length >= 1) {

            console.log("QuestionForm.getUserID: cookie found");
            // TODO: There's a bug here! We have to fix it before we 
            // push to heroku. user[1] is undefined --- which means
            // we cannot call the .slice function from a variable
            // who's value is undefined! You should check it first.

            user = user[1].slice(3).split("%")[0];
            this.setState({
                userId: user
            })
        }
        else {
            console.log("QuestionForm.getUserID: no cookie found");
        }
    }

    logout() {
        // TODO: Delete cookie the right way!
        //delete document.cookie[this.state.user];
        localStorage.removeItem('jwtToken');
        window.location.reload();
    }

    radioValues(radioValues) {
        console.log("radioValues", radioValues)
        this.setState({

        })
    }

   

    render() {
        return (

            <div>
                <Navbar />

                <div className="container">
                    <div className="row">
                        <div className="col-md-12">

                           

                            <form onSubmit={this.handleSubmit}>
                            <p>
                                {localStorage.getItem('jwtToken') &&
                                    <button
                                        className="btn btn-primary"
                                        onClick={this.logout}>
                                        Logout
                                    </button>
                                }
                            </p>

                            <br/><br/><br/><br/>

                            <h3>Basic Information</h3>

                                <p>First name: </p>
                                <Input
                                    id="firstName"
                                    name="firstName"
                                    placeholder="first name"
                                    value={this.state.firstName}
                                    onChange={e => this.change(e)} />
                               

                                <p> Zip code:</p>
                                <Input
                                    id="zipCode"
                                    name="zipCode"
                                    placeholder="zip code"
                                    value={this.state.zipCode}
                                    onChange={e => this.change(e)} />
                                <br />

                                <hr /><br/>

                                <h3>Food</h3>
                                <p>How many times a week do you eat meat?</p>


                                <input
                                    id="q1"
                                    name="q1"
                                    type= "range"
                                    value={this.state.q1}
                                    min="0"
                                    max="7"
                                    step="1"
                                    onChange={this.handleSliderChange}
                                />

                                <br/>

                                <span>Never</span><span className="sliderLabels">Everyday</span>

                                <br /> <br /> <br />

                                <p> How much of the food that you eat is unprocessed, unpackaged or locally grown?</p>


                                <input
                                    id="q2"
                                    name="q2"
                                    type="range"
                                    value={this.state.q2}
                                    min="0"
                                    max="100"
                                    step="1"
                                    onChange={this.handleSliderChange}
                                />

                                <br/>

                                <span>None</span> <span className="sliderLabels">All</span>

                                <br/><br/><br/><br/><br/><hr />

                                <br/>
                                <h3>Housing</h3>
                                <p> Which housing type best describes your home?</p>

                                <RadioGroup
                                    name="q3"
                                    onChange={this.handleChange}
                                    options={[
                                        ['Freestanding, no running water', 'Freestanding, no running water'],
                                        ['Freestanding, running water', 'Freestanding, running water'],
                                        ['Multi-story apartment', 'Multi-story apartment'],
                                        ['Duplex unit', 'Duplex unit'],
                                        ['Luxury condominium', 'Luxury condominium']

                                    ]} value={this.state.q3}
                                />

                                <br /><br /> <br />

                                <p>What material is your house constructed with?</p>
                                <RadioGroup
                                    name="q4"
                                    onChange={this.handleChange}
                                    options={[
                                        ['Straw/bamboo', 'Straw/bamboo'],
                                        ['Wood', 'Wood'],
                                        ['Adobe', 'Adobe'],
                                        ['Brick/concrete', 'Brick/concrete'],
                                        ['Steel/other', 'Steel/other']

                                    ]} value={this.state.q4}
                                />

                                <br /><br /> <br />

                                <p>How many people live in your household?</p>

                                <input
                                    id="q5"
                                    name="q5"
                                    type="range"
                                    value={this.state.q5}
                                    min="0"
                                    max="10"
                                    step="1"
                                    onChange={this.handleSliderChange}
                                />
                                
                                <br/>

                                <span>Just me</span><span className="sliderLabels">10+</span>

                                <br /><br /> <br />

                                <p>What is the size of your home (square feet)?</p>


                                <input
                                    id="q6"
                                    name="q6"
                                    type="range"
                                    value={this.state.q6}
                                    min="0"
                                    max="100000"
                                    step="1"
                                    onChange={this.handleSliderChange}
                                />

                                <br/>

                                <span>Tiny</span><span className="sliderLabels">A mansion</span>

                                <br/><br/><br/><br/><br/><hr />

                                <br/>
                                <h3>Energy</h3>
                                <p>Do you have electricity in your home?</p>

                                <RadioGroup
                                    name="q7"
                                    onChange={this.handleChange}
                                    options={[
                                        ['Yes', 'Yes'],
                                        ['No', 'No'],
                                    ]} value={this.state.q7}
                                />

                                <br /><br /> <br />

                                <p>How energy efficient is your home?</p>

                                <br />

                                <input
                                    id="q8"
                                    name="q8"
                                    type="range"
                                    value={this.state.q8}
                                    min="0"
                                    max="100"
                                    step="1"
                                    onChange={this.handleSliderChange}
                                />

                                <br/>

                                <span>Not efficient at all</span><span className="sliderLabels">Very efficient</span>

                                <br /><br /> <br />

                                <p>What percentage of your home’s electricity comes from renewable sources (either directly or through purchased green power)?</p>


                                <input
                                    id="q9"
                                    name="q9"
                                    type="range"
                                    value={this.state.q9}
                                    min="0"
                                    max="10"
                                    step="1"
                                    onChange={this.handleSliderChange}
                                />

                                <br/>

                                <span>Low</span><span className="sliderLabels">High</span>

                                <br /><br /> <br />

                                <p>Compared to your neighbors, how much trash do you generate?</p>


                                <input
                                    id="q10"
                                    name="q10"
                                    type="range"
                                    value={this.state.q10}
                                    min={0}
                                    max={100}
                                    step="1"
                                    onChange={this.handleSliderChange}
                               
                                />

                                <br/>

                                <span>Significantly less</span><span className="sliderLabels">A lot more</span>

                                <br/><br/><br/><br/><br/><hr />

                                <br/>
                                <h3>Transportation</h3>
                                <p>How far do you travel by car or motorcycle each week? </p>

                                
                                <h4>Car</h4>

                                <input
                                    id="q11"
                                    name="q11"
                                    type="range"
                                    value={this.state.q11}
                                    min={0}
                                    max={100}
                                    step="1"
                                    onChange={this.handleSliderChange}
                                />

                                <br/>

                                <span>Not far at all (less than 5 miles)</span><span className="sliderLabels">Far far away (more than 100 miles)</span>

                                <h4>Motorcycle</h4>

                                <input
                                    id="q12"
                                    name="q12"
                                    type="range"
                                    value={this.state.q12}
                                    min={0}
                                    max={100}
                                    step="1"
                                    onChange={this.handleSliderChange}
                                />

                                <br/>

                                <span>Not far at all (less than 5 miles)</span><span className="sliderLabels">Far far away (more than 100 miles)</span>

                                <br /><br /> <br />

                                <p>What is the average fuel economy of the vehicle you use most often? </p>

                                <input
                                    id="q13"
                                    name="q13"
                                    type="range"
                                    value={this.state.q13}
                                    min={0}
                                    max={100}
                                    step="1"
                                    onChange={this.handleSliderChange}
                                />

                                <br/>

                                <span>Inefficient</span><span className="sliderLabels">Efficient or Electric</span>

                                <br /><br /> <br />

                                <p>When you travel by car, how often do you carpool every week?</p>


                                <input
                                    id="q14"
                                    name="q14"
                                    type="range"
                                    value={this.state.q14}
                                    min={0}
                                    max={7}
                                    step="1"
                                    onChange={this.handleSliderChange}
                                />

                                <br/>

                                <span>Never</span><span className="sliderLabels">Everyday</span>

                                <br /><br /> <br />

                                <p>How far do you travel on public transportation each week?</p>

                                <input
                                    id="q15"
                                    name="q15"
                                    type="range"
                                    value={this.state.q15}
                                    min={0}
                                    max={100}
                                    step="1"
                                    onChange={this.handleSliderChange}
                                />

                                <br/>

                                <span>Not far (less than 5 miles)</span><span className="sliderLabels">Very Far (over 100 miles)</span>

                                <br /><br /> <br />

                                <p>How many hours do you fly each year?</p>

                                <input
                                    id="q16"
                                    name="q16"
                                    type="range"
                                    value={this.state.q16}
                                    min={0}
                                    max={100}
                                    step="1"
                                    onChange={this.handleSliderChange}
                                />

                                <br/>

                                <span>None</span><span className="sliderLabels">Many</span>

                                <br /> <br /><br /> <br />

                                <FormBtn onClick={this.onSubmit}>
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

export default QuestionForm;