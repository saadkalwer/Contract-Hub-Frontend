import styled from "styled-components";

export const TurboSide = styled.div`
  margin-top: 100px;
  .Turbo-Main-Section {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }
  .Turbo-Container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 80px;
  }
  .Turbo-images {
    width: 400px;
  }
  .Turbo-Text-Section {
    display: flex;
    flex-direction: column;
  }
  .Turbo-Text {
    font-size: 17px;
    color: #788599;
  }

  @media all and (max-width: 960px) {
    .Turbo-Main-Section {
      display: flex;
      flex-wrap: wrap;

      justify-content: center;
      align-items: center;
    }
    .Turbo-Container {
      display: flex;
      justify-content: center;
      flex-direction: column !important;
      align-items: center;
      gap: 10px;
    }
    .Turbo-images {
      width: 320px;
    }
  }
  @media all and (max-width: 700px) {
    .Turbo-Text-Section {
      display: flex;
      flex-direction: column;
    }

    .Turbo-images {
      width: 300px !important;
    }

    .Turbo-Text {
      font-size: 17px;
      color: #788599;
      width: 300px !important;
    }
    .Turbo-Title {
      width: 200px;
    }
  }
`;
