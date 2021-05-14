import React from 'react'

import Button from '../../components/button/Button'
import BalaoDialogo from '../../components/balaoDialogo/BalaoDialogo'
import InputMensagens from '../../components/inputMensagens/InputMensagens'

import {
    DivLogout,
    Logout,
    DivInputMenssagem,

} from './style'

import logout from '../../img/logout1.svg'

const LoginPage = (props) => {

    const {
        logarEDeslogarUsuario,
        todasAsMensagens,
        functionParaOInput,
        pressEnter,
        enviarMensagem,
        valueInput,
        usuario,
        deletarMensagem
    } = props

    return (
        <>
            <DivLogout>
                <Logout src={logout} onClick={logarEDeslogarUsuario}></Logout>
            </DivLogout>
            <BalaoDialogo 
                todasAsMensagens={todasAsMensagens}     
                usuario={usuario} 
                deletarMensagem={deletarMensagem}
            />
            <DivInputMenssagem>
                <InputMensagens
                    placeholder="Digite sua Mensagem"
                    className="InputMensagem"
                    functionParaOInput={functionParaOInput}
                    pressEnter={pressEnter}
                    enviarMensagem={enviarMensagem}
                    valueInput={valueInput}
                />
                <Button botao="Enviar" enviarMensagem={enviarMensagem} />
            </DivInputMenssagem>
        </>
    )
}

export default LoginPage