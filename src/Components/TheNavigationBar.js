import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import "./TheNavigationBar.css";
import Cabir_logo from "../Resources/Images/Cabir_Logo.svg";
import reserve from "../Resources/Images/reserve.svg";
import side_close from "../Resources/Images/side_close.svg";
import phone from "../Resources/Images/phone.svg";
function TheNavigationBar() {
  return (
    <Navbar collapseOnSelect expand="lg" className="Navabr_Wrapper">
      <Navbar.Brand href="#home">
        <img src={Cabir_logo} alt="..." />
      </Navbar.Brand>
      <Navbar.Toggle
        aria-controls="responsive-navbar-nav"
        className="responsive-navbar-nav"
      />
      <Navbar.Collapse
        id="responsive-navbar-nav"
        className="responsive-navbar-nav"
      >
        <Nav className="mx-auto ">
          <Nav.Link
            href="#features"
            className="homepage-middlelist-wrapeer first-child-middle-list"
          >
            ETKİNLİKLER
          </Nav.Link>
          <Nav.Link href="#pricing" className="homepage-middlelist-wrapeer">
            Spa
          </Nav.Link>
          <Nav.Link href="#pricing" className="homepage-middlelist-wrapeer">
            Hotel
          </Nav.Link>
          <Nav.Link href="#pricing" className="homepage-middlelist-wrapeer">
            Odalar
          </Nav.Link>
          <Nav.Link href="#pricing" className="homepage-middlelist-wrapeer">
            İLETİŞİM
          </Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link className="homepage-middlelist-wrapeer first-child-middle-list">
            <img src={reserve} alt="..." />
            Rezervasyon
          </Nav.Link>
          <Nav.Link className="homepage-middlelist-wrapeer first-child-middle-list">
            <img src={phone} alt="..." /> +90 264 289 58 00
          </Nav.Link>
          <Nav.Link id="side-close">
            <img src={side_close} alt="..." />
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default TheNavigationBar;
