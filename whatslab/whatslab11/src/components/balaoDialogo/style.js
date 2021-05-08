import styled from 'styled-components';

export const CaixaDialogo = styled.div`
    display:flex;
    flex-direction:column;
    flex-wrap:wrap;
    width: 370px;
    background-color:#414141;
    border-radius: 5px;
    height:auto;
    margin:14px;
    align-self:flex-end;


    animation-name: gro-dialogo-box;
    animation-duration: 1s;

    @keyframes gro-dialogo-box{
        0%{
            width: 0;
            height: 0;
            opacity: 0;
        }
    }

`
export const CaixaDialogo2 = styled.div`
    display:flex;
    flex-direction:column;
    flex-wrap:wrap;
    width: 370px;
    background-color:#414141;
    border-radius: 5px;
    height:auto;
    margin:14px;
    align-self:flex-start;

    animation-name: gro-dialogo-box-2;
    animation-duration: 1s;

    @keyframes gro-dialogo-box-2{
        0%{
            width: 0;
            height: 0;
            opacity: 0; 
        }
    }
`


export const DivConteudo = styled.div`   
   display:flex;
   justify-content:flex-end;
   align-items:flex-end;
   flex-direction:column;
   height:100%;
   width:100%;   
   overflow-y: hidden;
   overflow-x: hidden;

`
export const CaixaP1 = styled.p`
    overflow-wrap: anywhere;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.3em;
    margin-left:14px;

`
export const CaixaP2 = styled.p`
    overflow-wrap: anywhere;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.3em;
    margin-left:14px;

`

export const Usuario1 = styled.p`
    font-size: 12px;
    line-height: 24px;
    letter-spacing: 0.3em;
    padding-left:14px;

`
export const Usuario2 = styled.p`
    font-size: 12px;
    line-height: 24px;
    letter-spacing: 0.3em;
    padding-left:14px;

`

