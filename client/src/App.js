import React, { Component } from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';


class MERN extends Component {

  constructor(props) {
    super(props);
    this.state = {
      books: [

    ]
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



