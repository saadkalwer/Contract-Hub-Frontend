import styled from "styled-components";

export const DashboardSide = styled.div`
  flex-direction: row;
  height: 100vh;
  width: 100%;
  background-color: #fafafa;
  padding-left: 10px;

  .Mytodo-Title-section {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 60px;
    border-bottom: 2px #eeeeee solid;
  }
  .Mytodo-Title {
    font-size: 20px;
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
    padding: 5px;
    border-radius: 50%;

    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #eeeeee;
    cursor: pointer;
  }
  .Logo {
    width: 40px;
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
    display: flex;
    align-items: center;
  }
  .FormIcon {
    width: 25px;
    height: 17px;
    padding: 1px;
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

  .Folder-Section {
    display: flex;
    flex-direction: column;
    background-color: #ffffff;
    margin-top: 3%;
    width: 27%;
    border-radius: 15px;
    height: 320px;
  }
  .Folder-title-Section {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
    gap: 23px;
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
`;
