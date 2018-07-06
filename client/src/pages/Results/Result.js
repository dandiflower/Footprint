import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Jumbotron } from "../../components/Results";


// App component acts as home or root page. This component handles the list of books.

class Result extends Component {

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

    logout = () => {
        localStorage.removeItem('jwtToken');
        window.location.reload();
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <Jumbotron>
                            <h1>
                                {this.state.user}
                                
                                    <div class="container">
                                        <div class="panel panel-default">
                                        <div class="panel-heading">
                                            <h3 class="panel-title">
                                            BOOK CATALOG &nbsp;
                                            {localStorage.getItem('jwtToken') &&
                                                <button class="btn btn-primary" onClick={this.logout}>Logout</button>
                                            }
                                            </h3>
                                        </div>
                                        <div class="panel-body">
                                            <table class="table table-stripe">
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
                                    </div>

                            </h1>
                        </Jumbotron>
                    </div>
                </div>
            </div>
        )
    }
}

export default Result;