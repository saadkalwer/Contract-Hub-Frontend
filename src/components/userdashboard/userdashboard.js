import React from "react";
import SidebarLayout from "../../components/usersidebar/usersidebar";
import Minibar from "../../components/minibar/minibar";
import { DashStyle } from "./style";
import { PendingArray } from "../../array";

function userdashboard() {
  return (
    <DashStyle>
      <div className="userlayout">
        <SidebarLayout />

        <div className="Minibar">
          <Minibar>
            <div className="Email-Track-Section">
              <div className="Email-Container">
                <div className="Email-Title-Section">
                  <span className="Email-Title-1">Title</span>
                  <span className="Email-Title">Status</span>
                  <span className="Email-Title">With</span>
                  <span className="Email-Title">Effective Date</span>
                </div>
                {PendingArray.map((item, index) => (
                  <div className="Email-Store-Section">
                    <div className="Email-Store-Container">
                      <span className="Title-Store">{item.name}</span>
                      <div className="Email-Store-Pending">
                        <div className="Sent-Sction">
                          <span className="Sent-Title">{item.title}</span>
                        </div>
                      </div>
                      <div className="Date-Section">
                        <span className="Date-Title">{item.Text}</span>
                      </div>
                      <div className="With-Text-Section">
                        <span className="With-Title">{item.Text}</span>
                      </div>
                    </div>
                  </div>
                ))}
                {PendingArray.map((item, index) => (
                  <div className="Email-Store-Section">
                    <div className="Email-Store-Container">
                      <span className="Title-Store">{item.name}</span>
                      <div className="Email-Store-Pending">
                        <button className="Digitize-Button">
                          Ready To Sign
                        </button>
                      </div>
                      <div className="Date-Section">
                        <span className="Date-Title">{item.Text}</span>
                      </div>
                      <div className="With-Text-Section">
                        <span className="With-Title">{item.Text}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Minibar>
        </div>
      </div>
    </DashStyle>
  );
}

export default userdashboard;
