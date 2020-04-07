import React from 'react';

class  TextField extends React.Component {
    render() {
        return (
        <td className={this.props.className}>
            <div >{this.props.item}</div>
        </td>
    )
    }


};
export default TextField;
