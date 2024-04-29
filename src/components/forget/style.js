import styled from "styled-components";

export const ForgetSide = styled.div`
  .ContactFormSide {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    gap: 35px;
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
    padding: 2px;
  }

  .Sign-Button-Section {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .Back-to-sign {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 30px;
  }
  .Back-Sign {
    font-size: 18px;
    padding: 4px;
    color: #34a1f4;
    font-weight: 500;
    cursor: pointer;
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
  .Welcome-Section {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .Link-Text {
    font-size: 18px;
    width: 450px;
    color: #5d646e;
  }
  @media all and (max-width: 750px) {
    .ContactFormSide {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      width: 500px;
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
  @media all and (max-width: 467px) {
    .ContactFormSide {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      width: 300px;
      gap: 30px;
    }
    .Link-Text {
      font-size: 18px;
      width: 311px;
      color: #5d646e;
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
      margin-left: 30px;
      width: 283px;
    }
  }
  @media all and (max-width: 375px) {
    .ContactFormSide {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      width: 220px;
      gap: 30px;
    }
    .Contact {
      font-size: 23px;
    }
    .Link-Text {
      font-size: 18px;
      width: 230px;
      color: #5d646e;
    }
    .NameBox {
      width: 220px;
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

      width: 240px;
    }
    .log-Text {
      color: #8b97a8;
      font-size: 15px;
    }
    .Log {
      font-size: 16px;
      padding: 4px;
      color: #34a1f4;
      font-weight: 500;
      cursor: pointer;
    }
    .Sign-Form {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 20px;
      width: 260px;
    }
    .Sign-UP-Button {
      height: 45px;
      width: 150px;
      border: none;
      border-radius: 10px;
      background-color: #34a1f4;
      color: white;
      font-size: 17px;

      font-weight: 400;
    }
  }
`;
