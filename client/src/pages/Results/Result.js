import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Jumbotron } from "../../components/Results";


// App component acts as home or root page. This component handles the list of persons.

class Result extends Component {

    constructor(props) {
        super(props);
        this.state = {
            persons: []
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
                                            person CATALOG &nbsp;
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