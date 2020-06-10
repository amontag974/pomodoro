import React from 'react';
import '../styles/Button.css';

class Button extends React.Component {
    handleClick() {
        this.props.onClick();
    }

    render() {
        return(
            <div className='button-container'>
                <button className='button' onClick={() => this.handleClick()}>{this.props.text}</button>
            </div>            
        )
    }
}

export default Button;