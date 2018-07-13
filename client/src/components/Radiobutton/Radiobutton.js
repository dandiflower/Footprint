import React from 'react'
import './Radiobutton.css';

class Radio extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <li>
                <label>

                    <input {...this.props}
                        type="radio"
                    /> {[this.props.name]}
                </label>
            </li>
        )
    }


}

export default Radio;