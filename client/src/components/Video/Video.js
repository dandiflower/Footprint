import React from "react";
// import vid from "./assets/videofarm.mp4";
import vid from "./assets/videofarm.webm";
import "./Video.css";
        
class Video extends React.Component {

    render() {
        return (
            <div>
                <video className="video-container video-container-overlay" autoPlay="true" id="myVideo" loop="true" muted={this.props.muted}>
                    <source src={vid} type="video/mp4" />
                </video>
            </div>
        );
    }
}

export default Video;