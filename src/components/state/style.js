import styled from "styled-components";

export const StateSide = styled.div`
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
    width: min(530px, 100%);
    height: 500px;
    background-color: white;
    border-radius: 23px;
  }
  .Let-Menu-All-Text {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 25px;
  }
  .Lets-Menu {
    display: flex;
    justify-content: center;
    width: 400px;
    align-items: center;
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
    align-items: center;
    flex-direction: column;
    font-size: 16px;
    font-weight: 500;

    gap: 8px;
  }

  @media all and (max-width: 540px) {
    .Lets-Container {
      display: flex;
      justify-content: center;
      align-items: center;
      width: min(400px, 100%);
      height: 450px;
      background-color: white;
      border-radius: 23px;
    }
    .Well-Title {
      font-size: 18px;
    }
    .FormBox {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      flex-direction: column;
      font-size: 15px;
      font-weight: 500;
      width: 317px;
      gap: 8px;
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
  }

  @media all and (max-width: 400px) {
    .Lets-Container {
      display: flex;
      justify-content: center;
      align-items: center;
      width: min(300px, 100%);
      height: 450px;
      background-color: white;
      border-radius: 23px;
    }
    .Well-Title {
      font-size: 18px;
    }
    .Lets-Menu {
      display: flex;
      justify-content: center;
      width: 219px;
      align-items: center;
    }

    .FormBox {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      flex-direction: column;
      font-size: 15px;
      font-weight: 500;
      width: 224px;
      gap: 8px;
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
      width: 200px;
      height: 35px;
      padding: 8px;
      font-size: 16px;
      border: 2px #e6ebf2 solid;
      outline: none;
      border-radius: 9px;
      color: #5d646e;
      cursor: pointer;
    }
  }
`;
