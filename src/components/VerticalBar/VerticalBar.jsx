import React from 'react';
import {Bar} from "react-chartjs-2";


class VerticalBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            countryName: 'Весь мир',
            dataType: 'Подтвержденные случаи'
        };
    }


    render() {

        let confirmedArrSelectedCountry = this.props.state.table[this.state.countryName].map(item => item["confirmed"]);
        let deathsArrSelectedCountry = this.props.state.table[this.state.countryName].map(item => item["deaths"]);
        let recoveredArrSelectedCountry = this.props.state.table[this.state.countryName].map(item => item["recovered"]);
        let confirmedArrSelectedCountryDiff = [];
        let deathsArrSelectedCountryDiff = [];
        let recoveredArrSelectedCountryDiff = [];
        for (let i = 1; i < confirmedArrSelectedCountry.length; i++) {
            confirmedArrSelectedCountryDiff.push(confirmedArrSelectedCountry[i] - confirmedArrSelectedCountry[i - 1]);
            recoveredArrSelectedCountryDiff.push(recoveredArrSelectedCountry[i] - recoveredArrSelectedCountry[i - 1]);
            deathsArrSelectedCountryDiff.push(deathsArrSelectedCountry[i] - deathsArrSelectedCountry[i - 1]);
        }
        let dataType = {
            'Подтвержденные случаи': {
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
                ],
                labels: this.props.dateArr
            },
            'Прирост': {
                datasets: [{
                    label: `Прирост зараженных(${this.state.countryName}) `,
                    data: confirmedArrSelectedCountryDiff,
                    backgroundColor: 'rgba(0,102,204,1)'
                }, {
                    label: `Прирост смертей(${this.state.countryName}) `,
                    data: deathsArrSelectedCountryDiff,
                    backgroundColor: 'rgba(255,0,0,1)'
                }, {
                    label: `Прирост случаев выздоровления(${this.state.countryName}) `,
                    data: recoveredArrSelectedCountryDiff,
                    backgroundColor: 'rgba(51,255,0,1)'
                },
                ],
                labels: this.props.dateArr.slice(1)
            }

        };

        return (
            <div className={'graph'}>

                <select name="countryName" onChange={this.props.handleChange.bind(this)}
                        value={this.state.countryName}>{this.props.countriesArr.map((item, index) => <option
                    key={index}>{item}</option>)} </select>
                <select name='dataType' onChange={this.props.handleChange.bind(this)}
                        value={this.state.dataType}>{['Подтвержденные случаи', 'Прирост'].map((item, index) => <option
                    key={index}>{item}</option>)} </select>
                <Bar data={{
                    labels: dataType[this.state.dataType].labels,
                    datasets: dataType[this.state.dataType].datasets
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
