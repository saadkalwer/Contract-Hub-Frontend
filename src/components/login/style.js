import styled from "styled-components";

export const LoginSide = styled.div`
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

    gap: 35px;
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
    font-size: 17px;
    border: none;
    outline: none;
    color: #5d646e;
  }
  .FormBox {
    border: 2px #e6ebf2 solid;
    padding: 4px;
    border-radius: 9px;
    cursor: pointer;
    display: flex;
    align-items: center;
  }
  .FormIcon {
    width: 25px;
    height: 17px;
    color: #8b97a8;
  }
  .Form-Text {
    display: flex;
    flex-direction: column;
  }
  .Character-Text {
    font-size: 16px;
    color: #8b97a8;
  }
  .Privacy-Text {
    width: 391px;
    font-size: 16px;
  }
  .Sign-Button-Section {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .Sign-UP-Button {
    height: 45px;
    width: 250px;
    border: none;
    border-radius: 10px;
    background-color: #34a1f4;
    color: white;
    font-size: 17px;

    font-weight: 400;
  }

  .Log-text-Section {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .log-Text {
    color: #8b97a8;
    font-size: 17px;
  }
  .Log {
    font-size: 18px;
    padding: 4px;
    color: #34a1f4;
    font-weight: 500;
    cursor: pointer;
  }
  .EyeIcon {
    width: 25px;
    height: 17px;
    color: #8b97a8;
  }
  .Welcome-Text {
    font-size: 18px;
    color: #5d646e;
  }
  .Forget-Text-Section {
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: center;
  }
  .Forget-Text {
    font-size: 18px;
    padding: 4px;
    color: #34a1f4;
    font-weight: 500;
    cursor: pointer;
  }
  @media all and (max-width: 750px) {
    .ContactFormSide {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      width: 563px;
      gap: 35px;
    }
  }
  @media all and (max-width: 603px) {
    .ContactFormSide {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      width: 400px;
      gap: 35px;
    }
  }
  @media all and (max-width: 450px) {
    .ContactFormSide {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      width: 300px;
      gap: 10px;
    }
    .Sign-Form {
      display: flex;
      flex-direction: column;
      gap: 20px;
      width: 300px;
    }
    .NameBox {
      width: 250px;
      height: 37px;
      font-size: 17px;
      border: none;
      outline: none;
      color: #5d646e;
    }
    .FormBox {
      border: 2px #e6ebf2 solid;
      padding: 4px;
      border-radius: 9px;
      cursor: pointer;
    }

    .Form-Text {
      display: flex;
      flex-direction: column;
    }
    .Character-Text {
      font-size: 16px;
      color: #8b97a8;
    }
    .Privacy-Text {
      width: 262px;
      font-size: 16px;
    }
    .log-Text {
      color: #8b97a8;
      font-size: 16px;
    }
    .Contact {
      font-size: 26px;
    }
    .Sign-UP-Button {
      height: 45px;
      width: 200px;
      border: none;
      border-radius: 10px;
      background-color: #34a1f4;
      color: white;
      font-size: 17px;

      font-weight: 400;
    }
  }
  @media all and (max-width: 348px) {
    .ContactFormSide {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      width: 249px;
      gap: 10px;
    }
    .Sign-Form {
      display: flex;
      flex-direction: column;
      gap: 20px;
      width: 250px;
    }
    .NameBox {
      width: 200px;
      height: 37px;
      font-size: 17px;
      border: none;
      outline: none;
      color: #5d646e;
    }
    .FormBox {
      border: 2px #e6ebf2 solid;
      padding: 4px;
      border-radius: 9px;
      cursor: pointer;
    }

    .Form-Text {
      display: flex;
      flex-direction: column;
    }
    .Character-Text {
      font-size: 16px;
      color: #8b97a8;
    }
    .Privacy-Text {
      width: 262px;
      font-size: 16px;
    }
    .log-Text {
      color: #8b97a8;
      font-size: 16px;
    }
    .Contact {
      font-size: 23px;
    }
    .Sign-UP-Button {
      height: 45px;
      width: 200px;
      border: none;
      border-radius: 10px;
      background-color: #34a1f4;
      color: white;
      font-size: 17px;

      font-weight: 400;
    }
    .Forget-Text {
      font-size: 17px;
    }
  }
`;
