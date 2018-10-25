import React, { Component } from 'react';
import Loader from '../../components/Loader';
import Intro from '../../components/Intro';
import * as typeformEmbed from '@typeform/embed'


class Series extends Component{

   
    componentDidMount(){
        const popup1 = document.querySelector('.target-dom-node')
        typeformEmbed.makePopup(
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
                 
            <div> 
            series container 
            <Loader /> 
            <Intro message="hello there, welcome to Footprint!"/>
            </div>

        )
    }
}

export default Series;