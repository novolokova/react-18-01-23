import React from "react";
import { Outlet } from "react-router-dom";

// Outlet - замінна частина
function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <Outlet />
      <p>***********</p>
      <p>description common</p>
    </div>
  );
}

export default Dashboard;
