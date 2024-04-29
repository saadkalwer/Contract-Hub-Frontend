import React from "react";
import WellLayout from "../welLayout/welLayout";
import { useNavigate } from "react-router-dom";
import { StateSide } from "./style";

function State() {
  const navigate = useNavigate();
  return (
    <WellLayout>
      <StateSide>
        <div className="Lets-Section">
          <div className="Lets-Container">
            <div className="Let-Menu-All-Text">
              <div className="Lets-Menu">
                <h2 className="Well-Title">
                  In What State was your Company Formed?
                </h2>
              </div>
              <div className="Sign-Form-Section">
                <form className="Sign-Form">
                  <div className="FormBox">
                    <label for="Company">
                      The Below information is used to populate documents.
                    </label>
                    <input
                      className="NameBox"
                      type="State"
                      placeholder="New York, Arizona, Alska etc."
                    />
                  </div>
                </form>
              </div>

              <div className="Well-Menu-Buttons">
                <button className="Let-Button">Skip</button>
                <button
                  className="Well-Button"
                  onClick={() => navigate("/ready")}
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </StateSide>
    </WellLayout>
  );
}

export default State;
