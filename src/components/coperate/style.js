import styled from "styled-components";

export const CoperateSide = styled.div`
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
    width: min(650px, 100%);
    height: 650px;
    background-color: white;
    border-radius: 23px;
  }
  .Let-Menu-All-Text {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 20px;
  }
  .Lets-Menu {
    display: flex;
    justify-content: center;
    flex-direction: column;
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
    gap: 10px;
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

  .Legal-Text {
    font-size: 16px;
    font-weight: 400;

    width: 317px;
    color: #8b97a8;
  }
  .Corporate-Form {
    border: 2px #e6ebf2 solid;
    outline: none;
    border-radius: 9px;
    width: 250px;
    height: 25px;
    padding: 8px;
    font-size: 15px;
    color: #5d646e;
    cursor: pointer;
  }
  .Corporate-Container {
    gap: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }
  .Coperate-left-side {
    gap: 5px;
    display: flex;
    flex-direction: column;
  }
  .Coperate-right-side {
    gap: 5px;
    display: flex;
    flex-direction: column;
  }
  @media all and (max-width: 684px) {
    .Lets-Container {
      display: flex;
      justify-content: center;
      align-items: center;
      width: min(570px, 100%);
      height: 600px;
      background-color: white;
      border-radius: 23px;
    }
    .Corporate-Container {
      gap: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
    }
  }
  @media all and (max-width: 570px) {
    .Lets-Container {
      display: flex;
      justify-content: center;
      align-items: center;
      width: min(400px, 100%);
      height: 94vh;
      background-color: white;
      border-radius: 23px;
    }
    .Corporate-Container {
      gap: 5px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .Corporate-Form {
      border: 2px #e6ebf2 solid;
      outline: none;
      border-radius: 9px;
      padding: 1px;
      width: 120px;
      height: 25px;
      padding: 8px;
      font-size: 14px;
      color: #5d646e;
      cursor: pointer;
    }
    .Coperate-left-side {
      gap: 9px;
      display: flex;
      flex-direction: column;
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

    .Coperate-right-side {
      gap: 9px;
      display: flex;
      flex-direction: column;
    }
  }
  @media all and (max-width: 400px) {
    .Lets-Container {
      display: flex;
      justify-content: center;
      align-items: center;
      width: min(310px, 100%);
      height: 100vh;
      background-color: white;
      border-radius: 23px;
    }
    .Corporate-Container {
      gap: 5px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .Corporate-Form {
      border: 2px #e6ebf2 solid;
      outline: none;
      border-radius: 9px;
      padding: 1px;
      width: 110px;
      height: 25px;
      padding: 8px;
      font-size: 14px;
      color: #5d646e;
      cursor: pointer;
    }
    .Coperate-left-side {
      gap: 9px;
      display: flex;
      flex-direction: column;
    }
    .Well-Button {
      height: 45px;
      width: 110px;
      border: none;
      border-radius: 10px;
      background-color: #34a1f4;
      color: white;
      font-size: 17px;

      font-weight: 700;
    }
    .Let-Button {
      height: 45px;
      width: 110px;
      border: 1px #34a1f4 solid;
      border-radius: 10px;

      color: #34a1f4;
      font-size: 17px;

      font-weight: 700;
    }

    .Coperate-right-side {
      gap: 9px;
      display: flex;
      flex-direction: column;
    }
    .Legal-Text {
      font-size: 16px;
      font-weight: 400;

      width: 213px;
      color: #8b97a8;
    }
  }
`;
