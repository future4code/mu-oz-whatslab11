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
    margin:0 auto;

`

export const DivLogout = styled.div`

    display:flex;
    justify-content:flex-end;
    align-items:center;
    width:100%;
    background-color:${BackColor2};
    height:80px;
`

export const Logout = styled.img`

    padding-right:14px;

`


export const DivInputMenssagem = styled.div`

    display:flex;
    justify-content:space-around;
    align-items:center;
    background-color:#2D2B2B;
    width:100%;
    max-width:648px;
    height:80px;
   

`

export const DivInputUsuario = styled.div`

    width: 566px;
    height: 188px;
    background: #2E2E2E;
    border-radius: 5px;
    display:flex;
    align-items:center;
    justify-content:space-evenly;
    flex-direction:column;
    
`

