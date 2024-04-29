import React from "react";
import { TemplateSide } from "./style";
import Templateimg from "../../image/cuate.jpg";
import templatelogo from "../../image/line.jpg";
import Stars from "../../image/Group.jpg";

function Customer() {
  return (
    <TemplateSide>
      <div className="Turbo-Main-Section">
        <div className="Turbo-Container">
          <img className="Template-images" src={Templateimg} alt="" />
          <div className="Turbo-Text-Section">
            <div className="TemplateText-Side">
              <img className="Template-Logo" src={templatelogo} alt="" />
              <h1 className="Turbo-Title">
                Free Templates
                <img className="Template-Logo1" src={Stars} alt="" />{" "}
              </h1>{" "}
              <p className="Turbo-Text">
                Ready to think Smart about global procurement?.
              </p>
            </div>

            <div className="Template-Text-Section">
              <p className="Turbo-Text">
                We are innovative thinkers in global outsourcing. Our Smart
                Request for <br /> Quotation (RFQ) integrates
                <br /> blockchain technology and artificial intelligence to
                bring your <br /> requirement from anywhere.
              </p>
            </div>
            <div className="Template-Button">
              {" "}
              <button className="Template-Button">Show Me</button>
            </div>
          </div>
        </div>
      </div>
    </TemplateSide>
  );
}

export default Customer;
