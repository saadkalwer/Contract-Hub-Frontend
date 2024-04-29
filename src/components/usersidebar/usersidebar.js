import React from "react";
import { UserSide } from "./style";

import Sidelogo from "../../image/THE CONTRACTS.png";

import uploadlogo from "../../image/Upload.png";
import { VscAccount } from "react-icons/vsc";
import { BsHeadset } from "react-icons/bs";
import { GrLogout } from "react-icons/gr";
import { useNavigate } from "react-router-dom";

export default function UserSidebar() {
  const navigate = useNavigate();
  return (
    <>
      <UserSide>
        <div className="Dashboard ">
          <div className="Dashboard-Container">
            <div className="Side-bar-Logo">
              <img className="Side-logo" src={Sidelogo} alt="" />
            </div>

            <div className="Document-Section">
              <img className="Document-Logo" src={uploadlogo} alt="" />{" "}
              <div className="Document-Section">
                <span className="Documnt-Title">
                  Upload <span className="Document-Title1">Document</span>
                </span>

                <span className="Documnt-Title">
                  to <strong>Pakistan LLC</strong>
                </span>
                <span className="Documnt-Title">Dashboard</span>
              </div>
            </div>
            <div className="Dashboard-Wrapper">
              <span
                className="Dashboard-Title"
                onClick={() => navigate("/stats")}
              >
                {" "}
                <VscAccount className="Dashboard-Icon" /> My Account
              </span>
              <span className="Dashboard-Title">
                {" "}
                <BsHeadset className="Dashboard-Icon" />
                Suppport
              </span>
              <span className="Dashboard-Title">
                {" "}
                <GrLogout className="Dashboard-Icon" />
                Logout
              </span>
            </div>
            <div className="Version-Section">
              <span className="Version-Text">The Contract v2.6.00</span>
            </div>
          </div>
        </div>
      </UserSide>
    </>
  );
}
