import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Nav, Navbar, NavItem, NavbarBrand, NavbarToggler, Collapse } from 'reactstrap';
import { IoLogoWebComponent } from 'react-icons/io5';
import 'bootstrap/dist/css/bootstrap.min.css';

import "./Navigation.css"

function Navigation () {

  const [collapsed, setCollapsed] = useState(false);

  function toggleNavbar() {
    setCollapsed(!collapsed);
  };

  return (
    <div className="Navigation">
      <Navbar expand="md">
        <NavbarBrand className="me-auto">
          <Link to="/" >
            <IoLogoWebComponent size={40} />
          </Link>
        </NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="custom-toggler" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar className="mx-auto">
            <NavItem>
              <NavLink to="/about">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/projects">Projects</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/contact">Contact</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
        {/* <Button className="resume-btn" outline>
          Resume
        </Button> */}
        {/* TODO: Link to resume, make it open a new tab */}
        <a className="btn btn-border-1" href="/">Resume</a>
      </Navbar>
    </div>
  );
}

export default Navigation;