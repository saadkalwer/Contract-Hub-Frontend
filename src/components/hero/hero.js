import React from "react";
import { HeroSection } from "./style";
import person1 from "../../image/unplash1.jpg";
import person2 from "../../image/unplash2.jpg";
import handshake from "../../image/handshake.jpg";
import person3 from "../../image/unplash3.jpg";

import { useNavigate } from "react-router-dom";

function HeroSide() {
  const navigate = useNavigate();
  return (
    <HeroSection>
      <div className="Home-Page-Section">
        <div className="Home-Section">
          <div className="Digitize-Section">
            <h1 className="Digitize-Title">
              Digitize Your <br /> Documents Process
            </h1>
            <p className="Digitize-Text">
              Contract Management simplified. <br />
              The Contract hepls teams generate,approve,eSign,and manage, <br />
              documents about 80% faster.
            </p>
            <button
              className="Digitize-Button"
              onClick={() => navigate("/signin")}
            >
              Sign Up
            </button>
          </div>
          <div className="Header-Section">
            <div className="Individual-Section">
              <span className="Individual-Title">individual</span>
              <p className="Individual-Text">
                Create a New Account <br />
                as an individual and send receive <br />
                Documents
              </p>
            </div>
            <div className="Individual-Section">
              <span className="Individual-Title">Company</span>
              <p className="Individual-Text">
                Create a New Account <br />
                as a Team or Business and send <br />
                receive Documents
              </p>
            </div>
          </div>
        </div>
        <div className="Digitize-Image-Section">
          <img className="person1" src={person1} alt="" />
          <img className="person2" src={person2} alt="" />
          <img className="Hand" src={handshake} alt="" />
          <img className="person3" src={person3} alt="" />
        </div>
      </div>
    </HeroSection>
  );
}
export default HeroSide;
