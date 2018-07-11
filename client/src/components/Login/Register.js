import React, { Component } from 'react';
import axios from 'axios';
import './Login.css';
import { Link } from 'react-router-dom';
import Movie from '../Video/Movie';
import Navbar from '../Navbar/Navbar';

class Create extends Component {

  constructor() {
    super();
    this.state = {
      username: '',
      password: ''
    };
  }
  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { username, password } = this.state;

    axios.post('/api/auth/register', { username, password })
      .then((result) => {
        this.props.history.push("/login")
      });
  }

  render() {
    const { username, password } = this.state;
    return (

      <div> 
        <Navbar />
        <Movie />
        <div className="login--center">

          <form className="form-signin" id="reg_center" onSubmit={this.onSubmit}>
          <h2 className="form-signin-heading">Register</h2>
          <label htmlFor="inputEmail" className="sr-only">Email address</label>
          <input type="email" className="form-control" placeholder="Email address" name="username" value={username} onChange={this.onChange} required/>
          <label htmlFor="inputPassword" className="sr-only">Password</label>
          <input type="password" className="form-control" placeholder="Password" name="password" value={password} onChange={this.onChange} required/>
          <button className="btn btn-lg btn-primary btn-block" type="submit">Register</button>
            <p>
              Already a member? <Link to="/login"><span className="glyphicon glyphicon-plus-sign" aria-hidden="true"></span> Login here</Link>
            </p>
        </form>
      </div>

      </div>
    );
  }
}

export default Create;
