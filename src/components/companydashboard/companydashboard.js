import React from "react";

import { DashboardSide } from "./style";
import SidebarLayout from "../siderbarLayout/sidebar";
import Mytodo from "../mytodo/mytodo";

function Companydashboard({ children }) {
  return (
    <DashboardSide>
      <div className="container">
        <SidebarLayout />

        <Mytodo>{children}</Mytodo>
      </div>
    </DashboardSide>
  );
}

export default Companydashboard;
