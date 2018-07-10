import React, { Component } from "react";
import { Input, FormBtn } from "./";
import Radio from "../Radiobutton";
import CustomizedSlider from "../Slidebar";
import axios from 'axios';
import HELPERS from "../../utils/helpers.js";



class Form extends Component {
    constructor() {
    super();
    this.state = {
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
    }


    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
            q3: document.getElementById("q3ul"),
           
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
        console.log("after set state",this.state.q1);

    }

    radioValues(radioValues){
        console.log("radioValues", radioValues)
        this.setState({
            
        })
    }

    handleChange(event) {
        this.setState({
            q3: event.target.value
          });
    }

    handleSubmit(event) {
        event.preventDefault();
        
        alert(`You chose the ${this.state.size} pizza.`);
    }
    

    sendVal() {
        const data = {
            name: this.state.user.name
        }
    }

    render() {
        return (
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


                            <h3>Food</h3>
                            <p>How many times a week do you eat meat?</p>

                            <span>Never</span>
                                <CustomizedSlider  
                                    id="q1"
                                    sliderValues={this.sliderValues.bind(this)}/>
                            <span>Everyday</span>

                            <p> How much of the food that you eat is unprocessed, unpackaged or locally grown?</p>

                            <span>None</span>
                            <CustomizedSlider 
                                id="q2" 
                                sliderValues={this.sliderValues.bind(this)}/>
                            <span>All</span>

                            <h3>Housing</h3>
                            <p> Which housing type best describes your home?</p>

                            <ul id="q3ul">

                                <Radio 
                                    id="q3o1" 
                                    name="q3name" 
                                    value="Freestanding, no running water"
                                    // checked={this.state.q3 ==="Freestanding, no running water"}
                                    onChange ={this.handleChange}
                                    />
                                <Radio 
                                    id="q3o2" 
                                    name="q3name"
                                    value="Freestanding, running water"/>
                                <Radio 
                                    id="q3o3" 
                                    name="q3name"
                                    value="Multi-story apartment"/>
                                <Radio 
                                    id="q3o4" 
                                    name="q3name"
                                    value="Duplex unit"/>
                                <Radio 
                                    id="q3o5"   
                                    name="q3name" 
                                    value="Luxury condominium"/>
                            </ul>

                             <p>What material is your house constructed with?</p>

                            <ul>
                            <form onSubmit={this.handleSubmit}>
                            <li>
                                <label>
                                <input
                                    type="radio"
                                    value="small"
                                    checked={this.state.size === "small"}
                                    onChange={this.handleChange}
                                />
                                Small
                                </label>
                            </li>
                            </form>
                                <Radio 
                                    id="q4o1"
                                    name="q4name"
                                    value="Straw/bamboo"/>
                                <Radio 
                                    value="Wood"
                                    id="q4o2"
                                    name="q4name"/>
                                <Radio 
                                    value="Adobe"
                                    id="q4o3"
                                    name="q4name"/>
                                <Radio 
                                    value="Brick/concrete"
                                    id="q4o4"
                                    name="q4name"/>
                                <Radio 
                                    value="Steel/other"
                                    id="q4o5"
                                    name="q4name"/>
                                
                            </ul>

                             <p>How many people live in your household?</p>

                            <span>Just me</span>
                                <CustomizedSlider
                                    id="q5"  
                                    sliderValues={this.sliderValues.bind(this)}/>
                            <span>10+</span>

                            <p>What is the size of your home?</p>

                            <span>Tiny</span>
                                <CustomizedSlider  
                                id="q6" 
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
        )
    }
}

export default Form;