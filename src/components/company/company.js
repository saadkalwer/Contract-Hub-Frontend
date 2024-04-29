import React from "react";
import WellLayout from "../welLayout/welLayout";
import { useNavigate } from "react-router-dom";
import { CompanySide } from "./style";

function Company() {
  const navigate = useNavigate();
  return (
    <WellLayout>
      <CompanySide>
        <div className="Lets-Section">
          <div className="Lets-Container">
            <div className="Let-Menu-All-Text">
              <div className="Lets-Menu">
                <h2 className="Well-Title">Company Information:</h2>
              </div>
              <div className="Sign-Form-Section">
                <form className="Sign-Form">
                  <div className="FormBox">
                    <label for="Company">Company Legal Name</label>
                    <input
                      className="NameBox"
                      type="Company"
                      placeholder="My Company LLC"
                    />
                  </div>
                  <div className="FormBox">
                    <label for="Company">Admin email</label>
                    <input
                      className="NameBox"
                      type="Email"
                      placeholder="mycompany@company.com "
                    />
                  </div>
                </form>
              </div>
              <div className="Company-Legal-Text">
                <span className="Legal-Text">
                  Would you like to set this company as your primary dashboard?
                </span>
              </div>
              <div className="Well-Menu-Buttons">
                <button className="Let-Button">Exit</button>
                <button
                  className="Well-Button"
                  onClick={() => navigate("/coperate")}
                >
                  {" "}
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </CompanySide>
    </WellLayout>
  );
}

export default Company;
