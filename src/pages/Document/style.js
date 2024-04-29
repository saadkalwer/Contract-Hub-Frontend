import styled from "styled-components";

export const DocumentStyle = styled.div`
  flex-direction: row;
  display: flex;
  height: 100vh;
  width: 100%;
  background-color: #fafafa;

  padding-left: 10px;

  .Mytodo-Title-section {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 85px;
    border-bottom: 2px #eeeeee solid;
  }
  .Mytodo-Title {
    font-size: 22px;
    font-weight: 500;
    padding-left: 30px;
  }
  .todo-LogoSection {
    display: flex;
    justify-content: space-around;
    align-items: center;

    gap: 10px;
    padding-right: 70px;
  }
  .LogoSide {
    padding: 7px;
    border-radius: 50%;

    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #eeeeee;
    cursor: pointer;
  }
  .LogoSideSection {
    padding: 4px;
    border-radius: 50%;

    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #34a1f4;
    cursor: pointer;
  }

  .side-logo {
    color: white;
  }
  .NameBox {
    height: 30px;
    width: 139px;
    font-size: 17px;
    border: none;
    outline: none;

    color: #5d646e;
  }
  .FormBox {
    border: 2px #e6ebf2 solid;
    padding: 4px;
    width: 195px;
    margin-left: 10px;
    border-radius: 9px;
    margin-top: 15px;
    cursor: pointer;
    background-color: #ffffff;
    display: flex;
    align-items: center;
  }
  .FormIcon {
    width: 25px;
    height: 17px;
    padding: 1px;
  }
  .SearchBox {
    background-color: white;
    border: 2px #e6ebf2 solid;
    padding: 4px;
    width: 195px;
    margin-left: 10px;
    border-radius: 9px;
    margin-top: 15px;
    cursor: pointer;
    background-color: #ffffff;
    display: flex;
    align-items: center;
  }
  .Search-Box-Section {
    display: flex;
    align-items: center;
  }
  .Search-Box {
    border: 2px #e6ebf2 solid;
    padding: 6px;
    width: 460px;
    margin-left: 10px;
    height: 32px;
    border-radius: 40px;
    margin-top: 15px;
    cursor: pointer;
    display: flex;
    background-color: #e6ebf2;
    align-items: center;
  }
  .Search-form {
    width: 424px;
    padding: 4px;
    font-size: 17px;
    background-color: #e6ebf2;
    border: none;
    outline: none;
    color: #5d646e;
  }

  .Folder-section {
    display: flex;
    flex-direction: column;
    background-color: #ffffff;
    margin-top: 3%;
    width: 24%;

    border-radius: 15px;
    height: 400px;
  }
  .Folder-title-Section {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
  }
  .Folder-Title {
    font-size: 20px;
    font-weight: 500;
    padding-left: 30px;
    padding-right: 10px;
  }
  .Plus-Section {
    padding: 5px;
    border-radius: 50%;
    margin-right: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #34a1f4;
    cursor: pointer;
  }
  .Folder-Pages {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding-left: 30px;
    margin-top: 20px;
  }
  .Folder-Page-Title {
    font-size: 18px;
    padding: 4px;
    color: #64748b;
  }
  .Folder-Icon {
    padding-right: 10px;
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
