import React, { Component } from 'react';

const img = require("../../assets/images/leaf-background.gif");
const divStyle = {
    width: '88%',
    height: '800px',
    backgroundImage: `url(${img})`,
    backgroundSize: 'cover'
};

class Background extends Component {
    render() {
        return(
            <div className="background-component" style = {divStyle} >
                
            </div>
        )
    }
}

export default Background;