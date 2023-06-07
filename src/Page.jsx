import React from "react";
import { Navbar, Nav } from "react-bootstrap"; //We want to use active state
import Contents from "./Contents.jsx";

function NavigationBar() {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="/">EmployeeSoft</Navbar.Brand>
      <Nav>
        <Nav.Link href="/employees">All Employees</Nav.Link>
        <Nav.Link href="/report">Reports</Nav.Link>
      </Nav>
    </Navbar>
  );
}
export default function Page() {
  return (
    <div>
      <NavigationBar />
      <Contents />
    </div>
  );
}
