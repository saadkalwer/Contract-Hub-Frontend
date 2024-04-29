import React from "react";
import Companydashboard from "../../components/companydashboard/companydashboard";

import { CiMenuBurger } from "react-icons/ci";
import { BiDownArrowAlt } from "react-icons/bi";
import { BsSearch } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineFolder } from "react-icons/ai";
import { TiBell } from "react-icons/ti";
import { AiOutlineSetting } from "react-icons/ai";
import { DocumentStyle } from "./style";
import { ContactArray } from "../../array";
import { BsTrashFill } from "react-icons/bs";
import { AiOutlineReload } from "react-icons/ai";

export default function Documents() {
  return (
    <>
      <DocumentStyle>
        <Companydashboard>
          <div className="Mytodo-Title-section">
            <span className="Mytodo-Title">Dashboard Library</span>
            <div className="todo-LogoSection">
              <div className="LogoSide">
                <TiBell className="Logo" size={20} />
              </div>
              <div className="LogoSideSection">
                <AiOutlineSetting className="side-logo" size={22} />
              </div>
            </div>
          </div>
          <div className="Search-Box-Section">
            <div className="SearchBox">
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
          <div className="Email-Folder-Container">
            <div className="Folder-section">
              <div className="Folder-title-Section">
                <span className="Folder-Title">Folders</span>
                <div className="Plus-Section">
                  <AiOutlinePlus className="Plus-icon" />
                </div>
              </div>
              <div className="Folder-Pages">
                <span className="Folder-Page-Title">
                  <AiOutlineFolder className="Folder-Icon" />
                  My To Do
                </span>
                <span className="Folder-Page-Title">
                  <AiOutlineFolder className="Folder-Icon" />
                  In Progress
                </span>
                <span className="Folder-Page-Title">
                  <AiOutlineFolder className="Folder-Icon" />
                  Completed
                </span>
                <span className="Folder-Page-Title">
                  <AiOutlineFolder className="Folder-Icon" />
                  All
                </span>
                <span className="Folder-Page-Title">
                  <AiOutlineFolder className="Folder-Icon" />
                  Bin
                </span>
              </div>
            </div>
            <div className="Email-Track-Section">
              <div className="Email-Container">
                <div className="Email-Title-Section">
                  <span className="Email-Title-1">Documents</span>
                  <span className="Email-Title">Status</span>
                  <span className="Email-Title">Email Tracking </span>
                  <span className="Email-Title">With</span>
                  <span className="Email-Title">Action</span>
                </div>
                {ContactArray.map((item, index) => (
                  <div className="Email-Store-Section">
                    <div className="Email-Store-Container">
                      <span className="Title-Store">{item.name}</span>
                      <div className="Email-Store-Pending">
                        <div className="Sent-Sction">
                          <span className="Sent-Title">{item.title}</span>
                          <span className="Sent-Text">AUG 02, 2023</span>
                        </div>
                        <div className="Pending-Section">
                          <span className="Pending-Title">{item.desc}</span>
                          <span className="Sent-Text">AUG 02, 2023</span>
                        </div>
                      </div>
                      <div className="Date-Section">
                        <span className="Date-Title">{item.Text}</span>
                      </div>
                      <div className="With-Text-Section">
                        <span className="With-Title">{item.ex}</span>
                        <span className="With-Text">{item.party}</span>
                      </div>
                      <div className="Email-Store-Logo-Section">
                        <div className="Email-Store-Logo">
                          <AiOutlineReload className="Email-logo" />
                        </div>
                        <div className="Email-Store-Logo">
                          <BsTrashFill className="Email-logo" />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Companydashboard>
      </DocumentStyle>
    </>
  );
}
