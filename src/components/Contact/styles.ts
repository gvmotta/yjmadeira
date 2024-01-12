import styled from "styled-components";
import background from '../../assets/img/background-contact1.jpg';
import { colors } from "../../styles";

export const FormContainer = styled.div`
    background-image: url(${background});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    .background {
        padding: 1rem 1rem;
        background-color: rgba(255, 255, 255, 0.7);
        border-radius: 10px;
        font-family: 'Open Sans', 'Roboto', sans-serif;
        p {
            margin-bottom: 0.25rem;
        }
        h3 {
            font-weight: 400;
            font-family: 'Montserrat', 'Open Sans', sans-serif;
            margin-bottom: .75rem;
            span {
                font-weight: 600;
            }
        }
        a {
            text-decoration: none;
            color: ${colors.orangePrincipal};
        }
    }
    form {
        label {
            color: ${colors.white};
        }
        label, span {
            display: block;
        }
        input, textarea {
            min-width: 500px;
            background-color: rgba(255, 255, 255, 0.7);   
            padding: 10px 15px;    
        }
        input:focus, textarea:focus {
            outline: none;
        }
        input::placeholder, textarea::placeholder {
            font-size: 0.9rem;
            color: ${colors.black};
        }
        input[type="submit"] {
            opacity: 0.9;
            border: none;
            background-color: ${colors.orangePrincipal};
            color: ${colors.white};
            font-family: 'Oswald', 'Open Sans', 'Roboto', sans-serif;
            text-transform: uppercase;
            letter-spacing: 2px;
            padding: 15px;
            margin-top: .5rem;
        }
            input[type="submit"]:hover {
                background-color: ${colors.white};
                color: ${colors.orangePrincipal};
                transition: background-color .2s ease-in-out;
            }
    }
`