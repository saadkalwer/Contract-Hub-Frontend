import React from "react";
import { TrashStyle } from "./style";
import SidebarLayout from "../../components/usersidebar/usersidebar";
import Minibar from "../../components/minibar/minibar";
import Trashlogo from "../../image/trash.png";

function trash() {
  return (
    <TrashStyle>
      <div className="userlayout">
        <SidebarLayout />

        <div className="Minibar">
          <Minibar>
            <div className="Email-Track-Section">
              <div className="Email-Container">
                <div className="Complete-Img-Section">
                  <img className="Complete-Logo" src={Trashlogo} alt="" />
                </div>
              </div>
            </div>
          </Minibar>
        </div>
      </div>
    </TrashStyle>
  );
}

export default trash;
