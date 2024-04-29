import styled from "styled-components";

export const MytodoSide = styled.div`
  flex-direction: row;
  height: 100vh;
  width: 100%;
  background-color: #fafafa;

  .Mytodo-Main-Section {
    display: flex;
  }
  .todo-Container {
    display: flex;
    width: 100%;
    flex-direction: column;
  }
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
  .Account-Button-Section {
    display: flex;
    justify-content: space-around;
    align-items: center;

    padding-right: 70px;
  }
  .Account-Button {
    height: 45px;
    width: 115px;
    border: none;
    border-radius: 16px;
    background-color: #34a1f4;
    color: white;
    font-size: 17px;

    font-weight: 400;
  }
  .Account-Logo {
    color: #34a1f4;
  }
  .Folder-section {
    display: flex;
    flex-direction: column;
    background-color: #ffffff;
    margin-top: 3%;
    width: 21%;
    align-items: center;
    margin-left: 10px;
    border-radius: 15px;
    height: 350px;
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
  .Data-Section {
    display: flex;
    flex-direction: column;
    background-color: #ffffff;
    margin-top: 3%;
    width: 76.5%;
    align-items: center;
    margin-left: 10px;
    border-radius: 15px;
    height: 500px;
    border-bottom: 2px #eeeeee solid;
  }
  .Account-Container {
    display: flex;
  }
  .Sign-Form-Section {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .Sign-Form {
    display: flex;
    margin-top: 15px;
    justify-content: center;
    align-items: center;
    gap: 85px;
    width: 320px;
  }
  .NameBox {
    width: 320px;
    height: 35px;
    padding: 8px;
    font-size: 16px;
    border: 2px #e6ebf2 solid;
    outline: none;
    border-radius: 9px;
    color: #5d646e;
    cursor: pointer;
  }
  .FormBox {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    font-size: 16px;
    font-weight: 500;

    gap: 8px;
  }
  .Sign-Form-Section {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }
  .DataBox {
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    font-size: 16px;
    font-weight: 500;
    align-items: flex-start;
    gap: 8px;
    margin-right: 430px;
    margin-top: 20px;
  }
  .Data-Box-Container {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 10px;
  }
`;
