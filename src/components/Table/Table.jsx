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
                <tbody>
                {rows}
                </tbody>
            </table>
        )
    }


}

export default Table;
