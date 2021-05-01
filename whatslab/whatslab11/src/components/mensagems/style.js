import styled from 'styled-components';

const BackColor = '#292828'

const BackColor2 = '#2D2B2B'

export const DivMaster = styled.div`

    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    background-color:${BackColor};
    height:100vh;
    max-width:648px;

`

export const DivLogout = styled.div`

    display:flex;
    justify-content:flex-end;
    align-items:center;
    width:100%;
    background-color:${BackColor2};
    height:80px;


`

export const DivConteudo = styled.div`
   
   display:flex;
   justify-content:flex-end;
   align-items:center;
   flex-direction:column;
   flex-grow:1;
   height:100%;


`

export const DivInputMenssagem = styled.div`

    display:flex;
    justify-content:space-between;
    align-items:center;
    background-color:#2D2B2B;
    width:100%;
    height:80px;
    padding: 0px 14px;

`

