import React, { useState } from 'react';

import MensagemPage from '../../pages/MensagemPage'
import Login from '../../pages/Login';

import { DivMaster } from './style';

const Mensagens = () => {

  const [todasAsMensagens, setTodasAsMensagens] = useState([]);
  const [mensagens, setMensagens] = useState("");
  const [usuario, setUsuario] = useState("");
  const [temUsuario, setTemUsuario] = useState(false);

  // --------------------------------------------------------------
  // Salvar o estado das mensagens e do usuario
  // --------------------------------------------------------------
  const inputMensagem = (e) => setMensagens(e.target.value)
  const inputUsuario = (e) => setUsuario(e.target.value)
  // --------------------------------------------------------------


  // -----------------------------------------------------------------
  // Mudar o estado do usuario. se for true aparece um
  // Componente, se for falso aparece outro
  // -----------------------------------------------------------------
  const logarEDeslogarUsuario = () => {
    if(usuario.length >= 2){
      setTemUsuario(!temUsuario)
      if (temUsuario) setUsuario('')
    }else{
      alert('Por Favor digite 2 ou mais digitos como nome de usuario')
    }
  }
  // -----------------------------------------------------------------


  // -------------------------------------------------------------------
  // Pergar todas as mensagens do array, e adcionar mais
  // Uma e limpar o campo do input
  // -------------------------------------------------------------------
  const showMessage = () => {
    setTodasAsMensagens([...todasAsMensagens, { mensagens, usuario }])
    setMensagens('')
  }
  // -------------------------------------------------------------------


  // -------------------------------------------------------------------
  // Chamar uma função ao apertar enter
  // -------------------------------------------------------------------
  const apertandoEnter = (e) => {
    if (e.key === "Enter") showMessage()
  }

  const apertandoEnterDoUsuario = (e) => {
    if (e.key === "Enter") logarEDeslogarUsuario()
  }
  // -------------------------------------------------------------------

  // -------------------------------------------------------------------
  // Deletar Mensagem
  // -------------------------------------------------------------------
  const deletarMensagem = (dadosDaMensagem) => {
    if (window.confirm("Tem certeza que deseja Apagar esta mensagem")) {
      console.log(dadosDaMensagem)
      let copiaDoArray = todasAsMensagens.filter((item, index) => {
        if (index !== dadosDaMensagem) return true
      })
      setTodasAsMensagens([...copiaDoArray])
    }
  }
  // -------------------------------------------------------------------


  return (
    <DivMaster>

      {temUsuario ?

        <MensagemPage
          logarEDeslogarUsuario={logarEDeslogarUsuario}
          todasAsMensagens={todasAsMensagens}
          usuarioDoMomento={usuario} //Mudar isso aqui depois
          functionParaOInput={inputMensagem}
          pressEnter={apertandoEnter}
          enviarMensagem={showMessage}
          valueInput={mensagens}
          usuario={usuario}
          deletarMensagem={deletarMensagem}
        />


        :

        <Login
          pressEnter={apertandoEnterDoUsuario}
          functionParaOInput={inputUsuario}
          valueInput={usuario}
          enviarMensagem={logarEDeslogarUsuario}
        />
      }
    </DivMaster>
  );
}

export default Mensagens