import styled from "styled-components";

export const WellStyle = styled.div`
  .Welcome-Section {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .Welcome-Container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: min(400px, 1000px);
    height: 350px;
    background-color: white;
    border-radius: 20px;
  }
  .Well-Menu-All-Text {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 30px;
  }
  .Well-Menu {
    display: flex;

    align-items: center;
  }
  .Well-Title {
    font-size: 20px;
    font-weight: 700;
  }
  .Well-Menu-Title {
    font-size: 18px;
    padding: 4px;
    color: #34a1f4;
    font-weight: 500;
  }
  .Well-Menu-Text {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .Menu-Text {
    font-size: 16px;
    font-weight: 500;
    color: #8b97a8;
    width: 300px;
  }
  .Well-Button {
    height: 45px;
    width: 280px;
    border: none;
    border-radius: 10px;
    background-color: #34a1f4;
    color: white;
    font-size: 17px;
    cursor: pointer;
    font-weight: 700;
  }
  @media all and (max-width: 400px) {
    .Welcome-Container {
      display: flex;
      justify-content: center;
      align-items: center;
      width: min(300px, 1000px);
      height: 300px;
      background-color: white;
      border-radius: 20px;
    }
    .Menu-Text {
      font-size: 16px;
      font-weight: 500;
      color: #8b97a8;
      width: 250px;
    }
    .Well-Button {
      height: 45px;
      width: 200px;
      border: none;
      border-radius: 10px;
      background-color: #34a1f4;
      color: white;
      font-size: 17px;
      cursor: pointer;
      font-weight: 700;
    }
  }
`;
