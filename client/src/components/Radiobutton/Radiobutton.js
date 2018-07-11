import React from 'react'
import './Radiobutton.css';

class Radio extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            radioValue: ''
        }
    }


    // hanldeChange(event) {
    //     this.setState({
    //         radioValue: event.target.value
    //     });
    // }

    // handleSubmit(event) {
    //     console.log(this.state.radioValue)
    // }

    render() {
        return (
            <li>
                <label>

                    <input {...this.props}
                        // id={this.props.id}
                        // name={this.props.name}
                        type="radio"
                        // value={this.props.value}
                        // checked={this.state.radioValue}
                        // onChange={this.handleChange}

                    /> {[this.props.value]}
                </label>
            </li>
        )
    }


}

export default Radio;