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
    setTemUsuario(!temUsuario)
    if (temUsuario) setUsuario('')
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