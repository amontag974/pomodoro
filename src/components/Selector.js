import React from 'react';
import '../styles/Selector.css'

class Selector extends React.Component {
    handleChange(e) {
        this.props.onChange(e.target.value);
    }
    
    render() {
        let options = [];
        const min = parseInt(this.props.minTime);
        const max = parseInt(this.props.maxTime);

        for(let i=min; i<=max; i++) {
            options.push(<option key={i} value={i}>{i}</option>)
        }

        return (
            <>
                <label className='selector-label' htmlFor={this.props.description.toLowerCase()}>{this.props.description.replace("-"," ")}</label>
                <select value={this.props.value} onChange={(e) => this.handleChange(e)}>
                    {options}
                </select>
            </>
        );
    }
    
}

export default Selector;