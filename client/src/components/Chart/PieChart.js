import React, { Component } from 'react';
import Pie from 'react-chartjs-2';
// import { BarChart } from 'react-easy-chart';
// import "./Chart.css";

class PieChart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chartData:props.chartData
        }
    }

    static defaultProps = {
        displayTitle:true,
        location:'Question Title'
    }

    render() {
        return (
            <div>

                <Pie 
                    data={this.state.chartData}
                    options={{
                        maintainAspectRatio:false,
                        title: {
                            display:this.props.displayTitle,
                            text:this.props.location,
                            // fontSize=25
                        }
                    }}
                />
            </div>
        );
    }
}

export default PieChart;