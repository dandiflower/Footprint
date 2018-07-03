import React from "react";
import Jumbotron from "../../components/Results"

class Result extends Component {
    state = {
        user: {}
    };

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <Jumbotron>
                            <h1>
                                {this.state.user}
                            </h1>
                        </Jumbotron>
                    </div>
                </div>
            </div>
        )
    }
}

export default Result;