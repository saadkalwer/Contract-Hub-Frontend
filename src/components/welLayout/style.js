import styled from "styled-components";
import bgImage from "../../image/background.jpg"; // Import the image

export const WelStyle = styled.div`
  height: 100%;
  .Well-Menu-Section {
    background: url(${bgImage});
    background-size: cover;
    background-position: center;
    display: flex;

    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 100vh;
  }
`;
