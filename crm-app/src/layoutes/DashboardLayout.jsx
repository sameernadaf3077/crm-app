import { Outlet, Link } from "react-router-dom";

function DashboardLayout() {
  return (
    <div>
      <h1>CRM Dashboard</h1>

      <nav>
        <Link to="/dashboard">Dashboard</Link> {" | "}
        <Link to="/contacts">Contacts</Link> {" | "}
        <Link to="/deals">Deals</Link> {" | "}
        <Link to="/tasks">Tasks</Link>
      </nav>

      <hr />

      <Outlet />
    </div>
  );
}

export default DashboardLayout;