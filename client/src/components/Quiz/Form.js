import React, { Component } from "react";
import { Input, FormBtn } from "./";

class Form extends Component {
    state = {
        firstName: "",
        lastName: "",
        zipCode: "",
        email: "",
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
        this.props.onSubmit(this.state);
        console.log(this.state);
        this.setState({
            firstName: "",
            lastName: "",
            zipCode: "",
            email: "",
            numPplInHome: "",
            numVehicle: "",
            heatSource: {
                naturalGas: false,
                electricity: false,
                fuelOil: false,
                propane: false
            }
        })
    }
    
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <form>
                            <p>First name: </p>
                            <Input name="firstName" placeholder="first name"
                                value={this.state.firstName} onChange={e => this.change(e)} />
                            <br />

                            <p>Last name: </p>
                            <Input name="lastName" placeholder="last name" value={this.state.lastName} onChange={e => this.change(e)} />
                            <br />

                            <p> Zip code:</p>
                            <Input name="zipCode" placeholder="zip code" value={this.state.zipCode} onChange={e => this.change(e)} />
                            <br />

                            <p> Number of people in your household?</p>
                            <Input name="numPplInHome" placeholder="number of people in your home" value={this.state.numPplInHome} onChange={e => this.change(e)} />
                            <br />

                            <p>Email: </p>
                            <Input name="email" placeholder="email" value={this.state.email} onChange={e => this.change(e)} />
                            <br />

                            <p>Number of Vehicles in your household? </p>
                            <Input name="numVehicle" placeholder="number of vehicles" value={this.state.numVehicle} onChange={e => this.change(e)} />
                            <br />

                            <p> Check energy sources your have in your home.</p>
                            <Input name="naturalGas" type="checkbox" placeholder="naturalGas" value={this.state.heatSource} onChange={e => this.change(e)} /><span>Natural Gas</span>
                            <br />
                            <Input name="electricity" type="checkbox" placeholder="electricity" value={this.state.electricity} onChange={e => this.change(e)} /><span>Electricity</span>
                            <br />
                            <Input name="fuelOil" type="checkbox" placeholder="fuelOil" value={this.state.fuelOil} onChange={e => this.change(e)} /><span>Fuel Oil</span>
                            <br />
                            <Input name="propane" type="checkbox" placeholder="propane" value={this.state.propane} onChange={e => this.change(e)} /><span>Propane</span>
                            <br /> <br />


                            <FormBtn onClick={(e) => this.onSubmit(e)}> Submit</FormBtn>
                            <br /> <br />

                        </form>

                    </div>
                </div>
            </div>
        )
    }
}

export default Form;