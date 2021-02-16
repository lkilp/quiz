import React from 'react';
import './Button.scss';

const Button = (props) => {
    return (
        <button className="Button" onClick={props.onClick}>
            <span>{props.title}</span>
        </button>
    )
}

export default Button;