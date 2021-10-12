import React, { Component } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from "reactstrap";

import { Link } from "react-router-dom";

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isNavOpen: false,
    };
  }

  toggle = () => {
    this.setState({
      isNavOpen: !this.state.isNavOpen,
    });
  };

  render() {
    return (
      <Navbar color="light" light expand="md">
          <NavbarBrand href="/">reactstrap</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isNavOpen} navbar>
              <Nav className="mr-auto" navbar>
                  <NavItem>
                      <Link to='/' className="nav-link active" >Home</Link>
                  </NavItem>
                  <NavItem>
                      <Link to='/book' className="nav-link" >Book</Link>
                  </NavItem>
                  <NavItem>
                      <Link to='/menu' className="nav-link" >Menu</Link>
                  </NavItem>
                  <NavItem>
                      <Link to='/about' className="nav-link" >About</Link>
                  </NavItem>
              </Nav>
          </Collapse>
      </Navbar>
    );
  }
}
export default Navigation;
