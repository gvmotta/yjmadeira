import styled from "styled-components";

export const Qualidade = styled.div`
    img {
        width: 100%;
        height: 150px;
        object-fit: cover;
    }
    .slick-next:before {
        content: '';
    }
    .slick-arrow {
        display: none!important;
    }
    .slick-dots {
        display: none!important;
    }
`