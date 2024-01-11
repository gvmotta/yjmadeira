import styled from "styled-components";
import { colors } from "../../styles";

export const AvaliacoesContainer = styled.div`
    background-color: ${colors.orangePrincipal};
    .slick-list {
        margin: 0 3rem;
    }
    .slick-prev {
        left: 20px;
    }
    .slick-next {
        right: 20px;
    }
    .texto {
        padding: 0 2rem 2rem;
    }  
    .slider {
        .cardContainer {
            box-shadow: 0px 15px 20px rgba(0, 0, 0, 0.2);
            background-color: #F6F6F6;
            border-radius: 20px;
            margin: 1rem;
            padding: 1rem 2rem;
            
            .person {
                display: flex;
                flex-direction: row;
                img {
                    height: 50px;
                    width: auto;
                    object-fit: cover;
                    border-radius: 50%;
                }
                .text {
                    padding-left: 5px;
                    p {
                        margin: 0;
                        padding: 0;
                    }
                }
            }
        }
    } 
`