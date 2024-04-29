import styled from "styled-components";

export const CloudSection = styled.div`
  margin-top: 150px;
  .Cloud-Section {
    display: flex;
    justify-content: center;
    align-items: center;
    .Cloud-Container {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 70px;
    }
    .Cloud-image {
      width: 400px;
      height: 100%;
    }
    .Cloud-Text-Section {
      display: flex;
      justify-content: center;
      flex-direction: column;

      .Cloud-Title {
        margin-bottom: -5px;
      }
      .Cloud-Text {
        font-size: 16px;
        line-height: 25px;
        color: #64748b;
      }
    }
    .Back-Network-Section {
      display: flex;
      justify-content: center;
      gap: 70px;
      margin-top: 40px;

      .Backup-Section {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 280px;
        height: 250px;
        border-radius: 10px;
        box-shadow: inset 5px 5px 5px #f7f7f7, inset -5px -5px 5px #f7f7f7;

        .Backup-Image {
          width: 80px;
        }
        .Network-Title {
          font-size: 20px;

          color: #525354;
        }
        .Backup-Text {
          font-size: 16px;
          align-items: center;
        }
      }
    }
    .Network-Section {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 280px;
      height: 250px;
      border-radius: 10px;
      box-shadow: inset 5px 5px 5px #f7f7f7, inset -5px -5px 5px #f7f7f7;
      .NetworkImage {
        width: 80px;
      }
      .Network-Title {
        font-size: 20px;
        color: #525354;
      }
      .Network-Text {
        font-size: 16px;
      }
    }
  }

  @media all and (max-width: 1115px) {
    .Cloud-Container {
      display: flex;
      justify-content: center;

      align-items: center;
      gap: 0px !important;
    }
    .Cloud-image {
      width: 350px !important;
    }
  }
  @media all and (max-width: 1007px) {
    .Cloud-Container {
      display: flex;
      justify-content: center;

      align-items: center;
      gap: 0px !important;
    }
    .Cloud-image {
      width: 300px !important;
    }
  }
  @media all and (max-width: 960px) {
    .Cloud-Container {
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      gap: 0px !important;
    }
    .Cloud-image {
      width: 300px !important;
    }
  }

  @media all and (max-width: 690px) {
    .Cloud-image {
      width: 300px;
      height: 100%;
    }
    .Cloud-Text-Section {
      display: flex;
      justify-content: center;
      flex-direction: column;

      .Cloud-Title {
        margin-bottom: -5px;
        width: 200px;
      }
      .Cloud-Text {
        font-size: 16px;
        line-height: 25px;
        width: 250px;
        color: #64748b;
      }
    }
    .Back-Network-Section {
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      margin-top: 40px;
    }
  }
`;
