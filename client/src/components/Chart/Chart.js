import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';
// import { BarChart } from 'react-easy-chart';
// import "./Chart.css";

class Chart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chartData:props.chartData
        }
    }

    static defaultProps = {
        displayTitle:true,
        displayLegend:true,
        legendPosition:'right',
        location:'Question Title'
    }

    render() {
        return (
            <div>
                <Bar
                    data={this.state.chartData}
                    height={this.props.height}
                    options={{
                        maintainAspectRatio:false,
                        title: {
                            display:this.props.displayTitle,
                            text:this.props.location,
                            fontSize:25
                        },
                        legend:{
                            display:this.props.displayLegend,
                            position:this.props.legendPosition
                        },
                        scales: {
                            yAxes:[{
                                ticks: {
                                    beginAtZero: true,
                                    max:this.props.max
                                }
                            }]
                        }
                    }}
                />
            </div>
        );
    }
}

export default Chart;