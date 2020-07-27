import React from 'react';
import '../styles/Button.css';

class Button extends React.Component {
    handleClick() {
        this.props.onClick();
    }

    render() {
        return(
            <>
                <button type="button" className="button" onClick={() => this.handleClick()}><span class="button-text">{this.props.text}</span></button>
            </>            
        )
    }
}

export default Button;