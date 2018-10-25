import React from 'react';
import * as typeformEmbed from '@typeform/embed'

class Typeform extends Component{
    
    componentDidMount() {
        const reference = document.querySelector('.target-dom-node')
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
        reference.open()
    }
    

    render(){
        return(
            <div>
                <div 
                    id='my-embedded-typeform'
                    style= 'width:100%; height: 300px'>

                </div>
            </div>
        )
    }
}

export default Typeform;