import React from "react";
import vid from "./assets/farmvid.mp4";
        
class Video extends React.Component {
        //     constructor(props) {
        // super(props);
        // this.state = {
        // };
    // }

    render() {
        return (
            <div>
            <video className="video-container video-container-overlay" autoPlay="true" id="myVideo" loop muted={this.props.muted}>
                    <source src={vid} type="video/mp4" />
            </video>
        </div>
        );
    }
}

export default Video;