import React from "react";
import SidebarLayout from "../../components/usersidebar/usersidebar";
import Minibar from "../../components/minibar/minibar";
import { UserLayoutSide } from "./style";
import { ContactArray } from "../../array";
import { BsTrashFill } from "react-icons/bs";
import { AiOutlineReload } from "react-icons/ai";

export default function userLayout() {
  return (
    <UserLayoutSide>
      <div className="userlayout">
        <SidebarLayout />

        <div className="Minibar">
          <Minibar>
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
          </Minibar>
        </div>
      </div>
    </UserLayoutSide>
  );
}
