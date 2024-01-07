import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

export const colors = {
    whatsapp: '#4CC85A',
    white: '#fff',
    black: '#000',
    orangePrincipal: '#E77112', 
    orangePrincipalOpacity: 'rgba(231, 113, 18, .8)', 
    brown: '#8D5200',
    brownSecundary: '#B98746'
}

export const GlobalStyled = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: 'Roboto', sans-serif;
    }
    body {
        color: ${colors.black};
    }
    @-webkit-keyframes fadeInLeft {
        0% {
           opacity: 0;
           -webkit-transform: translateX(-300px);
        }
        100% {
           opacity: 1;
           -webkit-transform: translateX(0);
        }
    }
     
    @keyframes fadeInLeft {
        0% {
           opacity: 0;
           transform: translateX(-300px);
        }
        100% {
           opacity: 1;
           transform: translateX(0);
        }
    }
     
    .fadeInLeft {
        -webkit-animation-name: fadeInLeft;
        animation-name: fadeInLeft;
        -webkit-animation-duration: 2s;
        animation-duration: 2s;
        -webkit-animation-fill-mode: both;
        animation-fill-mode: both;
    }  

    .fadeInRight {
        -webkit-animation-name: fadeInRight;
        animation-name: fadeInRight;
        -webkit-animation-duration: 2s;
        animation-duration: 2s;
        -webkit-animation-fill-mode: both;
        animation-fill-mode: both;
    }
    @-webkit-keyframes fadeInRight {
        0% {
           opacity: 0;
           -webkit-transform: translateX(300px);
        }
        100% {
           opacity: 1;
           -webkit-transform: translateX(0);
        }
    }
     
    @keyframes fadeInRight {
        0% {
           opacity: 0;
           transform: translateX(300px);
        }
        100% {
           opacity: 1;
           transform: translateX(0);
        }
    }
    @-webkit-keyframes fadeInBottom {
        0% {
           opacity: 0;
           -webkit-transform: translateY(300px);
        }
        100% {
           opacity: 1;
           -webkit-transform: translateY(0);
        }
    }
     
    @keyframes fadeInBottom {
        0% {
           opacity: 0;
           transform: translateY(300px);
        }
        100% {
           opacity: 1;
           transform: translateY(0);
        }
    }
    .fadeInBottom {
        -webkit-animation-name: fadeInBottom;
        animation-name: fadeInBottom;
        -webkit-animation-duration: 2s;
        animation-duration: 2s;
        -webkit-animation-fill-mode: both;
        animation-fill-mode: both;
    }  
`

export const BottomHero = styled.div`
    background-color: ${colors.orangePrincipal};
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 10dvh;
    color: ${colors.black};
    h4 {
        font-family: 'Oswald', 'Roboto', sans-serif;
        font-style: italic;
        font-weight: 500;
        margin: 0;
        font-size: 1.8rem;
    }
`
export const Ambientes = styled.div`
    
`