import styled from "styled-components";

export const InputMensagensUsuario = styled.input`
font-family: Roboto Mono;
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 24px;
letter-spacing: 0.3em;
color: #3ADFCE;
width:70%;
height:60px;
border:none;
background-color:transparent;
outline:none;

animation-name: grow-input;
animation-duration: 1s;
animation-timing-function: cubic-bezier( 0.175, 0.885, 0.32, 1.275 );


@keyframes grow-input{
    0%{
        font-size: 0;
        width:0;
        height:0;
        opacity:0;
    }

    100%{
        opacity: 1;
    }
}
`
