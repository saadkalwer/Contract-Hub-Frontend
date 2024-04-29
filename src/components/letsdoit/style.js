import styled from "styled-components";

export const LetsSide = styled.div`
  .Lets-Section {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .Lets-Container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 36%;
    height: 550px;
    background-color: white;
    border-radius: 20px;
  }
  .Let-Menu-All-Text {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 30px;
  }
  .Lets-Menu {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    gap: 5px;
  }
  .Well-Title {
    font-size: 20px;
    font-weight: 700;
  }
  .Lets-TextSection {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .Let-Text {
    font-size: 18px;

    font-weight: 400;
    color: #8b97a8;
  }
  .Street-Address-Box {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    gap: 5px;
  }
  .Menu-Text {
    font-size: 16px;
    font-weight: 500;
    color: #8b97a8;
    width: 300px;
  }
  .Well-Button {
    height: 45px;
    width: 150px;
    border: none;
    border-radius: 10px;
    background-color: #34a1f4;
    color: white;
    font-size: 17px;

    font-weight: 700;
  }
  .NameBox {
    width: 360px;

    height: 37px;
    font-size: 16px;
    border: none;
    outline: none;
    color: #5d646e;
  }
  .FormBox {
    margin-bottom: 10px;
    border: 2px #e6ebf2 solid;
    padding: 4px;
    border-radius: 9px;
    cursor: pointer;
  }

  .City-Adress {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }
  .City-State-Box {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }

  .addressBox {
    width: 160px;

    height: 37px;
    font-size: 16px;
    border: none;
    outline: none;
    color: #5d646e;
  }
  .Well-Menu-Buttons {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }
  .Let-Button {
    height: 45px;
    width: 150px;
    border: 1px #34a1f4 solid;
    border-radius: 10px;

    color: #34a1f4;
    font-size: 17px;

    font-weight: 700;
  }

  @media all and (max-width: 1115px) {
    .Lets-Section {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .Lets-Container {
      display: flex;
      justify-content: center;
      align-items: center;
      width: min(550px, 100%);
      height: 550px;
      background-color: white;
      border-radius: 20px;
    }
    .Let-Menu-All-Text {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      gap: 30px;
    }
    .Lets-Menu {
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      gap: 5px;
    }
    .Well-Title {
      font-size: 20px;
      font-weight: 700;
    }

    .Well-Button {
      height: 45px;
      width: 150px;
      border: none;
      border-radius: 10px;
      background-color: #34a1f4;
      color: white;
      font-size: 17px;

      font-weight: 700;
    }
    .NameBox {
      width: 250px;

      height: 37px;
      font-size: 16px;
      border: none;
      outline: none;
      color: #5d646e;
    }

    .addressBox {
      width: 110px;

      height: 37px;
      font-size: 16px;
      border: none;
      outline: none;
      color: #5d646e;
    }

    .Let-Button {
      height: 45px;
      width: 150px;
      border: 1px #34a1f4 solid;
      border-radius: 10px;

      color: #34a1f4;
      font-size: 17px;

      font-weight: 700;
    }
  }
  @media all and (max-width: 564px) {
    .Lets-Section {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .Lets-Container {
      display: flex;
      justify-content: center;
      align-items: center;
      width: min(450px, 100%);
      height: 550px;
      background-color: white;
      border-radius: 20px;
    }
    .Let-Menu-All-Text {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      gap: 30px;
    }
    .Lets-Menu {
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      gap: 5px;
    }
    .Well-Title {
      font-size: 20px;
      font-weight: 700;
    }

    .Well-Button {
      height: 45px;
      width: 150px;
      border: none;
      border-radius: 10px;
      background-color: #34a1f4;
      color: white;
      font-size: 17px;

      font-weight: 700;
    }
    .NameBox {
      width: 250px;

      height: 37px;
      font-size: 16px;
      border: none;
      outline: none;
      color: #5d646e;
    }

    .City-Adress {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
    }

    .addressBox {
      width: 110px;

      height: 37px;
      font-size: 16px;
      border: none;
      outline: none;
      color: #5d646e;
    }

    .Let-Button {
      height: 45px;
      width: 150px;
      border: 1px #34a1f4 solid;
      border-radius: 10px;

      color: #34a1f4;
      font-size: 17px;

      font-weight: 700;
    }
  }
  @media all and (max-width: 460px) {
    .Lets-Section {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .Lets-Container {
      display: flex;
      justify-content: center;
      align-items: center;
      width: min(350px, 100%);
      height: 550px;
      background-color: white;
      border-radius: 20px;
    }
    .Let-Menu-All-Text {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      gap: 10px;
    }
    .Lets-Menu {
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      gap: 5px;
    }
    .Well-Title {
      font-size: 20px;
      font-weight: 700;
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
    .NameBox {
      width: 250px;

      height: 37px;
      font-size: 16px;
      border: none;
      outline: none;
      color: #5d646e;
    }

    .City-Adress {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
    }

    .addressBox {
      width: 110px;

      height: 37px;
      font-size: 16px;
      border: none;
      outline: none;
      color: #5d646e;
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
    .Let-Text {
      font-size: 18px;
      width: 181px;
      font-weight: 400;
      color: #8b97a8;
    }
  }
  @media all and (max-width: 360px) {
    .Lets-Section {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .Lets-Container {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      width: min(295px, 100%);
      height: 550px;
      background-color: white;
      border-radius: 10px;
    }
    .Let-Menu-All-Text {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      gap: 10px;
    }
    .Lets-Menu {
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      gap: 5px;
    }
    .Well-Title {
      font-size: 20px;
      font-weight: 700;
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
    .NameBox {
      width: 250px;

      height: 37px;
      font-size: 16px;
      border: none;
      outline: none;
      color: #5d646e;
    }

    .City-Adress {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
    }

    .addressBox {
      width: 110px;

      height: 37px;
      font-size: 16px;
      border: none;
      outline: none;
      color: #5d646e;
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
    .Let-Text {
      font-size: 18px;
      width: 181px;
      font-weight: 400;
      color: #8b97a8;
    }
  }
`;
