import React from 'react';
import {HorizontalBar} from "react-chartjs-2";



class HorizontalBarComp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dateArrIndex: this.props.dateArr.length - 1
        };
    }

    render() {
        let horizontalArr = Object.entries(this.props.state.table);
        horizontalArr.sort((a, b) => b[1][this.state.dateArrIndex]['confirmed'] - a[1][this.state.dateArrIndex]['confirmed']);
        let datePlusFunc = () => {
            if (this.state.dateArrIndex === this.props.dateArr.length - 1) return;
            let newValue = this.state.dateArrIndex + 1;
            this.setState({
                dateArrIndex: newValue
            })
        };
        let dateMinusFunc = () => {
            if (this.state.dateArrIndex === 0) return;
            let newValue = this.state.dateArrIndex - 1;
            this.setState({
                dateArrIndex: newValue
            })
        };
        return (
            <div>
            <div className='buttons'>
                <button onClick={dateMinusFunc}>Предыдущая дата</button>
                <button onClick={datePlusFunc}>Следующая дата</button>
            </div>
            <HorizontalBar
        data={{
            labels: horizontalArr.map(item => item[0]).slice(0, 5),
                datasets: [{
                label: `Подтвержденные случаи заражения(${this.props.dateArr[this.state.dateArrIndex]}) `,
                data: horizontalArr.map(item => item[1][this.state.dateArrIndex]['confirmed']).slice(0, 5),
                backgroundColor: 'rgba(0,102,204,1)'
            },

            ]
        }}
        options={{
            animation: {
                duration: 2000,
            },
        }}
        />
            </div>
    )
    }


}

export default HorizontalBarComp;
