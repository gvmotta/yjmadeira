import styled from "styled-components";
import { colors } from "../../styles";

export const AvaliacoesContainer = styled.div`
background-color: ${colors.orangePrincipal};
.row {
    --bs-gutter-x: 0;
}     
    .texto {
        padding-bottom: 2rem;
    }  
    .slider {
        .cardContainer {
            background-color: #F6F6F6;
            margin: 0 1rem;
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