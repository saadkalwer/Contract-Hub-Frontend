import React from "react";
import WellLayout from "../welLayout/welLayout";
import { useNavigate } from "react-router-dom";
import { CoperateSide } from "./style";

function Coperate() {
  const navigate = useNavigate();
  return (
    <WellLayout>
      <CoperateSide>
        <div className="Lets-Section">
          <div className="Lets-Container">
            <div className="Let-Menu-All-Text">
              <div className="Lets-Menu">
                <h2 className="Well-Title">Coperate Form</h2>{" "}
                <span className="Legal-Text">
                  The Below information is used to populate your documents
                </span>
              </div>

              <div className="Corporate-Form-Section">
                <div className="Corporate-Container">
                  <div className="Coperate-left-side">
                    <div className="Corporate-Form">
                      <span className="Corporate-Form-Title">
                        Limited Company
                      </span>
                    </div>
                    <div className="Corporate-Form">
                      <span className="Corporate-Form-Title">
                        C-Corporation
                      </span>
                    </div>
                    <div className="Corporate-Form">
                      <span className="Corporate-Form-Title">
                        Professional Corporation
                      </span>
                    </div>
                    <div className="Corporate-Form">
                      <span className="Corporate-Form-Title">
                        Limited Liability Limited Partnership
                      </span>
                    </div>
                    <div className="Corporate-Form">
                      <span className="Corporate-Form-Title">
                        Limited Liability Partnership
                      </span>
                    </div>
                    <div className="Corporate-Form">
                      <span className="Corporate-Form-Title">
                        Employment Benefit Plan
                      </span>
                    </div>
                    <div className="Corporate-Form">
                      <span className="Corporate-Form-Title">
                        Limited Company
                      </span>
                    </div>
                  </div>

                  <div className="Coperate-right-side">
                    <div className="Corporate-Form">
                      <span className="Corporate-Form-Title">Sole Company</span>
                    </div>
                    <div className="Corporate-Form">
                      <span className="Corporate-Form-Title">
                        S-Corporation
                      </span>
                    </div>
                    <div className="Corporate-Form">
                      <span className="Corporate-Form-Title">
                        Limited Liability Company
                      </span>
                    </div>
                    <div className="Corporate-Form">
                      <span className="Corporate-Form-Title">Keogh Plan</span>
                    </div>
                    <div className="Corporate-Form">
                      <span className="Corporate-Form-Title">
                        Limited Partnership
                      </span>
                    </div>
                    <div className="Corporate-Form">
                      <span className="Corporate-Form-Title">Endowment</span>
                    </div>
                    <div className="Corporate-Form">
                      <span className="Corporate-Form-Title">Trust</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="Well-Menu-Buttons">
                <button className="Let-Button">Skip</button>
                <button
                  className="Well-Button"
                  onClick={() => navigate("/state")}
                >
                  {" "}
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </CoperateSide>
    </WellLayout>
  );
}

export default Coperate;
