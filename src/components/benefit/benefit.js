import React from "react";
import { BenefitSection } from "./style";
import yellow1 from "../../image/Yellow.jpg";
import yellow2 from "../../image/yellow2.jpg";
import yellow3 from "../../image/assurance.jpg";

function Benfit() {
  return (
    <BenefitSection>
      <div className="Benefit-Section">
        <div className="Benefit-Container">
          <div className="Text-Section">
            <h1 className="Benefit-Title">Benefits To Choose Us!</h1>
            <p className="Cosmetic-Text">
              Inspired by hydration and Japan’s beauty rituals, Ehya Cosmetics
              focuses on the core elements <br /> of skincare to combine
              powerful ingredients backed by science and authentically.
            </p>
          </div>
          <div className="Benfits">
            <div className="Benefit-1">
              <img className="benefit-images" src={yellow1} alt="" />
              <span className="Benfit-Title">Benefit 1</span>
              <p className="Benefit-Text">
                Lorem ipsum dolor sit amet,
                <br /> consectetur adipiscing elit.
                <br /> Congue amet aenean sed enim <br /> odio.
              </p>
            </div>
            <div className="Benefit-1">
              <img className="benefit-images" src={yellow3} alt="" />
              <span className="Benfit-Title">Benefit 2</span>
              <p className="Benefit-Text">
                Lorem ipsum dolor sit amet,
                <br /> consectetur adipiscing elit. <br />
                Congue amet aenean sed enim <br />
                odio.
              </p>
            </div>
            <div className="Benefit-1">
              <img className="benefit-images" src={yellow2} alt="" />
              <span className="Benfit-Title">Benefit 3</span>
              <p className="Benefit-Text">
                Lorem ipsum dolor sit amet,
                <br /> consectetur adipiscing elit. <br />
                Congue amet aenean sed enim <br />
                odio.
              </p>
            </div>
          </div>
        </div>
      </div>
    </BenefitSection>
  );
}

export default Benfit;
