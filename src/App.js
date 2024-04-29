import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/homepage/homepage";
import Login from "./components/login/login";

import "./App.css";
import SignUp from "./components/sign-up/signup";
import Forget from "./components/forget/forget";
import Welcome from "./components/Welcome/welcome";
import Letsdoit from "./components/letsdoit/letsdoit";
import Document from "./components/document/document";
import Company from "./components/company/company";
import Coperate from "./components/coperate/coperate";
import State from "./components/state/state";
import Ready from "./components/ready/ready";
import CompanyDashboard from "./components/companydashboard/companydashboard";
import OtpSection from "./components/otp/otp";
import Changepassword from "./components/newpassword/newpassword";
import Mytodopage from "./components/mytodo/mytodo";
import Dashboard from "./pages/Dashboard/Dashboard";
import Documents from "./pages/Document/Document";
import DataSide from "./components/data/data";
import UserLayout from "./pages/userLayout/userLayout";
import UserDashboard from "./components/userdashboard/userdashboard";
import CompleteSection from "./components/completeSection/complete";
import TrashSection from "./components/trashSection/trash";
import StatsSection from "./components/statsSection/stats";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />

        <Route path="/signin" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forget" element={<Forget />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/letdoit" element={<Letsdoit />} />
        <Route path="/documents" element={<Document />} />
        <Route path="/company" element={<Company />} />
        <Route path="/coperate" element={<Coperate />} />
        <Route path="/state" element={<State />} />
        <Route path="/ready" element={<Ready />} />
        <Route path="/companydashboard" element={<CompanyDashboard />} />
        <Route path="/otp/:type" element={<OtpSection />} />
        <Route path="/changepassword" element={<Changepassword />} />
        <Route path="/mytodo" element={<Mytodopage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/document" element={<Documents />} />
        <Route path="/dataside" element={<DataSide />} />
        <Route path="/userlayout" element={<UserLayout />} />
        <Route path="/userdashboard" element={<UserDashboard />} />
        <Route path="/complete" element={<CompleteSection />} />
        <Route path="/trash" element={<TrashSection />} />
        <Route path="/stats" element={<StatsSection />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
