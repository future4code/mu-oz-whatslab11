import React from 'react'
import { InputMensagensUsuario } from './style'


const InputMensagens = (props) => {

    const {
        placeholder,
        pressEnter,
        functionParaOInput,
        valueInput
    } = props

    return (
        <InputMensagensUsuario
            placeholder={placeholder}
            type="text"
            onChange={functionParaOInput}
            onKeyDown={pressEnter}
            value={valueInput}
        />
    )
}

export default InputMensagens