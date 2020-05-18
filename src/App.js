import React from 'react';
import './App.css';
import Table from './components/Table/Table';
import Loader from './components/Loader/Loader';
import VerticalBar from './components/VerticalBar/VerticalBar';
import HorizontalBarComp from './components/HorizontalBarComp/HorizontalBarComp';
import AnimateBar from './components/AnimateBar/AnimateBar';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            table: {},
            isFetching: true,
        };
    }

    componentDidMount() {
        fetch('https://pomber.github.io/covid19/timeseries.json')
            .then((response) => response.json(), () => {
                alert('Data loading error, check your internet connection');
            })
            .then((data) => {
                    function sumArrays(...arrays) {
                        const n = arrays.reduce((max, xs) => Math.max(max, xs.length), 0);
                        const result = Array.from({length: n});
                        return result.map((_, i) => arrays.map((xs) => xs[i] || 0).reduce((sum, x) => sum + x, 0));
                    }
                    const dateArr = data['US'].map((item) => item.date);
                    let confirmedArrWorld = [];
                    let deathsArrWorld = [];
                    let recoveredArrWorld = [];
                    for (const key of Object.values(data)) {
                        confirmedArrWorld = sumArrays(confirmedArrWorld, key.map((item) => item.confirmed));
                        deathsArrWorld = sumArrays(deathsArrWorld, key.map((item) => item.deaths));
                        recoveredArrWorld = sumArrays(recoveredArrWorld, key.map((item) => item.recovered));
                    }
                    data['Весь мир'] = [];
                    for (let i = 0; i < dateArr.length; i++) {
                        data['Весь мир'].push({
                            date: dateArr[i],
                            confirmed: confirmedArrWorld[i],
                            deaths: deathsArrWorld[i],
                            recovered: recoveredArrWorld[i],
                        });
                    }
                    this.setState({table: data, isFetching: false})
                }
            );


    }

    render() {
        if (this.state.isFetching) return <Loader/>;

        function handleChange(event) {
            const {target} = event;
            const {value} = target;
            const {name} = target;
            this.setState({
                [name]: value,
            });
        }
        const dateArr = this.state.table.US.map((item) => item.date);
        const ruDateArrFn = (dateArr) => dateArr.map((item) => {
            let [yy, mm, dd] = item.split('-');
            switch (mm) {
                case '1':
                    mm = 'Января';
                    break;
                case '2':
                    mm = 'Февраля';
                    break;
                case '3':
                    mm = 'Марта';
                    break;
                case '4':
                    mm = 'Апреля';
                    break;
                case '5':
                    mm = 'Мая';
                    break;
                case '6':
                    mm = 'Июня';
                    break;
                case '7':
                    mm = 'Июля';
                    break;
                case '8':
                    mm = 'Августа';
                    break;
                default:
            }
            return `${dd} ${mm} ${yy}г.`;
        });
        const ruDateArr = ruDateArrFn(dateArr);
        const countriesArr = Object.keys(this.state.table);
        return (
            <div className="App">
                <div>
                    База данных сайта по распространению COVID-19 актуальна на
                    {ruDateArr[ruDateArr.length - 1]}
                </div>
                <AnimateBar
                    handleChange={handleChange}
                    state={this.state}
                    dateArr={ruDateArr}
                    countriesArr={countriesArr}
                />
                {/* <HorizontalBarComp state={this.state} dateArr={dateArr}/> */}
                <VerticalBar handleChange={handleChange} state={this.state} countriesArr={countriesArr} dateArr={ruDateArr}/>

                <Table state={this.state.table}/>
            </div>
        );
    }
}

export default App;
