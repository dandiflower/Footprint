import React, { Component } from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';


class MERN extends Component {

  constructor(props) {
    super(props);
    this.state = {
      books: [
      // firstName: "",
      // lastName: "",
      // zipCode: "",
      // email: "",
      // numPplInHome: "",
      // numVehicle: "",
      // heatSource: {
      //   naturalGas: false,
      //   electricity: false,
      //   fuelOil: false,
      //   propane: false
      // }
    ]
    };
  }

  componentDidMount() {
    axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken');
    axios.get('/api/book')
      .then(res => {
        this.setState({ books: res.data });
        console.log(this.state.books);
        console.log(this.state.auth);
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
      {/* Book Panel Begins */}
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">
              BOOK CATALOG &nbsp;
              {localStorage.getItem('jwtToken') &&
                <button className="btn btn-primary" onClick={this.logout}>Logout</button>
              }
            </h3>
          </div>
          <div className="panel-body">
            <table className="table table-stripe">
              <thead>
                <tr>
                  <th>ISBN</th>
                  <th>Title</th>
                  <th>Author</th>
                </tr>
              </thead>
              <tbody>
                {this.state.books.map(book =>
                  <tr>
                    <td><Link to={`/show/${book._id}`}>{book.isbn}</Link></td>
                    <td>{book.title}</td>
                    <td>{book.author}</td>
                  </tr>
                )}

              </tbody>
            </table>
          </div>
        </div>
        {/* Book Panel Ends */}
      </div>
    );
  }
}

export default MERN;



