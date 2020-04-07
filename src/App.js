import React from 'react';
import './App.css';
import Table from "./components/Table/Table";
import Loader from "./components/Loader/Loader";
import VerticalBar from "./components/VerticalBar/VerticalBar";
import HorizontalBarComp from "./components/HorizontalBarComp/HorizontalBarComp";
import AnimateBar from "./components/AnimateBar/AnimateBar";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            table: {},
            isFetching: true,
        };
    }

    componentDidMount() {
        fetch("https://pomber.github.io/covid19/timeseries.json")
            .then(response => response.json(), () => {
                alert('Data loading error, check your internet connection')
            })
            .then(data => this.setState({table: data, isFetching: false}));
    }


    render() {
        if (this.state.isFetching) return <Loader/>;

// calc world data START
        function sumArrays(...arrays) {
            const n = arrays.reduce((max, xs) => Math.max(max, xs.length), 0);
            const result = Array.from({length: n});
            return result.map((_, i) => arrays.map(xs => xs[i] || 0).reduce((sum, x) => sum + x, 0));
        }

        let confirmedArrWorld = [];
        let deathsArrWorld = [];
        let recoveredArrWorld = [];
        for (let key of Object.values(this.state.table)) {
            confirmedArrWorld = sumArrays(confirmedArrWorld, key.map(item => item["confirmed"]));
            deathsArrWorld = sumArrays(deathsArrWorld, key.map(item => item["deaths"]));
            recoveredArrWorld = sumArrays(recoveredArrWorld, key.map(item => item["recovered"]))
        }
// calc world data END

        let dateArr = this.state.table['US'].map(item => item["date"]);
        let ruDateArr = (dateArr) => {
            return  dateArr.map(item => {
                let [yy,mm,dd] = item.split('-');
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
                return `${dd} ${mm} ${yy}г.`
            });
        };
        let countriesArr = Object.keys(this.state.table);


        return (
            <div className="App">
                <AnimateBar state={this.state} dateArr={ruDateArr(dateArr)} countriesArr={countriesArr}/>
                {/*<HorizontalBarComp state={this.state} dateArr={dateArr}/>*/}
                <VerticalBar state={this.state} countriesArr={countriesArr} dateArr={ruDateArr(dateArr)}
                             confirmedArrWorld={confirmedArrWorld} deathsArrWorld={deathsArrWorld}
                             recoveredArrWorld={recoveredArrWorld}/>

                <Table state={this.state.table} confirmedArrWorld={confirmedArrWorld} deathsArrWorld={deathsArrWorld}
                       recoveredArrWorld={recoveredArrWorld}/>
            </div>
        )
    }
};

export default App;
