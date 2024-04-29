import styled from "styled-components";

export const CompanySide = styled.div`
  .Lets-Section {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }
  .Lets-Container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: min(570px, 100%);
    height: 570px;
    background-color: white;
    border-radius: 23px;
  }
  .Let-Menu-All-Text {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 50px;
  }
  .Lets-Menu {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }

  .Lets-TextSection {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }
  .Let-Text {
    font-size: 18px;

    font-weight: 400;
    color: #8b97a8;
  }

  .Menu-Text {
    font-size: 16px;
    font-weight: 500;
    color: #8b97a8;
    width: 300px;
  }
  .Well-Button {
    height: 45px;
    width: 170px;
    border: none;
    border-radius: 10px;
    background-color: #34a1f4;
    color: white;
    font-size: 17px;

    font-weight: 700;
  }

  .Well-Menu-Buttons {
    display: flex;
    justify-content: center;

    align-items: center;
    gap: 20px;
  }
  .Let-Button {
    height: 45px;
    width: 170px;
    border: 1px #34a1f4 solid;
    border-radius: 10px;

    color: #34a1f4;
    font-size: 17px;

    font-weight: 700;
  }
  .Sign-Form-Section {
    display: flex;
  }
  .Sign-Form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;
    width: 320px;
  }
  .NameBox {
    width: 320px;
    height: 35px;
    padding: 8px;
    font-size: 16px;
    border: 2px #e6ebf2 solid;
    outline: none;
    border-radius: 9px;
    color: #5d646e;
    cursor: pointer;
  }
  .FormBox {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    font-size: 16px;
    font-weight: 500;

    gap: 8px;
  }
  .Company-Legal-Text {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .Legal-Text {
    font-size: 16px;
    font-weight: 400;
    width: 400px;
    padding-left: 40px;
    color: #8b97a8;
  }

  @media all and (max-width: 603px) {
    .Lets-Container {
      display: flex;
      justify-content: center;
      align-items: center;
      width: min(400px, 100%);
      height: 570px;
      background-color: white;
      border-radius: 23px;
    }
    .Let-Menu-All-Text {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      gap: 50px;
    }
  }
  @media all and (max-width: 441px) {
    .Lets-Container {
      display: flex;
      justify-content: center;
      align-items: center;
      width: min(340px, 100%);
      height: 570px;
      background-color: white;
      border-radius: 23px;
    }
    .Let-Menu-All-Text {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      gap: 50px;
    }
    .Sign-Form {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 30px;
      width: 250px;
    }
    .NameBox {
      width: 230px;
      height: 35px;
      padding: 8px;
      font-size: 15px;
      border: 2px #e6ebf2 solid;
      outline: none;
      border-radius: 9px;
      color: #5d646e;
      cursor: pointer;
    }
    .FormBox {
      font-size: 15px;
    }
    .Well-Button {
      height: 45px;
      width: 120px;
      border: none;
      border-radius: 10px;
      background-color: #34a1f4;
      color: white;
      font-size: 17px;

      font-weight: 700;
    }

    .Let-Button {
      height: 45px;
      width: 120px;
      border: 1px #34a1f4 solid;
      border-radius: 10px;

      color: #34a1f4;
      font-size: 17px;

      font-weight: 700;
    }
    .Legal-Text {
      font-size: 16px;
      font-weight: 400;
      width: 200px;
      padding-left: 0px;
      color: #8b97a8;
    }
  }
  @media all and (max-width: 365px) {
    .Lets-Container {
      display: flex;
      justify-content: center;
      align-items: center;
      width: min(290px, 100%);
      height: 570px;
      background-color: white;
      border-radius: 23px;
    }
    .Let-Menu-All-Text {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      gap: 50px;
    }
    .Sign-Form {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 30px;
      width: 250px;
    }
    .NameBox {
      width: 230px;
      height: 35px;
      padding: 8px;
      font-size: 15px;
      border: 2px #e6ebf2 solid;
      outline: none;
      border-radius: 9px;
      color: #5d646e;
      cursor: pointer;
    }
    .FormBox {
      font-size: 15px;
    }
    .Well-Button {
      height: 45px;
      width: 120px;
      border: none;
      border-radius: 10px;
      background-color: #34a1f4;
      color: white;
      font-size: 17px;

      font-weight: 700;
    }

    .Let-Button {
      height: 45px;
      width: 120px;
      border: 1px #34a1f4 solid;
      border-radius: 10px;

      color: #34a1f4;
      font-size: 17px;

      font-weight: 700;
    }
    .Legal-Text {
      font-size: 16px;
      font-weight: 400;
      width: 200px;
      padding-left: 0px;
      color: #8b97a8;
    }
  }
`;
