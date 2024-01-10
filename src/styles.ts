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
        20% {
            opacity: 0;
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
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px 3rem;
    height: 8dvh;
    color: ${colors.black};
    background-color: ${colors.orangePrincipal};

    h4 {
        font-family: 'Oswald', 'Roboto', sans-serif;
        font-style: italic;
        font-weight: 500;
        margin: 0;
        font-size: 1.8rem;
    }
`

export const CardContainer = styled.div`
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px 1rem;
    font-family: 'Open Sans', 'Roboto', sans-serif;
    color: ${colors.black};

    .row {
        display: flex;
        justify-content: center;
        align-items: stretch;
        div {
            display: flex;
            flex-grow: 1;
        }
    }
    .card {
        background-color: #FAFAFA;
        padding: 40px 20px;
        border-radius: 20px;
        text-align: start;
        height: 100%;
        border: none;
        max-width: 350px;
        margin: 0 20px 20px;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        h5 {
            color: ${colors.orangePrincipal};
            font-weight: bold;
            font-size: 1.5rem;
        }
        p {
            color: ${colors.black};
            font-size: 1.2rem;
            margin-bottom: 0;
        }
    }
    h3 {
        color: ${colors.orangePrincipal};
    }
`

export const Ambientes = styled.div`
    
`

export const Qualidades = styled.div`
    background-color: ${colors.orangePrincipal};
    color: ${colors.white};
    text-align: center;
    font-size: 1.1rem;
    .row {
        padding: 50px 30px 20px;
        --bs-gutter-x: 0;
    }
    hr {
        color: ${colors.white};
        opacity: 0.5;
        max-width: 400px;
        margin: 1rem auto;
    }
    p {
        padding: 0 1rem;
    }
`