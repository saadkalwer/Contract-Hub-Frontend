import AuthLayout from "../authLayout/authLayout";
import React from "react";
import { useLocation } from "react-router-dom";
import { OtpSide } from "./style";
import { AiOutlineLock } from "react-icons/ai";
import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function Otp() {
  const navigate = useNavigate();
  const location = useLocation();
  const { type } = useParams();

  console.log("type" + type)

  const [otp, setOtp] = useState("");
  const [isPasswordReset, setIsPasswordReset] = useState(true); 

  const handleOtpChange = (e) => {
    setOtp(e.target.value);
  };

  const userId = localStorage.getItem('userId');

  console.log("userId " + userId)

  const otpVerfied = async () => {
    const formData = {
      userId,
      otp,
    };

    try {
      const response = await axios.post(
        "http://localhost:8080/v1/user/auth/code-verfication",
        formData
      );
      if (response.data.status == 200) {
       let  data = response.data
     if(type == "email-confirmation"){
      const token = data.data.authToken

      localStorage.setItem('token', token);

     }

      if(type == "email-confirmation")  navigate("/welcome") 
      if(type == "password-reset")  navigate("/dashboard") 
    
      
      }
    } catch (error) {
      console.error("Error during login:", error);
      alert("wrong otp");
    }
  };

  return (
    <>
      <AuthLayout>
        <OtpSide>
          <div className="ContactFormSide">
            <div className="Welcome-Section">
              <h1 className="Contact">Verify Your Otp</h1>
              <span className="Link-Text">
                Dont Share Your Otp With Someone Else
              </span>
            </div>

            <div className="Sign-Form-Section">
              <form className="Sign-Form">
                <div className="FormBox">
                  <AiOutlineLock className="FormIcon" />
                  <input
                    className="NameBox"
                    type="numbers"
                    placeholder="Otp"
                    value={otp}
                    onChange={handleOtpChange}
                  />
                </div>
              </form>
            </div>
            <div className="Sign-Button-Section">
              <button className="Sign-UP-Button" onClick={otpVerfied}>
                Submit
              </button>
              <div className="Back-to-sign">
                <span className="Back-Sign" onClick={() => navigate("/signin")}>
                  Back to Sign In
                </span>
              </div>
            </div>
            <div className="Log-text-Section">
              <span className="log-Text">Dont have an account? </span>
              <span className="Log" onClick={() => navigate("/login")}>
                Sign Up
              </span>
            </div>
          </div>
        </OtpSide>
      </AuthLayout>
    </>
  );
}
