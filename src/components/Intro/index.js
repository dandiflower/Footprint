import React from 'react';

const Intro = props => (
    <p className='App-intro'>
        intro functional component
        {props.message}
    </ p>
);

export default Intro;