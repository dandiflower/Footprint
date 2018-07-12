import React, { Component } from 'react';
import { HorizontalBar } from 'react-chartjs-2';
import { BarChart } from 'react-easy-chart';
// import "./Chart.css";

class Chart extends Component {
    constructor(props) {
        super(props)
        this.state= {
            data:[]
        }
    }
    render() {
        const chart = {
            data: {
                labels: ['You', 'USA Average'],
                datasets: [{
                    label: 'My First dataset',
                    backgroundColor: 'rgba(255,99,132,0.2)',
                    borderColor: 'rgba(255,99,132,1)',
                    borderWidth: 1,
                    hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                    hoverBorderColor: 'rgba(255,99,132,1)',
                    data: [3, 5]
                }]
            },
            options: {
                maintainAspectRatio: true,
                xAxes: [{
                    display: true,
                    ticks: {
                        beginAtZero: true,
                        max: 10
                    }
                }]
            }
        }


        return (
            <div>
                <HorizontalBar
                    data={chart.data}
                    width={this.props.width}
                    height={this.props.height}
                    options={chart.options}
                />
            </div>
        );
    }
}

export default Chart;