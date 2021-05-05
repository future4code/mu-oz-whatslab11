import React from 'react';
import {
    CaixaDialogo,
    DivConteudo,
    CaixaDialogo2,
    CaixaP1,
    CaixaP2,
    Usuario1,
    Usuario2,
} from './style'

const BalaoDialogo = (props) => {

    const { todasAsMensagens, usuario } = props

    return (
        <DivConteudo>
            {todasAsMensagens.map((msg, index) => {
            {/* Fazer essa paradinha de mudar de lado dentro do styled */}
                if (usuario == msg.usuario) {
                    return (
                        <CaixaDialogo key={index}>
                            <Usuario1 >{msg.usuario}</Usuario1>
                            <CaixaP1>{msg.mensagens}</CaixaP1>
                        </CaixaDialogo>)
                } else {
                    return (
                        <CaixaDialogo2 key={index}>
                            <Usuario2 >{msg.usuario}</Usuario2>
                            <CaixaP2>{msg.mensagens}</CaixaP2>
                        </CaixaDialogo2>
                    )
                }
            })}
        </DivConteudo>
    )
}

export default BalaoDialogo