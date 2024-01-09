import styled from "styled-components";
import { colors } from "../../styles";
import { device } from "../../assets/sizes";

export const Sobre = styled.div`
    .row {
        margin: 0;
    }
    .texto {
        margin-bottom: 14px;
        @media ${device.tablet} {
            margin-bottom: 0;
        }
        h4 {
            font-family: 'Open Sans', 'Roboto', sans-serif;
            font-size: 30px;
            font-weight: 400;
            color: ${colors.brown};
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
    .imgCarousel {
        width: 100%;
        height: 300px;
        object-fit: cover;
    }
    #carousel {
        padding-top: 0;
        @media (max-width: 767px){
            margin-bottom: 3rem;
        }
        @media ${device.tablet} {
            padding-top: 4rem;
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
    .slick-dots {
        position: absolute;
        bottom: -50px;
    }
    .slick-dots li {
        width: auto;
    }
    .slick-dots img {
        width: auto;
        height: 50px;
    }
`