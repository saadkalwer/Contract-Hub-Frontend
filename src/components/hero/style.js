import styled from "styled-components";

export const HeroSection = styled.div`
  width: 100%;

  .Home-Page-Section {
    display: flex;
    justify-content: space-around;
  }
  .Home-Section {
    display: flex;
    flex-direction: column;
    width: 40%;
    gap: 90px;
  }
  .Digitize-Section {
    display: flex;
    flex-wrap: wrap;

    flex-direction: column;
    .Digitize-Title {
      font-size: 45px;
      font-weight: 700;
      line-height: 50px;
    }
    .Digitize-Text {
      font-size: 18px;
      line-height: 28px;
      color: #666666;
    }
    .Digitize-Button {
      height: 45px;
      width: 115px;
      border: none;
      border-radius: 10px;
      background-color: #34a1f4;
      color: white;
      font-size: 17px;

      font-weight: 400;
    }
  }
  .Digitize-Image-Section {
    position: relative;
    width: 514px;
    display: flex;
    justify-content: center;
    align-items: center;
    .person1 {
      position: absolute;
      width: 90px;
      top: 120px;
      right: 35px;
    }
    .person2 {
      position: absolute;
      width: 90px;
      top: 46px;
      left: 100px;
    }
    .person3 {
      position: absolute;
      width: 90px;
      bottom: 115px;
      left: 91px;
    }
    .Hand {
      width: 500px;
    }
  }
  .Header-Section {
    display: flex;
    gap: 50px;

    .Individual-Title {
      color: #34a1f4;
      font-weight: 400;
      font-size: 20px;
    }
    .Individual-Text {
      color: #666666;
      width: 300px;
      font-size: 18px;
    }
  }

  @media all and (max-width: 900px) {
    .Home-Page-Section {
      display: flex;
      justify-content: center;
      flex-direction: column;
    }
    .Home-Section {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
    }
    .Digitize-Section {
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-start;
      align-items: flex-start;
      flex-direction: column;
    }
    .Digitize-Image-Section {
      position: relative;
      margin-top: 50px;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      .person1 {
        position: absolute;
        width: 70px;
        top: 0px;
        right: 237px;
      }
      .person2 {
        position: absolute;
        width: 70px;
        top: -47px;
        left: 276px;
      }
      .person3 {
        position: absolute;

        width: 70px;
        bottom: 0px;
        left: 280px;
      }
      .Hand {
        width: 340px;
      }
    }
    .Header-Section {
      display: flex;
      gap: 0px;
    }
  }
  @media all and (max-width: 803px) {
    .Digitize-Image-Section {
      position: relative;
      margin-top: 50px;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      .person1 {
        position: absolute;
        width: 70px;
        top: 0px;
        right: 206px;
      }
      .person2 {
        position: absolute;
        width: 70px;
        top: -47px;
        left: 234px;
      }
      .person3 {
        position: absolute;

        width: 70px;
        bottom: -30px;
        left: 220px;
      }
      .Hand {
        width: 340px;
      }
    }
  }
  @media all and (max-width: 700px) {
    .Digitize-Image-Section {
      position: relative;
      margin-top: 50px;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      .person1 {
        position: absolute;
        width: 70px;
        top: 0px;
        right: 140px;
      }
      .person2 {
        position: absolute;
        width: 70px;
        top: -47px;
        left: 180px;
      }
      .person3 {
        position: absolute;

        width: 70px;
        bottom: -30px;
        left: 160px;
      }
      .Hand {
        width: 340px;
      }
    }
    .Header-Section {
      display: flex;
      flex-direction: column;
      gap: 1px;
    }
    .Home-Section {
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 100%;
      gap: 30px;
    }
    .Digitize-Section {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      flex-direction: column;
      width: 300px;
    }
  }
  @media all and (max-width: 540px) {
    .Digitize-Image-Section {
      position: relative;
      margin-top: 50px;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      .person1 {
        position: absolute;
        width: 70px;
        top: 0px;
        right: 105px;
      }
      .person2 {
        position: absolute;
        width: 70px;
        top: -47px;
        left: 130px;
      }
      .person3 {
        position: absolute;

        width: 70px;
        bottom: -14px;
        left: 122px;
      }
    }
  }
  @media all and (max-width: 440px) {
    .Digitize-Image-Section {
      position: relative;
      margin-top: 50px;
      width: 100%;
      display: flex;
      justify-content: center;

      align-items: center;
      .person1 {
        position: absolute;
        width: 70px;
        top: 0px;
        right: 43px;
      }
      .person2 {
        position: absolute;
        width: 70px;
        top: -47px;
        left: 77px;
      }
      .person3 {
        position: absolute;

        width: 70px;
        bottom: -10px;
        left: 70px;
      }
    }
    .Digitize-Title {
      font-size: 35px !important;
      font-weight: 700;
      line-height: 50px;
    }
    .Digitize-Section {
      display: flex;
      flex-wrap: wrap;
      padding-left: 22px;
    }
    .Header-Section {
      display: flex;
      gap: 50px;
      padding-left: 14px;
    }
  }
  @media all and (max-width: 340px) {
    .Digitize-Image-Section {
      position: relative;
      margin-top: 50px;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      .person1 {
        position: absolute;
        width: 70px;
        top: 0px;
        right: 10px;
      }
      .person2 {
        position: absolute;
        width: 70px;
        top: -47px;
        left: 40px;
      }
      .person3 {
        position: absolute;

        width: 70px;
        bottom: -10px;
        left: 27px;
      }
    }
    .Digitize-Title {
      font-size: 35px !important;
      font-weight: 700;
      line-height: 50px;
    }
    .Digitize-Section {
      display: flex;
      flex-wrap: wrap;
      padding-left: 10px;
    }
  }
`;
