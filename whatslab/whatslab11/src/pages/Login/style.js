import styled from 'styled-components';


export const DivInputUsuario = styled.div`
    width: 566px;
    height: 188px;
    background: #2E2E2E;
    border-radius: 5px;
    display:flex;
    align-items:center;
    justify-content:space-evenly;
    flex-direction:column;  

    animation-name: grow ;
    animation-duration: .8s;
    animation-timing-function: cubic-bezier( 0.175, 0.885, 0.32, 1.275 );

    @keyframes grow{
        0%{
            width: 0;
            height: 0;
            opacity: 0;
        }

        100%{
            width: 566px;
            height: 188px;
            opacity: 1;
        }
    }
`

