import styled from "styled-components";
import { colors } from "../../styles";
import { device } from "../../assets/sizes";

export const Sobre = styled.div`
    padding: 26px 0;
    .row {
        margin: 0;
    }
    .texto {
        margin-bottom: 14px;
        @media ${device.tablet} {
            margin-bottom: 0;
        }
        h6 {
            font-family: 'Open Sans', 'Roboto', sans-serif;
            font-size: 20px;
            font-weight: 400;
            color: ${colors.brown};
        }
        button {
            padding: 10px 20px;
            background-color: ${colors.orangePrincipal};
            color: ${colors.white};
            border: none;
            border-radius: 2px;
            font-weight: 400;
        }
    }
    .foto {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    img {
        width: 100%;
        height: 300px;
        object-fit: cover;
    }
    #carousel {
        padding-top: 0;
        
        @media ${device.tablet} {
            padding-top: 4rem;
        }
        .slick-slider {
            
        }
        button::before {
            color: ${colors.black};
        }
        .slick-dots {
            
        }
        .slick-prev {
            left: 25px;
            z-index: 1;
        }
        .slick-next {
            right: 25px;
        }
        
    }
`