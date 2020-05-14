import React from 'react';
import Graph from "./Graph/Graph";


class VerticalBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            countryName: 'Весь мир',
            dataType: 'Подтвержденные случаи',
            graphType: 'Гистограмма'
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
                    backgroundColor: 'rgba(0,102,204,1)',
                    fill: false,
                }, {
                    label: `Подтвержденные случаи смертей(${this.state.countryName}) `,
                    data: deathsArrSelectedCountry,
                    backgroundColor: 'rgba(255,0,0,1)',
                    fill: false,
                }, {
                    label: `Подтвержденные случаи выздоровления(${this.state.countryName}) `,
                    data: recoveredArrSelectedCountry,
                    backgroundColor: 'rgba(51,255,0,1)',
                    fill: false,
                },
                ],
                labels: this.props.dateArr
            },
            'Прирост': {
                datasets: [{
                    label: `Прирост зараженных(${this.state.countryName}) `,
                    data: confirmedArrSelectedCountryDiff,
                    backgroundColor: 'rgba(0,102,204,1)',
                    fill: false,
                }, {
                    label: `Прирост смертей(${this.state.countryName}) `,
                    data: deathsArrSelectedCountryDiff,
                    backgroundColor: 'rgba(255,0,0,1)',
                    fill: false,
                }, {
                    label: `Прирост случаев выздоровления(${this.state.countryName}) `,
                    data: recoveredArrSelectedCountryDiff,
                    backgroundColor: 'rgba(51,255,0,1)',
                    fill: false,
                },
                ],
                labels: this.props.dateArr.slice(1)
            }
        };

        return (
            <div className={'graph'}>
                <div className='container'>
                    <div className='row'>
                        <div className="col-sm">
                            <select className="form-control form-control-sm" name='graphType'
                                    onChange={this.props.handleChange.bind(this)}
                                    value={this.state.graphType}>{['Гистограмма', 'Кривая'].map((item, index) => <option
                                key={index}>{item}</option>)} </select></div>
                        <div className="col-sm">
                            <select className="form-control form-control-sm" name="countryName"
                                    onChange={this.props.handleChange.bind(this)}
                                    value={this.state.countryName}>{this.props.countriesArr.map((item, index) => <option
                                key={index}>{item}</option>)} </select></div>
                        <div className="col-sm">
                            <select className="form-control form-control-sm" name='dataType'
                                    onChange={this.props.handleChange.bind(this)}
                                    value={this.state.dataType}>{['Подтвержденные случаи', 'Прирост'].map((item, index) =>
                                <option
                                    key={index}>{item}</option>)} </select></div>
                    </div>
                </div>
                <Graph dataType={dataType} state={this.state}/>
                <a href="http://gradient-st.ru">Powered by Gradient Studio</a>
            </div>
        )
    }


}

export default VerticalBar;
