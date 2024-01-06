import styled from "styled-components";
import { device } from "../../assets/sizes";

export const CarouselBox = styled.div `
    height: 70dvh;
    img {
        height: 70dvh;
        width: auto;
        object-fit: cover;
    }
    .carousel-caption {
        position: absolute;
        right: 0;
        left: 0;
        padding: 0 15%;
        text-align: right;
        top: 20%;

        h5 {
            font-family: 'Oswald', 'Roboto', sans-serif;
            background-color: rgba(0, 0, 0, .5);
            font-size: 2rem;
            padding: 8px 16px;
            text-transform: uppercase;
            display: inline;
            line-height: 3.5rem;
            letter-spacing: 2px;
        }
        p {
            margin: 0;
        }

        @media ${device.mobileM} {
            top: 45%;
        }
    }

    .change-image-button-carousel {
        background-color: rgba(0, 0, 0, 0.6);
        padding: 10px;
    }
    
      
`