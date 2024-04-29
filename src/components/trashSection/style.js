import styled from "styled-components";

export const TrashStyle = styled.div`
  width: 250px;
  box-shadow: inset 5px 5px 5px #f7f7f7, inset -5px -5px 5px #f7f7f7;
  height: 100vh;
  display: flex;
  background-color: white;
  flex: 1;

  .Dashboard {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100vh;
  }
  .Dashboard-Container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex: 1;
    width: 250px;
    align-items: center;
  }
  .Side-bar-Logo {
    display: flex;
    flex-direction: column;
  }

  .Side-logo {
    width: 150px;
    margin-top: 20px;
  }

  .Dashboard-Title {
    font-size: 17px;
    font-weight: 500;
    color: #64748b;
  }
  .Dashboard-Icon {
    width: 36px;
    height: 18px;
  }
  .Dashboard-Wrapper {
    display: flex;
    gap: 20px;

    flex-direction: column;
    padding-top: 30px;
  }
  .Document-Section {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 90px;
    flex-direction: column;
  }
  .Document-Logo {
    width: 80px;
    padding-top: 50px;
  }
  .Document-Section {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .Documnt-Title {
    font-size: 17px;
  }
  .Document-Title1 {
    color: #34a1f4;
    font-weight: 400;
  }
  .Version-Section {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 33px;
    width: 100%;
    background-color: #e8f2ff;
  }
  .Version-Text {
    font-size: 17px;
    font-weight: 500;
    color: #4aabf6;
  }
  .userlayout {
    display: flex;
    width: 100%;
  }

  .Minibar {
    display: flex;
    background-color: red;
    flex: 1;
  }
  .Email-Folder-Container {
    display: flex;
    width: 100%;
  }
  .Email-Track-Section {
    display: flex;
    margin-left: 15px;
    background-color: #ffffff;
    border-radius: 15px;
    margin-top: 30px;
    justify-content: center;
    align-items: center;
    width: 71%;
  }
  .Complete-Img-Section {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .Complete-Logo {
    width: 300px;
  }
`;
