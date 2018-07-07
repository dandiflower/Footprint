import React, { Component } from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';


class MERN extends Component {

  constructor(props) {
    super(props);
    this.state = {
      persons: [

    ]
    };
  }

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

  logout () {
    localStorage.removeItem('jwtToken');
    window.location.reload();
  }


  render() {
    return (
      <div className="container">
      {/* person Panel Begins */}
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">
              person CATALOG &nbsp;
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
                {this.state.persons.map(person =>
                  <tr>
                    <td><Link to={`/show/${person._id}`}>{person.isbn}</Link></td>
                    <td>{person.title}</td>
                    <td>{person.author}</td>
                  </tr>
                )}

              </tbody>
            </table>
          </div>
        </div>
        {/* person Panel Ends */}
      </div>
    );
  }
}

export default MERN;



