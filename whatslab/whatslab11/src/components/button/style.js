import styled from 'styled-components'

export const Botao = styled.button` 
    width:131px;
    height:45px;
    background: #3ADFCE;
    border-radius: 5px;
    border:none; 
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.3em;
    color: #FEFEFE;
    cursor:pointer;
    animation-name: grow-button;
    animation-duration: .5s;
    animation-timing-function: cubic-bezier( 0.175, 0.885, 0.32, 1.275 );

    @keyframes grow-button{
        0%{
            width:0px;
            height:0px;
            opacity: 0;
            font-size: 0;
        }

        100%{
            opacity: 1;
        }
    }
 `

