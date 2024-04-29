import AuthLayout from "../authLayout/authLayout";
import React from "react";
import { ForgetSide } from "./style";
import { AiOutlineMail } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function Forget() {
 
  const navigate = useNavigate();

  const [email, setEmail] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const forgetPassword = async () => {
    const formData = {
      email,
    };

    // try {
      const response = await axios.post(
        "http://localhost:8080/v1/user/auth/forgetPassword",
        formData
      );
      if (response.data.status == 201) {
        const userId = response.data.data.userId;
        console.log("data.data.userId" + userId)

        localStorage.setItem('userId', userId);

        navigate("/otp/password-reset"); 
  
      }
    // } catch (error) {
    //   console.error("Error during login:", error);
    //   alert("Otp not send");
    // }
  };

  return (
    <>
      <AuthLayout>
        <ForgetSide>
          <div className="ContactFormSide">
            <div className="Welcome-Section">
              <h1 className="Contact">Reset your password</h1>
              <span className="Link-Text">
                Enter the email address associated with your account and we will
                send you a link to reset your password.
              </span>
            </div>

            <div className="Sign-Form-Section">
              <form className="Sign-Form">
                <div className="FormBox">
                  <AiOutlineMail className="FormIcon" />
                  <input
                    className="NameBox"
                    type="Email"
                    placeholder="Email"
                    onChange={handleEmailChange}
                  />
                </div>
              </form>
            </div>
            <div className="Sign-Button-Section">
              <button
                className="Sign-UP-Button"
                onClick={forgetPassword}
              >
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
        </ForgetSide>
      </AuthLayout>
    </>
  );
}
