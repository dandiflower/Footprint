import React from "react";
// import vid from "./assets/videofarm.mp4";
import vid from "./assets/moviegas.webm";
import "./Video.css";

class Movie extends React.Component {
    //     constructor(props) {
    // super(props);
    // this.state = {
    // };
    // }

    render() {
        return (
            <div>
                some text<video className="video-container video-container-overlay" id="myVideo" autoPlay="true" loop="true" muted={this.props.muted}>
                    <source src={vid} type="video/webm" />
                    {/* <source src={vid} type="video/mp4" /> */}
                </video>
            </div>
        );
    }
}

export default Movie;