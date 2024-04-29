import AuthLayout from "../authLayout/authLayout";
import React, { useState } from "react";
import { BsPerson } from "react-icons/bs";
import { SignSide } from "./style";
import { AiOutlineMail } from "react-icons/ai";
import { AiOutlineLock } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

export default function SignUp() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const onPasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSignup = async () => {
    const formData = {
      userName: username,
      email: email,
      password: password,
    };

    try {
      const response = await axios.post(
        "http://localhost:8080/v1/user/auth/register",
        formData
      );
      if (response.data.status == 200) {

        if(response.data.status === 200){
          const data = response.data;
          localStorage.setItem("userId", data.data.userId);
          navigate("/otp/email-confirmation");
        }
       
      }
    } catch (error) {
      console.error('Error during login:', error);
      alert("Login faild due to wrong email password")
    }
  };



  return (
    <>
      <AuthLayout>
        <SignSide>
          <div className="ContactFormSide">
            <h1 className="Contact">Sign Up for an Account</h1>
            <div className="Sign-Form-Section">
              <form className="Sign-Form" >
                <div className="FormBox">
                  <BsPerson className="FormIcon" />
                  <input
                    className="NameBox"
                    type="name"
                    placeholder="Username"
                    value={username}
                    onChange={handleUsernameChange}
                  />
                </div>

                <div className="FormBox">
                  <AiOutlineMail className="FormIcon" />
                  <input
                    className="NameBox"
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={handleEmailChange}
                  />
                </div>

                <div className="FormBox">
                  <AiOutlineLock className="FormIcon" />
                  <input
                    className="NameBox"
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={onPasswordChange}
                  />
                </div>
                <div className="Form-Text">
                  <span className="Character-Text">
                    Your password must have at least 8 characters
                  </span>
                  <div className="Privacy-Section">
                    <p className="Privacy-Text">
                      By creating an account means you agree to the{" "}
                      <strong>Terms & Conditions</strong> and our{" "}
                      <strong>Privacy Policy</strong>
                    </p>
                  </div>
                </div>
              </form>
            </div>
            <div className="Sign-Button-Section">
              <button
                className="Sign-UP-Button" onClick={handleSignup}
              >
                Submit
              </button>
            </div>
            <div className="Log-text-Section">
              <span className="log-Text">Already have an account? </span>
              <span className="Log" onClick={() => navigate("/login")}>
                Log In
              </span>
            </div>
          </div>
        </SignSide>
      </AuthLayout>
    </>
  );
}
