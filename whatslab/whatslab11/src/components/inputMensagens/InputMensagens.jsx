import React, {useState} from 'react'
import {InputMensagensUsuario} from './style'


const InputMensagens = (props) => {

    return (
        <InputMensagensUsuario placeholder={props.placeholder} type="text" onChange={props.fnc} ></InputMensagensUsuario>
    )
}

export default InputMensagens