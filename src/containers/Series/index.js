import React, { Component } from 'react';
import * as typeformEmbed from '@typeform/embed'
import Loader from '../../components/Loader';
import Intro from '../../components/Intro';

class Series extends Component{

    componentDidMount(){
        const popup1 = typeformEmbed.makePopup(
            'https://hannahlim1.typeform.com/to/LwxSXf',
            {
                mode: 'popup',
                autoClose: 3000,
                hideHeaders: true,
                hideFooters: true,
                onSubmit: function() {
                    console.log('Typeform successfully submitted')
                }
            }
        )
        document.getElementById('bt-popup').addEventListener('click',function(){
            popup1.open();
        });
    }

    render() {
        return (
                 
            <div className="background"> 
            Welcome to Footprint, a survey to collect data about your lifestyle!
            <Loader /> 

            <Intro className="intro-message" message="Once we have enough participants, we will share the results and information we've collect with you."/>

            <button id="bt-popup" class="my-button">Take the Survey!</button>
            </div>

        )
    }
}

export default Series;