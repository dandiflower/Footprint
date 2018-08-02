import React from 'react'
import Slider from 'react-rangeslider'
import 'react-rangeslider/lib/index.css'


class CustomizedSlider extends React.Component {
  // constructor(props) {
      // super(props)
      // this.state = {
      //   sliderValue: 0
      // }
    // }
  // handleOnChange = (value) => {
  //     this.setState({
  //       sliderValue: value
  //     })
  //     console.log("sliderValue", this.state.sliderValue)
  //   }
   
    render() {
      // let { sliderValue } = this.state
      return (
        <Slider
          id={this.props.id}
          type={this.props.type}
          value={this.props.value}
          min={this.props.min}
          max={this.props.max}
          orientation="horizontal"
          onChange={this.props.onChange}
          // onChange={this.handleOnChange}
          // onAfterChange={this.sliderInputHandler}
        />
      )
    }
  }

export default CustomizedSlider;


