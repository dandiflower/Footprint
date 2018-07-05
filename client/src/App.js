import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Switch, } from "react-router-dom";
// import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Saved from "./pages/Saved";
import Quiz from "./pages/Quiz";
import Login from './components/Login/Login';
import Register from './components/Login/Register';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      books: []
    };
  }

  componentDidMount() {
    axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken');
    axios.get('/api/book')
      .then(res => {
        this.setState({ books: res.data });
        console.log(this.state.books);
      })
      .catch((error) => {
        if (error.response.status === 401) {
          this.props.history.push("/login");
        }
      });
  }

  logout () {
    localStorage.removeItem('jwtToken');
    window.location.reload();
  }

  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/login" component={Home} />
            <Route path='/login' component={Login} />
            <Route path='/register' component={Register} />
            <Route exact path="/saved" component={Saved} />
            <Route exact path="/quiz" component={Quiz} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
