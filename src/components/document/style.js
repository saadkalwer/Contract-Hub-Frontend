import styled from "styled-components";

export const DocumentSide = styled.div`
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
    width: min(450px, 100%);
    height: 570px;
    background-color: white;
    border-radius: 23px;
  }
  .Let-Menu-All-Text {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .Lets-Menu {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
  .Well-Title {
    font-size: 22px;
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

  .Menu-Text {
    font-size: 16px;
    font-weight: 500;
    color: #8b97a8;
    width: 300px;
  }
  .Well-Button {
    height: 45px;
    width: 340px;
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
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }
  .Let-Button {
    height: 45px;
    width: 340px;
    border: 1px #34a1f4 solid;
    border-radius: 10px;

    color: #34a1f4;
    font-size: 17px;

    font-weight: 700;
  }
  .Document-Template-Section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .Document-Template-Container {
    justify-content: center;
    display: flex;
    flex-direction: column;
    width: 70%;

    align-items: center;
  }
  .Document-Company-Text {
    font-size: 16px;

    font-weight: 500;
    color: #262626;
  }
  .Document-Text {
    font-size: 17px;
    font-weight: 500;
    color: #262626;
  }
  .Document {
    display: flex;
    flex-direction: column;
    gap: 13px;
  }

  @media all and (max-width: 461px) {
    .Lets-Container {
      display: flex;
      justify-content: center;
      align-items: center;
      width: min(370px, 100%);
      height: 570px;
      background-color: white;
      border-radius: 23px;
    }
    .Well-Button {
      height: 45px;
      width: 200px;
      border: none;
      border-radius: 10px;
      background-color: #34a1f4;
      color: white;
      font-size: 17px;

      font-weight: 700;
    }
    .Let-Button {
      height: 45px;
      width: 200px;
      border: 1px #34a1f4 solid;
      border-radius: 10px;

      color: #34a1f4;
      font-size: 16px;

      font-weight: 700;
    }
  }
  @media all and (max-width: 385px) {
    .Lets-Container {
      display: flex;
      justify-content: center;
      align-items: center;
      width: min(300px, 100%);
      height: 600px;
      background-color: white;
      border-radius: 18px;
    }
    .Well-Button {
      height: 45px;
      width: 200px;
      border: none;
      border-radius: 10px;
      background-color: #34a1f4;
      color: white;
      font-size: 17px;

      font-weight: 700;
    }
    .Let-Button {
      height: 45px;
      width: 200px;
      border: 1px #34a1f4 solid;
      border-radius: 10px;

      color: #34a1f4;
      font-size: 16px;

      font-weight: 700;
    }
    .Let-Text {
      font-size: 18px;
      width: 136px;
      font-weight: 400;
      color: #8b97a8;
    }

    .Document {
      display: flex;
      flex-direction: column;
      gap: 4px;
    }
  }
`;
