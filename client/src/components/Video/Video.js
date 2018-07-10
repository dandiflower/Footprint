import React from "react";
import vid from "./assets/farmvid.mp4";
import "./Video.css";
        
class Video extends React.Component {
        //     constructor(props) {
        // super(props);
        // this.state = {
        // };
    // }

    render() {
        return (
            <div className="video-box">
                <video className="video-container video-container-overlay" id="myVideo" autoplay loop muted>
                    <source src={vid} type="video/webm" />
            </video>
        </div>
        );
    }
}

export default Video;