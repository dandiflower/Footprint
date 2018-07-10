import React from 'react'
import './Radiobutton.css';

class Radio extends Component {
    constructor() {
        super();
        this.state = {
            size: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    hanldeChange(event) {
        this.setState({
            size: event.target.value
        });
    }

    handleSubmit(event) {
        console.log(this.state.size)
    }

    render() {
        return (
            <RadioButton 
                type="radio"
                value="small"
                checked={this.state.size}
                onChange={this.handleChange}
            />
        )
    }


}

export default Radio;