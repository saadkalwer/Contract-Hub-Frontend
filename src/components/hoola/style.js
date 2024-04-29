import styled from "styled-components";

export const ImageSide = styled.div`
  margin-top: 10%;

  .Image-Menu-Section {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;

    .Image-menu {
      width: 100px;
      opacity: 20%;
    }
    .Image-1 {
      width: 150px;
      opacity: 20%;
    }
  }
  @media all and (max-width: 960px) {
    .Image-menu {
      width: 90px !important;
      opacity: 20%;
    }
    .Image-1 {
      width: 130px !important;
      opacity: 20%;
    }
  }
  @media all and (max-width: 700px) {
    .Image-menu {
      width: 70px !important;
      opacity: 20%;
    }
    .Image-1 {
      width: 100px !important;
      opacity: 20%;
    }
  }
  @media all and (max-width: 430px) {
    .Image-Menu-Section {
      display: flex !important;
      flex-direction: column !important;

      gap: 38px !important;
    }
    .Image-menu {
      width: 70px !important;
      opacity: 20%;
    }
    .Image-1 {
      width: 100px !important;
      opacity: 20%;
    }
  }
`;
