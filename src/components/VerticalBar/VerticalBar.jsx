import React from 'react';
import {Bar} from "react-chartjs-2";



class VerticalBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            countryName: 'Russia',
        };
    }


    render() {

        let confirmedArrSelectedCountry = this.props.state.table[this.state.countryName].map(item => item["confirmed"]);
        let deathsArrSelectedCountry = this.props.state.table[this.state.countryName].map(item => item["deaths"]);
        let recoveredArrSelectedCountry = this.props.state.table[this.state.countryName].map(item => item["recovered"]);


        return (
            <div className={'graph'}>

                <select name="countryName" onChange={this.props.handleChange.bind(this)}
                        value={this.state.countryName}>{this.props.countriesArr.map((item, index) => <option
                    key={index}>{item}</option>)} </select>

                <Bar data={{
                    labels: this.props.dateArr,
                    datasets: [{
                        label: `Подтвержденные случаи заражения(${this.state.countryName}) `,
                        data: confirmedArrSelectedCountry,
                        backgroundColor: 'rgba(0,102,204,1)'
                    }, {
                        label: `Подтвержденные случаи смертей(${this.state.countryName}) `,
                        data: deathsArrSelectedCountry,
                        backgroundColor: 'rgba(255,0,0,1)'
                    }, {
                        label: `Подтвержденные случаи выздоровления(${this.state.countryName}) `,
                        data: recoveredArrSelectedCountry,
                        backgroundColor: 'rgba(51,255,0,1)'
                    },


                    ]
                }
                }
                     width={100}
                     height={50}/>
                <Bar data={{
                    labels: this.props.dateArr,
                    datasets: [{
                        label: `Подтвержденные случаи заражения(Весь мир) `,
                        data: this.props.confirmedArrWorld,
                        backgroundColor: 'rgba(0,102,204,1)'
                    }, {
                        label: `Подтвержденные случаи смертей(Весь мир) `,
                        data: this.props.deathsArrWorld,
                        backgroundColor: 'rgba(255,0,0,1)'
                    }, {
                        label: `Подтвержденные случаи выздоровления(Весь мир) `,
                        data: this.props.recoveredArrWorld,
                        backgroundColor: 'rgba(51,255,0,1)'
                    },


                    ]
                }
                }
                     width={100}
                     height={50}/>


                <a href="http://gradient-st.ru">Powered by Gradient Studio</a>
            </div>
        )
    }


}

export default VerticalBar;
