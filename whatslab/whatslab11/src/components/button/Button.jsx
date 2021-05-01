import React from 'react';
import {Botao} from './style'

const Button = (props) => {

    return (
        <Botao onClick={props.fnc}>{props.botao}</Botao>
    )
}

export default Button