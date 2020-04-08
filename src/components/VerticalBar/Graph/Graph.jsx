import React from 'react';
import {Bar, Line} from "react-chartjs-2";


class Graph extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }


    render() {
       if (this.props.state.graphType === 'Гистограмма') return (
           <Bar data={{
               labels: this.props.dataType[this.props.state.dataType].labels,
               datasets: this.props.dataType[this.props.state.dataType].datasets
           }
           }
                 width={100}
                 height={50}/>
       );
       else return (
                <Line data={{
                    labels: this.props.dataType[this.props.state.dataType].labels,
                    datasets: this.props.dataType[this.props.state.dataType].datasets
                }
                }
                      width={100}
                      height={50}/>
        )
    }


}

export default Graph;
