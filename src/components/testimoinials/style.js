import styled from "styled-components";

export const TestiSide = styled.div`
  margin-top: 10%;
  .Test-Menu-Section {
    width: 98%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .Test-Container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .Test-Title-Section {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 80%;
    gap: 45px;
  }
  .Test-Button {
    display: flex;
    justify-content: center;
    gap: 10px;

    .arrows {
      height: 27px;
      width: 25px;
      border: 1px #4eb4ff solid;
      border-radius: 50%;
      padding: 5px;
      color: #4eb4ff;
    }
  }
  .Star-Section {
    display: flex;
    gap: 1px;
    color: #ffa500;
  }
  .Box-Container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    width: 55%;
  }

  .Box-Section-menu {
    display: flex;
    flex-direction: column;
    width: 332px;
    justify-content: center;
    align-items: flex-start;
    border-radius: 5px;
    padding: 18px;
    box-shadow: inset 5px 5px 5px #f7f7f7, inset -5px -5px 5px #f7f7f7;
  }
  .Box-Text-Section {
    width: 340px;
    .Box-Text {
      font-size: 17px;
      color: #64748b;
      width: 340px;
    }
  }

  .Box-Image {
    display: flex;
    gap: 10px;
    .Box-Image1 {
      width: 75px;
    }
    .Box-Person {
      display: flex;
      flex-direction: column;
      gap: 10px;
      .Person-Name {
        font-size: 19px;
        font-weight: bold;
      }
      .Cbo {
        font-size: 17px;
        color: #64748b;
      }
    }
  }
`;
