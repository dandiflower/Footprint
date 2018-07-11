import React from 'react';


import { Button, ButtonGroup } from 'react-bootstrap';

import {PropTypes as types} from 'prop-types';


/**
 * A ButtonGroup whose buttons act like a radio button.
 * Options should be passed as a list of [value, display] tuples.
 * Buttons are set up so you can use e.target.name and e.target.value in your
 * onChange handler like you would with regular form inputs.
 *
 * source: https://gist.github.com/insin/1c50f520926fb9e2b2ae3eab148770e4
 */
class RadioGroup extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {

    let {disabled, name, onChange, options, value, ...props} = this.props
    
    return ( <ButtonGroup {...props}>
        {options.map(option =>
            <Button
            key={option[0]}
            bsStyle={option[0] === value ? 'primary' : 'default'}
            children={option[1]}
            disabled={disabled}
            name={name}
            onClick={onChange}
            value={option[0]}
            />
        )}
        </ButtonGroup>)
    
    }
}

RadioGroup.propTypes = {
  name: types.string.isRequired,
    onChange: types.func.isRequired,
    options: types.arrayOf(types.arrayOf(types.string)),
    value: types.string.isRequired,
}

export default RadioGroup;