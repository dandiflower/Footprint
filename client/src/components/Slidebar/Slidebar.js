import React from 'react'
import Slider from 'react-rangeslider'
import 'react-rangeslider/lib/index.css'


class CustomizedSlider extends React.Component {
  constructor(props, context) {
      super(props, context)
      this.state = {
        sliderValue: 0
      }
    }
  handleOnChange = (value) => {
      this.setState({
        sliderValue: value
      })
    }
   
    render() {
      let { sliderValue } = this.state
      return (
        <Slider
          id={this.props.id}
          value={sliderValue}
          min={this.props.min}
          max={this.props.max}
          orientation="horizontal"
          onChange={this.handleOnChange}
          onAfterChange={this.sliderInputHandler}
        />
      )
    }
  }

export default CustomizedSlider;


