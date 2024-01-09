import styled from "styled-components";
import { device } from "../../assets/sizes";
import { colors } from "../../styles";
import { ICarouselStyled } from "./types";

export const CarouselBox = styled.div`
    width: 100%;
    height: 70dvh;
    position: relative;
    img {
        width: 100%;
        height: 70dvh;
        object-fit: cover;
    }
    .slick-prev {
        left: 0;
        margin-left: 10px;
        z-index: 1;
    }
    .slick-next {
        right: 0;
        margin-right: 10px;
        z-index: 1;
    }
    .slick-arrow {
        height: 30px;
        width: 30px;
    }
    .slick-prev:before, .slick-next:before {
        font-size: 30px;
        color: rgba(255, 255, 255, 0.9);
    }
    .slick-dots {
        bottom: 0;
        margin-bottom: 10px;
        li.slick-active button:before, li button:before {
            color: ${colors.white};
        }
    }
    .text-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        position: absolute;
        bottom: 28%;
        width: 100dvw;
    }
    .vertical {
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 100dvw;
        text-align: center;
    }
    .bottomCarousel {
        width: 20dvw;
        min-width: 130px;
        display: flex;
        margin: 0 auto;
        justify-content: center;
        background-color: ${colors.orangePrincipal};
        color: ${colors.white};
        padding: 5px 0;
        font-size: 1.5rem;
        border: none;
        opacity: 50%;
    }
    .fadeInLeftText,
    .fadeInRightText {
        font-family: 'Oswald', 'Roboto', sans-serif;
        margin: 0 10px;
    }
    .fadeInLeftText {
        background-color: rgba(0, 0, 0, 0.8);
        padding: 5px 20px;
        font-size: 2.5rem;
        color: ${colors.white};
    }
    .fadeInRightText {
        display: flex;
        align-items: center;
        color: ${colors.white};
        font-weight: 400;   
        font-size: 1rem;    
    }
    .column {
        padding: 5px 0px;
    }
    .fadeInBottomText {
        text-transform: uppercase;
        background-color: rgba(0, 0, 0, 0.8);
        color: ${colors.white};
        padding: 0px 10px;
        font-size: 3.5rem;
        text-align: center;
        font-weight: 300;
        margin: 0 auto 20px;
        border-radius: 15px 15px 15px 0;
    }
    @media (max-width: 595px) {
        .fadeInBottomText {
            font-size: 2rem;
        }
        .fadeInLeftText {
            padding: 5px 10px;
            font-size: 2rem;
        }
    }
    @media (max-width: 377px) {
        .fadeInBottomText {
            font-size: 1.5rem;
        }
        .fadeInLeftText {
            padding: 5px 10px;
            font-size: 1.5rem;
        }
        .fadeInRightText {
            font-size: 0.8rem;
        }
    }
`