import styled from "styled-components";

export const AuthStyle = styled.div`
  width: 100%;
  .Sign-Menu-Section {
    display: flex;
  }
  .Sign-Slider {
    display: flex;
    width: 50vw;
  }
  .Sign-Slider-menu {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }
  .Img-Container {
    display: flex;
    justify-content: flex-start;

    align-items: flex-start;
  }
  .Sign-Image1 {
    width: 100%;
  }
  .Form-Section {
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
  }

  .ContactFormSide {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding-left: 40px;
    gap: 30px;
  }
  .Sign-Form-Section {
    display: flex;
  }
  .Sign-Form {
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 370px;
  }
  .NameBox {
    width: 315px;
    height: 37px;

    border: none;
    outline: none;
  }
  .FormBox {
    border: 2px #e6ebf2 solid;
    border-radius: 9px;
    cursor: pointer;
  }
  @media all and (max-width: 750px) {
    width: 0%;
    .Sign-Menu-Section {
      display: flex;
    }
    .Sign-Slider {
      display: flex;
      width: 0vw;
    }
    .Sign-Slider-menu {
      display: flex;
      justify-content: space-evenly;
      align-items: center;
    }
    .Img-Container {
      display: flex;
      justify-content: flex-start;

      align-items: flex-start;
    }
    .Sign-Image1 {
      width: 100%;
    }
    .Form-Section {
      display: flex;
      flex: 1;
      justify-content: center;
      align-items: center;
    }

    .ContactFormSide {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      padding-left: 40px;
      gap: 30px;
    }
    .Sign-Form-Section {
      display: flex;
    }
    .Sign-Form {
      display: flex;
      flex-direction: column;
      gap: 20px;
      width: 370px;
    }
  }
`;
