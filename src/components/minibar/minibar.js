import React from "react";
import { MinibarSide } from "./style";
import { CiMenuBurger } from "react-icons/ci";
import { BiDownArrowAlt } from "react-icons/bi";
import { BsSearch } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineFolder } from "react-icons/ai";
import { TiBell } from "react-icons/ti";
import { AiOutlineSetting } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

function Minibar({ children }) {
  const navigate = useNavigate();
  return (
    <MinibarSide>
      <div className="Mini-Bar-Container">
        <div className="Mytodo-Title-section">
          <span className="Mytodo-Title">Dashboard Library</span>
          <div className="todo-LogoSection">
            <div className="LogoSide">
              <TiBell className="Logo" size={22} />
            </div>
            <div className="LogoSide">
              <AiOutlineSetting className="Logo" size={22} />
            </div>
          </div>
        </div>
        <div className="Search-Box-Section">
          <div className="FormBox">
            <CiMenuBurger className="FormIcon" />
            <input className="NameBox" placeholder="Newest to Oldest" />
            <BiDownArrowAlt className="FormIcon" />
          </div>
          <div className="Search-Box">
            <input
              className="Search-form"
              type="Search"
              placeholder="Search Documents by name, party or email"
            />
            <BsSearch className="Search-Icon" />
          </div>
        </div>

        <div style={{ display: "flex" }}>
          <div className="Folder-Section">
            <div className="Folder-title-Section">
              <span className="Folder-Title">Folders</span>
              <div className="Plus-Section">
                <AiOutlinePlus className="Plus-icon" />
              </div>
            </div>
            <div className="Folder-Pages">
              <span
                className="Folder-Page-Title"
                onClick={() => navigate("/userlayout")}
              >
                <AiOutlineFolder className="Folder-Icon" />
                My To Do
              </span>
              <span
                className="Folder-Page-Title"
                onClick={() => navigate("/userdashboard")}
              >
                <AiOutlineFolder className="Folder-Icon" />
                In Progress
              </span>
              <span
                className="Folder-Page-Title"
                onClick={() => navigate("/complete")}
              >
                <AiOutlineFolder className="Folder-Icon" />
                Completed
              </span>
              <span className="Folder-Page-Title">
                <AiOutlineFolder className="Folder-Icon" />
                All
              </span>
              <span
                className="Folder-Page-Title"
                onClick={() => navigate("/trash")}
              >
                <AiOutlineFolder className="Folder-Icon" />
                Bin
              </span>
            </div>
          </div>

          {children}
        </div>
      </div>
    </MinibarSide>
  );
}

export default Minibar;
