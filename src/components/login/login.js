import AuthLayout from "../authLayout/authLayout";
import React from "react";
import { useNavigate } from "react-router-dom";
import { LoginSide } from "./style";
import { AiOutlineMail } from "react-icons/ai";
import { AiOutlineLock } from "react-icons/ai";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { useState } from "react";
import axios from "axios";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async () => {
    try {
      // Define the formData object
      const formData = {
        email,
        password,
      };

      console.log(formData); // Now you can log the formData after it's defined

      const response = await axios.post(
        "http://localhost:8080/v1/user/auth/login",
        formData
      );

      console.log(response.data.status);

      if (response.data.status === 200) {
        const data = response.data;
        localStorage.setItem("userId", data.data.userId);
        navigate("/otp/email-confirmation");
      }

      if (response.data.status === 201) {
        const data = response.data;
        localStorage.setItem("token", data.data.authToken);
        navigate("/companydashboard");
      }
    } catch (error) {
      console.error("Error during login:", error);
      alert("Login failed due to wrong email or password");
    }
  };

  return (
    <>
      <AuthLayout>
        <LoginSide>
          <div className="ContactFormSide">
            <div className="Welcome-Section">
              <h1 className="Contact">Sign In to your Account</h1>
              <span className="Welcome-Text">
                Welcome back! please Enter your detail
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

                <div className="FormBox">
                  <AiOutlineLock className="FormIcon" />
                  <input
                    className="NameBox"
                    type="Password"
                    placeholder="Password"
                    value={password}
                    onChange={handlePasswordChange}
                  />
                  <AiOutlineEyeInvisible className="EyeIcon" />
                </div>
                <div className="Forget-Text-Section">
                  <span className="Character-Text">Remember me</span>
                  <span
                    className="Forget-Text"
                    onClick={() => navigate("/forget")}
                  >
                    {" "}
                    Forget Password?{" "}
                  </span>
                </div>
              </form>
            </div>
            <div className="Sign-Button-Section">
              <button className="Sign-UP-Button" onClick={handleSubmit}>
                Submit
              </button>
            </div>
            <div className="Log-text-Section">
              <span className="log-Text">Dont have an account? </span>
              <span className="Log" onClick={() => navigate("/signin")}>
                Sign up
              </span>
            </div>
          </div>
        </LoginSide>
      </AuthLayout>
    </>
  );
}
