import React from "react";
import WellLayout from "../welLayout/welLayout";
import { useNavigate } from "react-router-dom";
import { DocumentSide } from "./style";

function Welcome() {
  const navigate = useNavigate();
  return (
    <WellLayout>
      <DocumentSide>
        <div className="Lets-Section">
          <div className="Lets-Container">
            <div className="Let-Menu-All-Text">
              <div className="Lets-Menu">
                <p className="Well-Title">
                  Would you like to set up a<br /> Company Account?
                </p>
                <div className="Lets-TextSecction">
                  <p className="Let-Text">
                    With Company Account you have Access <br /> to:
                  </p>
                </div>
              </div>
              <div className="Document-Template-Section">
                <div className="Document-Template-Container">
                  <ul className="Document">
                    <li>
                      <span className="Document-Text"> Pre-made Template</span>
                    </li>
                    <li>
                      <span className="Document-Text">
                        {" "}
                        Create your own Templates
                      </span>
                    </li>

                    <li>
                      <span className="Document-Text">
                        Implement Team Workflows
                      </span>
                    </li>
                    <li>
                      <span className="Document-Company-Text">
                        Draft, Sign and manage Documents on behalf of a company
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="Well-Menu-Buttons">
                <button
                  className="Well-Button"
                  onClick={() => navigate("/company")}
                >
                  {" "}
                  Yes
                </button>
                <button
                  className="Let-Button"
                  onClick={() => navigate("/userlayout")}
                >
                  No, I will only be receiving documents.
                </button>
              </div>
            </div>
          </div>
        </div>
      </DocumentSide>
    </WellLayout>
  );
}

export default Welcome;
