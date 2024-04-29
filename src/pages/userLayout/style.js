import styled from "styled-components";

export const UserLayoutSide = styled.div`
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
  .check {
    display: flex;

    background-color: rebeccapurple;
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
    width: 73%;
  }
  .Email-Container {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  .Email-Title-Section {
    display: flex;
    justify-content: center;
    margin-top: 30px;
    height: 25px;
    align-items: center;
    border-bottom: 2px #eeeeee solid;
    padding-bottom: 40px;

    width: 100%;
    gap: 95px;
  }
  .Email-Title {
    font-size: 18px;
    font-weight: 500;
  }
  .Email-Title-1 {
    font-size: 18px;
    font-weight: 500;
    padding-left: 10px;
  }
  .Email-Store-Section {
    display: flex;
    justify-content: center;
  }
  .Email-Store-Container {
    display: flex;

    gap: 31px;
    width: 100%;
    align-items: center;
    border-bottom: 2px #eeeeee solid;
    padding-bottom: 20px;
    padding-left: 20px;
  }
  .Title-Store {
    font-size: 14px;
    padding-left: 15px;
    font-weight: 500;
    color: #64748b;
  }
  .Email-Store-Pending {
    display: flex;
    align-items: center;
    margin-top: 20px;
  }
  .Sent-Sction {
    background-color: #f0fffa;
    width: 90px;
    align-items: center;
    height: 45px;
    display: flex;
    flex-direction: column;
  }
  .Sent-Title {
    color: #0da06a;
    font-size: 14px;
    font-weight: 500;
  }
  .Pending-Section {
    background-color: #fff5eb;
    width: 90px;
    align-items: center;
    height: 45px;
    display: flex;
    flex-direction: column;
  }
  .Pending-Title {
    color: #fb7e15;
    font-size: 14px;
    font-weight: 500;
  }
  .Date-Section {
    display: flex;
    font-size: 14px;
    font-weight: 500;
    color: #64748b;
  }
  .With-Text-Section {
    display: flex;
  }
  .With-Title {
    color: #34a1f4;
    font-size: 14px;
    font-weight: 500;
  }
  .With-Text {
    display: flex;
    font-size: 14px;
    font-weight: 500;
    color: #64748b;
  }
  .Sent-Text {
    font-size: 13px;
  }
  .Email-Store-Logo-Section {
    display: flex;
    gap: 5px;
  }
  .Email-Store-Logo {
    padding: 5px;
    border-radius: 50%;

    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #34a1f4;
    cursor: pointer;
  }
  .Email-logo {
    color: white;
    height: 15px;
  }
`;
