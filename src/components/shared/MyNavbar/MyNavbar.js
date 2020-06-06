import React from 'react';
import { NavLink as RRNavLink } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import firebase from 'firebase/app';
import 'firebase/auth';

import './MyNavbar.scss';

class MyNavbar extends React.Component {
  state = {
    isOpen: false,
  }

  logMeOut = (e) => {
    e.preventDefault();
    firebase.auth().signOut();
  }

  toggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    const { isOpen } = this.state;

    const buildNavbar = () => {
      const { authed } = this.props;
      if (authed) {
        return (
          <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink tag={RRNavLink} to='/home'>Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={RRNavLink} to='/new'>New Stuff </NavLink>
          </NavItem>
          <NavItem>
            <NavLink onClick={this.logMeOut}>Logout</NavLink>
          </NavItem>
        </Nav>
        );
      }
      return <Nav className="ml-auto" navbar></Nav>;
    };
    return (
      <div className="myNavbar">
         <Navbar color="light" light expand="md">
          <NavbarBrand href="/">React Hoarder </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={isOpen} navbar>
          {buildNavbar()}
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default MyNavbar;
