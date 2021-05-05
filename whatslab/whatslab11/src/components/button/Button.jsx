import React from 'react';
import {Botao} from './style'

const Button = (props) => {
    const {enviarMensagem, botao} = props
    return <Botao onClick={enviarMensagem}>{botao}</Botao>
}

export default Button