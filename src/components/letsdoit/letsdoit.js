import React from "react";
import WellLayout from "../welLayout/welLayout";
import { useNavigate } from "react-router-dom";
import { LetsSide } from "./style";

function Welcome() {
  const navigate = useNavigate();
  return (
    <WellLayout>
      <LetsSide>
        <div className="Lets-Section">
          <div className="Lets-Container">
            <div className="Let-Menu-All-Text">
              <div className="Lets-Menu">
                <span className="Well-Title">🏠 What is your Address?</span>
                <div className="Lets-TextSecction">
                  <p className="Let-Text">
                    The Below information is used to populate <br /> your
                    Documents
                  </p>
                </div>
              </div>
              <div className="Street-Address-Box">
                <div className="FormBox">
                  <input
                    className="NameBox"
                    type="address"
                    placeholder="Street Address"
                  />
                </div>
                <div className="FormBox">
                  <input
                    className="NameBox"
                    type="address"
                    placeholder="Street Address 2"
                  />
                </div>
                <div className="City-Adress">
                  <div className="City-State-Box">
                    <div className="FormBox">
                      <input
                        className="addressBox"
                        type="City"
                        placeholder="City"
                      />
                    </div>
                    <div className="FormBox">
                      <input
                        className="addressBox"
                        type="ZIP"
                        placeholder="ZIP"
                      />
                    </div>
                  </div>
                  <div className="City-State-Box">
                    <div className="FormBox">
                      <input
                        className="addressBox"
                        type="state"
                        placeholder="State"
                      />
                    </div>
                    <div className="FormBox">
                      <input
                        className="addressBox"
                        type="state"
                        placeholder="State"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="Well-Menu-Buttons">
                <button
                  className="Let-Button"
                  onClick={() => navigate("/documents")}
                >
                  Skip
                </button>
                <button
                  className="Well-Button"
                  onClick={() => navigate("/documents")}
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </LetsSide>
    </WellLayout>
  );
}

export default Welcome;
