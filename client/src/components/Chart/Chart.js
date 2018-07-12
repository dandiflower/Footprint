import React, {Component} from 'react';
import {Bar, Line, Pie} from 'react-chartjs-2';
import LineChart from 'react-chartjs';

class Chart extends Component {
    
    render(){
        lineChart = () => {
            const config = {
                type: 'line',
                datasets: [{
                    label:['You'],
                    backgroundColor: red,
                    data: [
                        
                    ]
                }]
            }
        }
        return(
            <div className="chart">
                
            </div>
        );
    }
}

export default Chart;