import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Login.css';
import Video from '../Video/Video';
import Navbar from '../Navbar/Navbar';
import About from '../About/About';

class Login extends Component {

  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      message: ''
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

    axios.post('/api/auth/login', { username, password })
      .then((result) => {
        localStorage.setItem('jwtToken', result.data.token);
        this.setState({ message: '' });
        this.props.history.push('/QuestionForm')
      })
      .catch((error) => {
        if(error.response.status === 401) {
          this.setState({ message: 'Login failed. Username or password not match' });
        }
      });
  }

  render() {
    const { username, password, message } = this.state;
    return (
      <div >
        <Navbar />
        <Video />


          <div className="login--center">
            <form className="form-signin " id="login_form" onSubmit={this.onSubmit}>
              {message !== '' &&
                <div className="alert alert-warning alert-dismissible" role="alert">
                  {message}
                </div>
              }
              <h2 className="form-signin-heading">Please sign in</h2>
              <label htmlFor="inputEmail" className="sr-only">Email address</label>
              <input type="email" className="form-control" placeholder="Email address" name="username" value={username} onChange={this.onChange} required />
              <label htmlFor="inputPassword" className="sr-only">Password</label>
              <input type="password" className="form-control" placeholder="Password" name="password" value={password} onChange={this.onChange} required />
              <button className="btn btn-lg btn-primary btn-block" type="submit">Login</button>
              <p>
                Not a member? <Link to="/register"><span className="glyphicon glyphicon-plus-sign" aria-hidden="true"></span> Register here</Link>
              </p>
            </form>
          </div>
        <br></br><br></br><br></br>

        <About />
          <div id="login_page_height"></div>
      </div>
    );
  }
}

export default Login;
