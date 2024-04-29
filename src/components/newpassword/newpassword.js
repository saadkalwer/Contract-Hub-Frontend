import AuthLayout from "../authLayout/authLayout";
import React from "react";
import { useNavigate } from "react-router-dom";
import { ChangeSide } from "./style";
import { AiOutlineMail } from "react-icons/ai";
import { AiOutlineLock } from "react-icons/ai";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { useState } from "react";
import axios from "axios";

export default function SignUp() {
  const [newPassword, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = async () => {
    try {
  
      if(newPassword === confirmPassword){
        const userId = localStorage.getItem('userId');
        // Define the formData object
        const formData = {
          userId,
          newPassword,
        };
  
        console.log(formData); // Now you can log the formData after it's defined
  
        const response = await axios.post(
          "http://localhost:8080/v1/user/auth/reset-password",
          formData
        )
  
        if (response.data.status === 200) {
          const data = response.data;
          // console.log("data " + data)
          // localStorage.setItem("token", data.data.authToken);
          navigate("/login");
        }
      }else{
        alert("password and confirm password must be same");
      }
     

    } catch (error) {
      console.error("Error during login:", error);
      alert("Password can not changed");
    }
  };

  return (
    <>
      <AuthLayout>
        <ChangeSide>
          <div className="ContactFormSide">
            <div className="Welcome-Section">
              <h1 className="Contact">Reset Your Password</h1>
              <span className="Welcome-Text">
                Don't Worry! We are Here to Help You
              </span>
            </div>

            <div className="Sign-Form-Section">
              <form className="Sign-Form">
                <div className="FormBox">
                  <AiOutlineLock className="FormIcon" />
                  <input
                    className="NameBox"
                    type="Password"
                    placeholder="New Password"
                    onChange={handlePasswordChange}
                  />{" "}
                  <AiOutlineEyeInvisible className="EyeIcon" />
                </div>

                <div className="FormBox">
                  <AiOutlineLock className="FormIcon" />
                  <input
                    className="NameBox"
                    type="Password"
                    placeholder="Confirm Password"
                    onChange={handleConfirmPasswordChange}
                  />{" "}
                  <AiOutlineEyeInvisible className="EyeIcon" />
                </div>
              </form>
            </div>
            <div className="Sign-Button-Section">
              <button
                className="Sign-UP-Button"
                onClick={handleSubmit}
              >
                Reset Password
              </button>
            </div>
          </div>
        </ChangeSide>
      </AuthLayout>
    </>
  );
}
