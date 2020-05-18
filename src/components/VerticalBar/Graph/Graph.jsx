import React from 'react';
import {Bar, Line} from "react-chartjs-2";
import {connect} from 'react-redux';


class Graph extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
       if (this.props.select.graphType === 'Гистограмма') return (
           <Bar data={{
               labels: this.props.dataType[this.props.select.dataType].labels,
               datasets: this.props.dataType[this.props.select.dataType].datasets
           }
           }
                 width={100}
                 height={50}/>
       );
       else return (
                <Line data={{
                    labels: this.props.dataType[this.props.select.dataType].labels,
                    datasets: this.props.dataType[this.props.select.dataType].datasets
                }
                }
                      width={100}
                      height={50}/>
        )
    }


}
const mapStateToProps = state => {
    return {
        select: state.select
    }
};

export default connect(mapStateToProps ,null)(Graph);
