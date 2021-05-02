import React, {useState} from 'react';
import Button from '../button/Button';
import logout from '../../img/logout1.svg'
import {
    DivMaster, 
    DivLogout, 
    DivInputMenssagem,
    DivInputUsuario,
    Logout,
} from './style';
import InputMensagens from '../inputMensagens/InputMensagens';
import BalaoDialogo from '../balaoDialogo/BalaoDialogo';


const Mensagens = () => {
    
   const [todasAsMensagens, setTodasAsMensagens] = useState([]);

   const [mensagens, setMensagens] = useState("");

   const [usuario, setUsuario] = useState("Fulano");

   const [temUsuario, setTemUsuario] = useState(false);

   function temosUmUsuario () {
    setTemUsuario(!temUsuario)
   }

   function showMessage ( ) {
     setTodasAsMensagens([...todasAsMensagens,{mensagens,usuario}])
     const limpaCampo = document.getElementsByClassName("InputMensagem") 
     limpaCampo.value=""  
   }

   function inputMensagem (send) {
    setMensagens(send.target.value)
   }

   function inputUsuario (nome) {
     setUsuario(nome.target.value)
   }

   function apertandoEnter (e) {
     if (e.key==="Enter") {
       showMessage()
     }

   }

   function apertandoEnterDoUsuario (e) {
    if (e.key==="Enter") {
      temosUmUsuario()
      
    }
  }
    

return (
  <DivMaster>

    {temUsuario ?
    <>
      <DivLogout>
          <Logout src={logout} onClick={temosUmUsuario}></Logout>
      </DivLogout>
        <BalaoDialogo todasAsMensagens= {todasAsMensagens} usuarioDoMomento={usuario} ></BalaoDialogo>
    <DivInputMenssagem>
        <InputMensagens 
        placeholder="Digite sua Mensagem"
        className="InputMensagem" 
        fnc={inputMensagem}
        pressEnter={apertandoEnter}
        />
        <Button botao="Enviar" fnc={showMessage} />
    </DivInputMenssagem>
    </> 
    :
    <DivInputUsuario>
    <InputMensagens 
    placeholder="Digite seu nome de Usuário ... " 
    fnc={inputUsuario}
    pressEnter={apertandoEnterDoUsuario}
    />
    <Button botao="Entrar" fnc={temosUmUsuario}></Button>
    </DivInputUsuario>
  
  }
</DivMaster>

  );

}

export default Mensagens