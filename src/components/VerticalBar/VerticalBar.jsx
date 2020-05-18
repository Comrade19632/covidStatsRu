import React from 'react';
import Graph from "./Graph/Graph";
import {connect} from 'react-redux';
import {changeCountry, changeDataType, changeGraphType} from "../../redux/actions";


class VerticalBar extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {

        let confirmedArrSelectedCountry = this.props.state.table[this.props.select.countryName].map(item => item["confirmed"]);
        let deathsArrSelectedCountry = this.props.state.table[this.props.select.countryName].map(item => item["deaths"]);
        let recoveredArrSelectedCountry = this.props.state.table[this.props.select.countryName].map(item => item["recovered"]);
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
                    label: `Подтвержденные случаи заражения(${this.props.select.countryName}) `,
                    data: confirmedArrSelectedCountry,
                    backgroundColor: 'rgba(0,102,204,1)',
                    fill: false,
                }, {
                    label: `Подтвержденные случаи смертей(${this.props.select.countryName}) `,
                    data: deathsArrSelectedCountry,
                    backgroundColor: 'rgba(255,0,0,1)',
                    fill: false,
                }, {
                    label: `Подтвержденные случаи выздоровления(${this.props.select.countryName}) `,
                    data: recoveredArrSelectedCountry,
                    backgroundColor: 'rgba(51,255,0,1)',
                    fill: false,
                },
                ],
                labels: this.props.dateArr
            },
            'Прирост': {
                datasets: [{
                    label: `Прирост зараженных(${this.props.select.countryName}) `,
                    data: confirmedArrSelectedCountryDiff,
                    backgroundColor: 'rgba(0,102,204,1)',
                    fill: false,
                }, {
                    label: `Прирост смертей(${this.props.select.countryName}) `,
                    data: deathsArrSelectedCountryDiff,
                    backgroundColor: 'rgba(255,0,0,1)',
                    fill: false,
                }, {
                    label: `Прирост случаев выздоровления(${this.props.select.countryName}) `,
                    data: recoveredArrSelectedCountryDiff,
                    backgroundColor: 'rgba(51,255,0,1)',
                    fill: false,
                },
                ],
                labels: this.props.dateArr.slice(1)
            }
        };

        function handleChange(event) {
            const {target} = event;
            const {value} = target;
            const {name} = target;
            this.props[name](value);
        }

        return (
            <div className={'graph'}>
                <div className='container'>
                    <div className='row'>
                        <div className="col-sm">
                            <select className="form-control form-control-sm" name='changeGraphType'
                                    onChange={handleChange.bind(this)}
                                    value={this.props.select.graphType}>{['Гистограмма', 'Кривая'].map((item, index) => <option
                                key={index}>{item}</option>)} </select></div>
                        <div className="col-sm">
                            <select className="form-control form-control-sm" name="changeCountry"
                                    onChange={handleChange.bind(this)}
                                    value={this.props.select.countryName}>{this.props.countriesArr.map((item, index) => <option
                                key={index}>{item}</option>)} </select></div>
                        <div className="col-sm">
                            <select className="form-control form-control-sm" name='changeDataType'
                                    onChange={handleChange.bind(this)}
                                    value={this.props.select.dataType}>{['Подтвержденные случаи', 'Прирост'].map((item, index) =>
                                <option
                                    key={index}>{item}</option>)} </select></div>
                    </div>
                </div>
                <Graph dataType={dataType} />
                <a href="http://gradient-st.ru">Powered by Gradient Studio</a>
            </div>
        )
    }


}

const mapStateToProps = state => {
  return {
      select: state.select
  }
};

const mapDispatchToProps = {
    changeCountry,
    changeDataType,
    changeGraphType
}
export default connect(mapStateToProps, mapDispatchToProps)(VerticalBar)
