import React, {useState} from 'react';




function App() {
  
   const [todasAsMensagens, setTodasAsMensagens] = useState([]);

   const [mensagens, setMensagens] = useState("");

   const [usuario, setUsuario] = useState("");

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
  <div>
    {todasAsMensagens.map((msg, index)=>{
      return ( 
      <div key={index}>
        <p >{msg.mensagens}</p>
                
        <p >{msg.usuario}</p>
      </div>
      )
    })}
    <input type="text" onChange={inputMensagem} ></input>
    <input type="text" onChange={inputUsuario} placeholder="Nome Usuário"></input>
    <button onClick={showMessage}>
      Click me
    </button>
  </div>

  );
}

export default App;
