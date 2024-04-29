import React from "react";
import { StatsStyle } from "./style";
import SidebarLayout from "../../components/usersidebar/usersidebar";
import { BsArrowLeftCircle } from "react-icons/bs";
import { AiOutlineLock } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
import { FaSignature } from "react-icons/fa";
import { FiDatabase } from "react-icons/fi";
import { MdRoomPreferences } from "react-icons/md";
import { useNavigate } from "react-router-dom";

function Stats() {
  const navigate = useNavigate();
  return (
    <StatsStyle>
      <div className="userlayout">
        <SidebarLayout />

        <div className="Minibar">
          <div className="Data-Section-Menu">
            <div className="Data-Menu-Container">
              <div className="Mytodo-Title-section">
                <span className="Mytodo-Title">
                  {" "}
                  <BsArrowLeftCircle
                    className="Account-Logo"
                    onClick={() => navigate("/userlayout")}
                  />
                  My Account
                </span>
                <div className="Account-Button-Section">
                  <button
                    className="Account-Button"
                    onClick={() => navigate("/userlayout")}
                  >
                    Save
                  </button>
                </div>
              </div>
              <div className="Account-Container">
                <div className="Folder-section">
                  <div className="Folder-Pages">
                    <span className="Folder-Page-Title">
                      <BsPerson className="Folder-Icon" />
                      My Details
                    </span>
                    <span className="Folder-Page-Title">
                      <AiOutlineMenu className="Folder-Icon" />
                      Options
                    </span>
                    <span className="Folder-Page-Title">
                      <AiOutlineMail className="Folder-Icon" />
                      Invitations
                    </span>
                    <span className="Folder-Page-Title">
                      <FaSignature className="Folder-Icon" />
                      My Signature
                    </span>
                    <span className="Folder-Page-Title">
                      <FiDatabase className="Folder-Icon" />
                      My Subscription
                    </span>
                    <span className="Folder-Page-Title">
                      <AiOutlineLock className="Folder-Icon" />
                      Change Password
                    </span>
                    <span className="Folder-Page-Title">
                      <MdRoomPreferences className="Folder-Icon" />
                      Change Timezone
                    </span>
                  </div>
                </div>
                <div className="Data-Section">
                  <div className="Data-Container">
                    <div className="Sign-Form-Section">
                      <form className="Sign-Form">
                        <div className="FormBox">
                          <label for="Company">First-Name</label>
                          <input
                            className="NameBox"
                            type="Name"
                            placeholder="First Name"
                          />
                        </div>
                        <div className="FormBox">
                          <label for="Company">Last-Name</label>
                          <input
                            className="NameBox"
                            type="Email"
                            placeholder="Last Name "
                          />
                        </div>
                      </form>
                    </div>
                    <div className="Data-Box-Container">
                      <div className="DataBox">
                        <label for="Company">Phone</label>
                        <input
                          className="NameBox"
                          type="Name"
                          placeholder="+998765432192"
                        />
                      </div>
                    </div>
                    <div className="Street-Data-Section">
                      <form className="Street-Data-Container">
                        <div className="Data-Box">
                          <label for="Company">Street Address</label>
                          <input
                            className="Data-Name-Box"
                            type="Name"
                            placeholder="ABC, Street # 2, near City Town, Rahim Yar Khan"
                          />
                        </div>
                        <div className="Data-Box">
                          <label for="Company">Street Address Line 2</label>
                          <input
                            className="Data-Name-Box"
                            type="Email"
                            placeholder="ABC, Street # 2, near City Town, Rahim Yar Khan "
                          />
                        </div>
                        <div className="City-Adress">
                          <div className="City-State-Box">
                            <label className="Title-box">City</label>
                            <div className="Address-Box">
                              <input
                                className="addressBox"
                                type="City"
                                placeholder="Rahim Yar Khan"
                              />
                            </div>
                            <label className="Title-box">Zip</label>
                            <div className="Address-Box">
                              <input
                                className="addressBox"
                                type="ZIP"
                                placeholder="64200"
                              />
                            </div>
                          </div>
                          <div className="City-State-Box">
                            <label className="Title-box">State</label>
                            <div className="Address-Box">
                              <input
                                className="addressBox"
                                type="state"
                                placeholder="Punjab"
                              />
                            </div>
                            <label className="Title-box">Country</label>
                            <div className="Address-Box">
                              <input
                                className="addressBox"
                                type="state"
                                placeholder="Pakistan"
                              />
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </StatsStyle>
  );
}

export default Stats;
