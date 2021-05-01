import React, {useState} from 'react';
import Button from '../button/Button';
import logout from '../../img/logout1.svg'
import {
    DivMaster, 
    DivLogout, 
    DivConteudo,
    DivInputMenssagem,
} from './style';
import InputMensagens from '../inputMensagens/InputMensagens';


const Mensagens = () => {
    
   const [todasAsMensagens, setTodasAsMensagens] = useState([]);

   const [mensagens, setMensagens] = useState("");

   const [usuario, setUsuario] = useState("Fulano");

   function showMessage ( ) {
     setTodasAsMensagens([...todasAsMensagens,{mensagens,usuario}])    
   }

   function inputMensagem (send) {
    setMensagens(send.target.value)
   }

   function inputUsuario (nome) {
     setUsuario(nome.target.value)
   }

return (
  <DivMaster>
      <DivLogout>
          <img src={logout}></img>
      </DivLogout>
    <DivConteudo>  
        {todasAsMensagens.map((msg, index)=>{
        return ( 
           
            <div key={index}>
                <p >{msg.mensagens}</p>
                        
                <p >{msg.usuario}</p>
            </div>
        

        )
        })}
    </DivConteudo>
    <DivInputMenssagem>
        {/* <input type="text" onChange={inputMensagem} ></input>  */}
        <InputMensagens placeholder="Digite sua Mensagem" fnc={inputMensagem}></InputMensagens>
        <Button botao="Enviar" fnc={showMessage} />
    </DivInputMenssagem>
    
  </DivMaster>


  );

}

export default Mensagens