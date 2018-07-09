
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


