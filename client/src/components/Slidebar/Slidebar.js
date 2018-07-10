import React from 'react'
// Using an ES6 transpiler like Babel
import Slider from 'react-rangeslider'

// To include the default styles
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
        return this.props.sliderValues(this.state.sliderValue)
      }
     
      render() {
        let { sliderValue } = this.state
        return (
          <Slider
            id={this.props.id}
            value={sliderValue}
            orientation="horizontal"
            onChange={this.handleOnChange}
          />
        )
      }
    }

export default CustomizedSlider;


