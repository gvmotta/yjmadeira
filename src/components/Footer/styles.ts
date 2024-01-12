import styled from "styled-components";
import { colors } from "../../styles";

export const FooterBox = styled.footer`
    background-color: #F6F6F6;
    color: ${colors.black};
    img {
        height: auto;
        width: 100%;
        max-width: 150px;
    }
    .nav-item {
        --bs-nav-link-color: ${colors.black};
        :hover {
            text-decoration: underline;
            color: ${colors.orangePrincipal}
        }
    }
    .redes {
        a {
            display: flex;
            .svg {
                height: 100%;
                padding-top: 1px;
            }
            p {
                margin-left: 5px;
                margin-bottom: .2rem;
            }
        }
    }
`