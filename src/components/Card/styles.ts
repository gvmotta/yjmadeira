import styled from "styled-components"
import { colors } from "../../styles"
export const CardContainer = styled.div`
    box-shadow: 0px 0px 40px 25px rgba(0,0,0,0.1);
    height: 100%;
    border-radius: 4px;
    .icon svg {
        height: 15%;
        width: 15%;
        color: ${colors.brownSecundary};
        display: block;
        margin: 10px auto;
        padding-top: 10px;
    }
    
    .card-text {
        text-align: center;

        h5 {
            color: ${colors.brownSecundary};
        }
        p {
            font-weight: 300;
            margin: 0;
        }
    }

`
