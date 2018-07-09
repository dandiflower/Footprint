<<<<<<< HEAD
// import React from "react";
// import "./Slidebar.css";

const slider = document.getElementById("myslider");
const output = document.getElementById("valueSlidebar");
output.innerHTML = slider.value; // Display the default slider value
console.log("this.props", this.props);

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function () {
    output.innerHTML = this.value;
}

const Slidebar = props => {
    return (
        <div>
            <h1 style="text-align:center;color:rgb(150,150,150);font-size:35px;margin:80px 0  50px">Google Material Sliders</h1>
            <input type="range" max="100" value="0" class="clicked" />
        </div>

            {/* // <div className="''slidecontainer">
    //     <input
    //         type="range"
    //         min="1"
    //         max="100"
    //         value="50"
    //         className="slider"
    //         id="myslider" />
    //     <p>Value:
    //     <span id="valueSlidebar"></span>
    //     </p>
    // </div> */}
            );
            }
            export default Slidebar;
            
            
=======
import React, { Component } from 'react'
import ReactDom from 'react-dom';

// import "./Slidebar.css";

// Using an ES6 transpiler like Babel
import Slider from 'react-rangeslider'

// To include the default styles
import 'react-rangeslider/lib/index.css'


// function log(value) {
//     console.log(value);
// }

// function percentFormatter(v) {
//     return `${v} %`;
// }

// const SliderWithTootTip = createSliderWithTooltip(Slider);

class CustomizedSlider extends React.Component {
    constructor(props, context) {
        super(props, context)
        this.state = {
          volume: 0
        }
      }
    handleOnChange = (value) => {
        this.setState({
          volume: value
        })
        return this.props.sliderValues(this.state.volume)
      }
     
      render() {
        let { volume } = this.state
        return (
          <Slider
            value={volume}
            orientation="horizontal"
            onChange={this.handleOnChange}
          />
        )
      }
    }

export default CustomizedSlider;


>>>>>>> a38202884704b0f50577991b8ba46ef75bf2549d
