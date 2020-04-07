import React from 'react';
import TextField from "./TextField/TextField";


class TableRow extends React.Component {

    render() {
        let calcTotal = (types) => this.props.countryData[this.props.countryData.length - 1][types];
        let genLastDayStat = types => {
            let value = this.props.countryData[this.props.countryData.length - 1][types] - this.props.countryData[this.props.countryData.length - 2][types];
            if (value <= 0) return '';
                return ` (+${this.props.countryData[this.props.countryData.length - 1][types] - this.props.countryData[this.props.countryData.length - 2][types]} за последний день)`;
        };
        let columns = [<TextField item={this.props.countryName}/>,
            <TextField className={'confirmed'} item={calcTotal('confirmed') + genLastDayStat('confirmed')}/>,
            <TextField className={'deaths'} item={calcTotal('deaths') + genLastDayStat('deaths')}/>,
            <TextField className={'recovered'} item={calcTotal('recovered') + genLastDayStat('recovered')}/>];
        return (
            <tr>
                {columns}
            </tr>);
    }

}

export default TableRow;

