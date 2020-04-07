import './Loader.css';
import React from "react";
import loader from './giphy.gif';

class Loader extends React.Component {

    render() {
        return (
            <div className='preloader'>
                <div className='gif'>
                <img className='giffy' src={loader} alt="loading..." />
                </div>
            </div>
        )
    }


}
export default Loader;
