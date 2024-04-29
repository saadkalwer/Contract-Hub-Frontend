import React from "react";
import WellLayout from "../welLayout/welLayout";
import { useNavigate } from "react-router-dom";
import { WellStyle } from "./style";

function Welcome() {
  const navigate = useNavigate();
  return (
    <WellLayout>
      <WellStyle>
        <div className="Welcome-Section">
          <div className="Welcome-Container">
            <div className="Well-Menu-All-Text">
              <div className="Well-Menu">
                👋 <span className="Well-Title">Welcome,</span>
                <span className="Well-Menu-Title">Wassi Ahsan</span>
              </div>
              <div className="Well-Menu-Text">
                <span className="Menu-Text">
                  😍 We are excited to have you on board. Lets set up your
                  Account.
                </span>
              </div>
              <div className="Well-Menu-Buttons">
                <button
                  className="Well-Button"
                  onClick={() => navigate("/letdoit")}
                >
                  Lets Do it!
                </button>
              </div>
            </div>
          </div>
        </div>
      </WellStyle>
    </WellLayout>
  );
}

export default Welcome;
