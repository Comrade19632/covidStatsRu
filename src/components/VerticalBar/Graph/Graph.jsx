import React from 'react';
import {Bar, Line} from "react-chartjs-2";
import {connect} from 'react-redux';


const Graph = (props) => {
       if (props.select.graphType === 'Гистограмма') return (
           <Bar data={{
               labels: props.dataType[props.select.dataType].labels,
               datasets: props.dataType[props.select.dataType].datasets
           }
           }
                 width={100}
                 height={50}/>
       );
       else return (
                <Line data={{
                    labels: props.dataType[props.select.dataType].labels,
                    datasets: props.dataType[props.select.dataType].datasets
                }
                }
                      width={100}
                      height={50}/>
        )
    


}
const mapStateToProps = state => {
    return {
        select: state.select
    }
};

export default connect(mapStateToProps ,null)(Graph);
