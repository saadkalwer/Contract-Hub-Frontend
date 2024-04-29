import styled from "styled-components";

export const FooterSide = styled.div`
  background-color: #263238;
  margin-top: 15%;
  height: 400px;

  .Footer-Main-Section {
    display: flex;
    justify-content: center;
    align-items: center !important;
    flex-wrap: wrap;
    .Footer-Container {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 70px;
      gap: 55px;
      padding-bottom: 90px;
      border-bottom: 2px #92989b solid;
    }
    .Copy-Right-Section {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      margin-top: 30px;
      width: 70.5%;
      .Copy-Right-Text {
        font-size: 17px;
        color: #c5c8c9;
      }
    }
    .ContactLinks {
      display: flex;
      flex-direction: column;
      padding-left: 10px;

      .Contact-Link-Text {
        font-size: 17px;

        color: #abafb1;
      }
      .Social-Logo-Section {
        display: flex;
        justify-content: flex-start;
        align-items: center;

        .Social-Logo {
          width: 40px;
          color: whitesmoke;
          height: 20px;
        }
      }
    }
    .ProductSection {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;

      .PublicMainSection {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        gap: 10px;

        .Public-Title {
          font-size: 19px;
          color: whitesmoke;
          margin-bottom: 13px;
        }
        .Public-Text {
          font-size: 17px;
          color: #abafb1;
        }
      }
    }
    .Contact-Side {
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;

      .Contact-Text-Section {
        display: flex;
        justify-content: center;
        flex-direction: column;
      }
      .Contact-Title {
        font-size: 19px;
        color: whitesmoke;
        margin-bottom: 7px;
      }
      .Contact-Text {
        font-size: 17px;
        color: #abafb1;
      }
      .Number-Section {
        display: flex;
        gap: 10px;
        flex-direction: column;
        .Number {
          font-size: 17px;
          color: #abafb1;

          .Number-logo {
            width: 30px;
            height: 17px;
            color: whitesmoke;
          }
        }
        .Email {
          font-size: 17px;
          color: #abafb1;
          .Email-logo {
            width: 30px;
            height: 17px;
            color: whitesmoke;
          }
        }
      }
    }
  }
  @media all and (max-width: 540px) {
    height: 1200px !important;
    .Footer-Main-Section {
      display: flex;
      justify-content: center;
      align-items: center !important;
      flex-wrap: wrap;
      width: 100%;
      height: 600px;
      .Footer-Container {
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        margin-top: 40px;
        gap: 30px;

        border-bottom: 0px #92989b solid;
      }
      .Copy-Right-Section {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        margin-top: -52px;
        width: 80%;
        text-align: center;

        .Copy-Right-Text {
          font-size: 17px;
          width: 277px;
          color: #c5c8c9;
        }
      }
      .ContactLinks {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        .Contact-Link-Text {
          font-size: 17px;

          color: #abafb1;
        }
      }
      .Contact-Side {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        width: 245px;
        .Contact-Title {
          font-size: 19px;
          color: whitesmoke;
          margin-bottom: 7px;
          padding-right: 70px;
        }
        .Contact-Text {
          font-size: 17px;
          color: #abafb1;
          width: 293px;
        }
        .Contact-Text-Section {
          display: flex;
          justify-content: center;
          flex-direction: column;
          width: 270px;
        }
      }
    }
  }

  @media all and (max-width: 960px) {
    height: 540px;
    .Footer-Main-Section {
      display: flex;
      justify-content: center;
      align-items: center !important;
      flex-wrap: wrap;

      .Footer-Container {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        align-items: center;
        margin-top: 40px;
        gap: 10px;
        padding-bottom: 90px;
        border-bottom: 2px #92989b solid;
      }
      .Copy-Right-Section {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        margin-top: 30px;
        width: 83.5%;
        .Copy-Right-Text {
          font-size: 17px;
          color: #c5c8c9;
        }
      }
      .ContactLinks {
        display: flex;
        flex-direction: column;

        .Contact-Link-Text {
          font-size: 17px;

          color: #abafb1;
        }
        .Social-Logo-Section {
          display: flex;
          justify-content: flex-start;
          align-items: center;

          .Social-Logo {
            width: 40px;
            color: whitesmoke;
            height: 20px;
          }
        }
      }
      .ProductSection {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;

        .PublicMainSection {
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: flex-start;
          gap: 10px;
        }
      }
      .Contact-Side {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;

        .Contact-Text-Section {
          display: flex;
          justify-content: center;
          flex-direction: column;
        }
      }
    }
  }
`;
