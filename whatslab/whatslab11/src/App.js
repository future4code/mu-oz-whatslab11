import React from 'react';
import Mensagens from './components/mensagems/Mensagens';
import styled from 'styled-components';
import bg from './img/bg.jpeg'

const ImagemFundo = styled.div`

  width:100%;
  height:100%;
  background-image:url(${bg});
  background-repeat:no-repeat;
  background-size:cover; 


`


function App() {
  return ( 
    <ImagemFundo>
      <Mensagens/>
    </ImagemFundo> 
  )
}

export default App;
