import styled from "styled-components";
import { colors } from "../../styles";

export const CardContainer = styled.div`
  box-shadow: 0px 0px 40px 25px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  position: relative;
  .cards {
}
img {
    height: auto;
    height: 200px;
    width: 100%;
    object-fit: cover;
  }

  :hover {
    img {
      filter: brightness(50%);
      transition: filter 0.5s ease-in-out;
    }
    cursor: pointer;

    .content {
      display: block;
      animation: slide-down 0.5s ease-in-out;
      pointer-events: none;
      color: ${colors.white};
      top: calc(50% - 24px);

      svg {
        background-color: ${colors.white};
        color: ${colors.black};
        padding: 7px;
        border-radius: 50%;
        cursor: pointer;
      }
    }
}

@keyframes slide-down {
    from {
        opacity: 0;
        transform: translateY(-50%); /* Adjust starting position as needed */
    }
    to {
        opacity: 100%;
        transform: translateY(0%);
    }
}

.content {
    height: 100%;
    width: 100%;
    display: none;
    position: absolute;
    top: 0;
    margin-bottom: 0;
    text-align: center;
  }
  
  
`;
