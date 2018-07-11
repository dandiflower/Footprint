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
      console.log("before change", value)
      // return this.props.sliderValues(this.state.sliderValue)
    }
    // sliderInputHandler =(value) => {
    //   console.log("after change", value)
    //   this.setState({
    //     sliderValue: value
    //   })
    // }
    render() {
      let { sliderValue } = this.state
      return (
        <Slider
          id={this.props.id}
          value={sliderValue}
          orientation="horizontal"
          onChange={this.handleOnChange}
          onAfterChange={this.sliderInputHandler}
        />
      )
    }
  }

export default CustomizedSlider;


