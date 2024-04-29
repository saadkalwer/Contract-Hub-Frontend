import styled from "styled-components";

export const TemplateSide = styled.div`
  margin-top: 100px;
  .Turbo-Main-Section {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

    .Turbo-Container {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 80px;
    }
    .Template-images {
      width: 300px;
    }

    .Turbo-Text-Section {
      display: flex;
      flex-direction: column;
      .Turbo-Text {
        font-size: 17px;
        color: #788599;
      }
    }
    .TemplateText-Side {
      position: relative;

      .Template-Logo {
        width: 45px;
        position: absolute;
        top: -1px;
        left: -32px;
      }
      .Template-Logo1 {
        width: 92px;
        position: absolute;
        top: -6px;
      }
    }
    .Template-Text-Section {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 6px;
    }

    .Template-Button {
      height: 45px;
      width: 101px;
      border: none;
      border-radius: 10px;
      background-color: #34a1f4;
      color: white;
      font-size: 16px;

      font-weight: 400;
    }
  }

  @media all and (max-width: 960px) {
    .Turbo-Container {
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      gap: 0px;
    }
    .Template-images {
      width: 250px !important;
    }
  }
  @media all and (max-width: 633px) {
    .Turbo-Text-Section {
      display: flex;
      flex-direction: column;
      .Turbo-Text {
        font-size: 17px;
        width: 250px;
        color: #788599;
      }
    }
    .TemplateText-Side {
      position: relative;

      .Template-Logo {
        width: 38px;
        position: absolute;
        top: -1px;
        left: -32px;
      }
      .Template-Logo1 {
        width: 70px;
        position: absolute;
        top: -6px;
      }
    }
    .Template-Text-Section {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 250px;
    }
  }
  @media all and (max-width: 402px) {
    .TemplateText-Side {
      position: relative;

      .Template-Logo {
        width: 38px !important;
        position: absolute;
        top: -1px;
        left: -32px;
      }
      .Template-Logo1 {
        width: 60px !important;
        position: absolute;
        top: -6px;
      }
    }
  }
`;
