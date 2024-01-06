import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

export const colors = {
    whatsapp: '#4CC85A',
    white: '#fff',
    black: '#000',
    orangePrincipal: '#E77112',
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
    background: src(./)
    
`