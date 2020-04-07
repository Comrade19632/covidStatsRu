import React from 'react';
import TableRow from "./TableRow/TableRow";
import './Table.css';


class Table extends React.Component {

    render() {
        let rows = Object.entries(this.props.state);
        rows.sort((a, b) => b[1][b[1].length - 1]['confirmed'] - a[1][a[1].length - 1]['confirmed']);
        rows = rows.map(item => <TableRow countryName={item[0]} countryData={item[1]}/>);

        return (
            <table>
                <tr>
                    <td>
                        Страна
                    </td>
                    <td className='confirmed'>
                        Кол-во заболевших
                    </td>
                    <td className='deaths'>
                        Кол-во погибших
                    </td>
                    <td className='recovered'>
                        Кол-во выздоровевших
                    </td>
                </tr>
                <tr>
                    <td>
                        Весь мир
                    </td>
                    <td className='confirmed'>
                        {this.props.confirmedArrWorld[this.props.confirmedArrWorld.length - 1] +
                        ` (+${this.props.confirmedArrWorld[this.props.confirmedArrWorld.length - 1] - this.props.confirmedArrWorld[this.props.confirmedArrWorld.length - 2]} за последний день)`}
                    </td>
                    <td className='deaths'>
                        {this.props.deathsArrWorld[this.props.deathsArrWorld.length - 1] +
                        ` (+${this.props.deathsArrWorld[this.props.deathsArrWorld.length - 1] - this.props.deathsArrWorld[this.props.deathsArrWorld.length - 2]} за последний день)`}
                    </td>
                    <td className='recovered'>
                        {this.props.recoveredArrWorld[this.props.recoveredArrWorld.length - 1] +
                        ` (+${this.props.recoveredArrWorld[this.props.recoveredArrWorld.length - 1] - this.props.recoveredArrWorld[this.props.recoveredArrWorld.length - 2]} за последний день)`}
                    </td>
                </tr>
                <tbody>
                {rows}
                </tbody>
            </table>
        )
    }


}

export default Table;
