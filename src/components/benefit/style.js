import styled from "styled-components";

export const BenefitSection = styled.div`
  margin-top: 60px;
  .Benefit-Section {
    display: flex;
    gap: 100px;
    justify-content: center;
    align-items: center;
  }
  .Benefit-Container {
    display: flex;
    flex-direction: column;
    gap: 60px;
  }
  .Text-Section {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    .Benefit-Title {
      font-size: 37px;
    }
    .Cosmetic-Text {
      font-size: 18px;
      color: #778599;
      text-align: center;
    }
  }
  .Benfits {
    display: flex;
    gap: 35px;
    .Benefit-1 {
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;

      .benefit-images {
        width: 80px;
      }
      .Benfit-Title {
        font-size: 20px;
        padding-top: 20px;
      }
      .Benefit-Text {
        font-size: 18px;
        color: #778599;
        text-align: center;

        width: 300px;
      }
    }
  }
  @media all and (max-width: 955px) {
    .Benefit-Container {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
    .Benfits {
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      gap: 35px;
    }
    .Text-Section {
      display: flex;
      width: 400px;
    }
  }
  @media all and (max-width: 434px) {
    .Benefit-Container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 10px;
    }
    .Benfits {
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      gap: 35px;
    }
    .Text-Section {
      display: flex;
      width: 268px;
    }
    .Benefit-Title {
      font-size: 29px !important;
    }
  }
`;
