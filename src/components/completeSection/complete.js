import React from "react";
import { CompleteStyle } from "./style";
import SidebarLayout from "../../components/usersidebar/usersidebar";
import Minibar from "../../components/minibar/minibar";
import Completelogo from "../../image/complete.png";

function complete() {
  return (
    <CompleteStyle>
      <div className="userlayout">
        <SidebarLayout />

        <div className="Minibar">
          <Minibar>
            <div className="Email-Track-Section">
              <div className="Email-Container">
                <div className="Complete-Img-Section">
                  <img className="Complete-Logo" src={Completelogo} alt="" />
                </div>
              </div>
            </div>
          </Minibar>
        </div>
      </div>
    </CompleteStyle>
  );
}

export default complete;
