import React from 'react';
import BarChart from './BarChart'


class AnimateBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        let state = Object.assign({}, this.props.state.table);
        delete state['Весь мир'];

        const randomColor = () => {
            return `rgb(${255 * Math.random()}, ${255 * Math.random()}, ${255})`;
        };

        const newLen = this.props.dateArr.length - 1;

        const newKeys = this.props.countriesArr;
        const newColors = newKeys.reduce((res, item) => ({
            ...res,
            ...{[item]: randomColor()}
        }), {});

        const newLabels = newKeys.reduce((res, item, idx) => {
            return {
                ...res,
                ...{
                    [item]: (
                        <div style={{textAlign: "center",}}>
                            <div>{item}</div>
                        </div>
                    )
                }
            }
        }, {});

        let dataObject = {};
        for (let key in state) {
            let confirmed = state[key].map(item => item['confirmed']);
            dataObject[key] = confirmed;
        }
        return (
            <div className='animateBar'>
                <BarChart
                    start={true}
                    data={dataObject}
                    timeline={this.props.dateArr}
                    labels={newLabels}
                    colors={newColors}
                    len={newLen}
                    timeout={600}
                    delay={150}
                    timelineStyle={{
                        textAlign: "center",
                        fontSize: "50px",
                        color: "rgb(148, 148, 148)",
                        margin: 0,
                    }}
                    textBoxStyle={{
                        textAlign: "right",
                        color: "rgb(133, 131, 131)",
                        fontSize: "30px",
                    }}
                    barStyle={{
                        height: "30px",
                        marginTop: "10px",
                        borderRadius: "10px",
                    }}
                    width={[15, 75, 10]}
                    maxItems={5}
                />
            </div>
        )
    }


}

export default AnimateBar;
