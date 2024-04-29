import React from "react";
import WellLayout from "../welLayout/welLayout";
import { useNavigate } from "react-router-dom";
import { ReadySide } from "./style";
import Check from "../../image/Check.png";

function Welcome() {
  const navigate = useNavigate();
  return (
    <WellLayout>
      <ReadySide>
        <div className="Welcome-Section">
          <div className="Welcome-Container">
            <div className="Well-Menu-All-Text">
              <div className="Check-Section">
                <img className="check" src={Check} alt="" />
              </div>
              <div className="Well-Menu">
                <span className="Well-Menu-Title"> Thanks, Wassi Ahsan</span>
              </div>
              <div className="Well-Menu-Text">
                <span className="Menu-Text">
                  Your new company account is ready to use.
                </span>
              </div>
              <div className="Well-Menu-Buttons">
                <button
                  className="Well-Button"
                  onClick={() => navigate("/companydashboard")}
                >
                  Lets Go!
                </button>
              </div>
            </div>
          </div>
        </div>
      </ReadySide>
    </WellLayout>
  );
}

export default Welcome;
