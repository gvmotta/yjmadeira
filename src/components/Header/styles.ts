import styled from "styled-components";
import { colors } from "../../styles";
import { device } from "../../assets/sizes";
export const Header = styled.header`
    .upper {
        background: ${colors.orangePrincipal};
        display: flex;
        justify-content: space-around;
        flex-direction: column;
        padding: 5px 0;
        font-size: 12px;
        font-weight: 600;
        color: ${colors.white};
        height: 8dvh;
        p {
            margin: 0;
        }

        .contact {
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .icon {
            font-size: 1.3rem;
            margin-right: 6px;
        }

        .whatsapp {
            display: flex;
            color: ${colors.whatsapp};
            flex-direction: row;
            align-items: center;
        }

        @media ${device.mobileL} {
            flex-direction: row;
            height: 5dvh;
        }
    }

    .bottom {
        background: ${colors.white};
        color: ${colors.black};
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        
        .logo {
            margin-left: 10px;
            img {
                height: 56px;
            }
        }
        nav {
            padding: 0.2rem 0;
            display: flex;
            ul {
                display: flex;
                justify-content: center;
                margin-bottom: 0;
                margin-right: 10px;
                li {
                    text-decoration: none;
                    list-style: none;
                    margin: 0 10px;
                }
            }
        }
    }

    
`