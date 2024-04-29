import React from "react";
import { FooterSide } from "./style";
import { FiTwitter } from "react-icons/fi";
import { AiFillFacebook } from "react-icons/ai";
import { FiInstagram } from "react-icons/fi";
import { FooterArray } from "../../array";
import { MdOutlineEmail } from "react-icons/md";
import { FiPhone } from "react-icons/fi";

function Foot() {
  return (
    <FooterSide>
      <div className="Footer-Main-Section">
        <div className="Footer-Container">
          <div className="ContactLinks">
            <p className="Contact-Link-Text">
              Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit,
              sed do eiusmod tempor.
            </p>
            <div className="Social-Logo-Section">
              <FiInstagram className="Social-Logo" />
              <FiTwitter className="Social-Logo" />
              <AiFillFacebook className="Social-Logo" />
            </div>
          </div>
          {FooterArray.map((item, index) => (
            <div className="ProductSection" key={index}>
              <div className="PublicMainSection">
                <span className="Public-Title">{item.name}</span>
                <span className="Public-Text">{item.desc}</span>
                <span className="Public-Text">{item.title}</span>
                <span className="Public-Text">{item.text}</span>
                <span className="Public-Text">{item.sale}</span>
              </div>
            </div>
          ))}

          <div className="Contact-Side">
            {" "}
            <span className="Contact-Title">Contact</span>
            <div className="Contact-Text-Section">
              <p className="Contact-Text">
                Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit,
                sed do eiusmod tempor.{" "}
              </p>
            </div>
            <div className="Number-Section">
              <span className="Number">
                {" "}
                <FiPhone className="Number-logo" />
                +1234567890
              </span>
              <span className="Email">
                {" "}
                <MdOutlineEmail className="Email-logo" />
                wassi.ahsan@builtinsoft.com
              </span>
            </div>
          </div>
        </div>
        <div className="Copy-Right-Section">
          <span className="Copy-Right-Text">
            Copyright © 2023 The Contracts. All Right Reserved
          </span>
          <span className="Copy-Right-Text"> EN ID</span>
        </div>
      </div>
    </FooterSide>
  );
}

export default Foot;
