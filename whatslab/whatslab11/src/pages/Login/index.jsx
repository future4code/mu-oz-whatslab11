import React from 'react'

import{
    DivInputUsuario
} from './style'

import InputMensagens from '../../components/inputMensagens/InputMensagens'
import Button from '../../components/button/Button'

const Login = (props) => {

    const {
        pressEnter,
        functionParaOInput,
        valueInput,
        enviarMensagem
    } = props

    return (
        <DivInputUsuario>
            <InputMensagens
                placeholder="Digite seu nome de Usuário ... "
                pressEnter={pressEnter}
                functionParaOInput={functionParaOInput}
                valueInput={valueInput}
            />
            <Button botao="Entrar" enviarMensagem={enviarMensagem}></Button>
        </DivInputUsuario>
    )
}

export default Login