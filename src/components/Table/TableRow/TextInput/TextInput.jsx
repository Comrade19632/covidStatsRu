import React from 'react';
class TextInput extends React.Component {
    render() {
        const {value, onChange, name} = this.props;
        return (
            <td>
                <input type="text"
                       value={value}
                       onChange={onChange}
                       name={name}
                />
            </td>
        )
    }
}
export default TextInput;