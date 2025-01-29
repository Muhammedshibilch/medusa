import React, { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { FaPhone, FaMapMarkerAlt, FaInstagram, FaFacebook, FaBars } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const location = useLocation();

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
    <div style={{backgroundColor:"black", opacity:"0.8"}}>
      {/* Small top header (hidden on mobile, visible only inside the modal) */}
      <div
  className="top-header d-none d-lg-flex justify-content-center align-items-center px-5 py-2"
  style={{
    backgroundColor: "black",
    color: "white",
    fontSize: "14px",
    gap: "30px",
    opacity: "0.8",
  }}
>
  <div className="d-flex align-items-center">
    <FaPhone className="me-2" style={{ color: "red" }} />
    <span>(0) 0000000000</span>
  </div>

  <div className="d-flex align-items-center">
    <FaMapMarkerAlt style={{ color: "red" }} className="me-2" />
    <span>282 81827 Munich</span>
  </div>

  <div className="d-flex align-items-center">
    <a
      href="https://www.instagram.com/medusasportwagen"
      target="_blank"
      rel="noopener noreferrer"
      className="me-3"
    >
      <FaInstagram style={{ color: "red" }} />
    </a>
    <a
      href="https://www.facebook.com/people/MEDUSA-Sportwagen-GmbH/100070057459539/?ref=ts&fref=ts"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaFacebook style={{ color: "red" }} />
    </a>
  </div>
</div>

      <hr style={{ color: "white", width: "75%", margin: "auto" }} />


      {/* Main header with logo and nav */}
      <Navbar expand="lg" className="px-5" variant="dark" style={{ backgroundColor:"black", opacity:"0.8"  }}>
        <Container className="d-flex justify-content-between align-items-center">
          {/* Logo aligned to the left */}
          <Navbar.Brand href="#home" className="logo me-5">
            <img
              src="https://medusa-sportwagen.de/wp-content/uploads/2024/04/Logo-MEDUSA-SPORTWAGEN-GmbH-weiss-3000x800px.png.webp"
              alt="Medusa Sportwagen"
              height="40px"
              width={"300px"}
              className="img-fluid"
            />
          </Navbar.Brand>
          {/* Toggle button aligned to the right */}
          <div className="d-lg-none mb-3">
            <FaBars style={{ color: "white", fontSize: "24px" }} onClick={toggleModal} />
          </div>
          <Nav className="d-none d-lg-flex mx-auto">
            <Link to="/" className={`nav-link ${location.pathname === "/" ? "active" : ""}`}>
              HOME
            </Link>
            <Link to="/vehicles" className={`nav-link ${location.pathname === "/vehicles" ? "active" : ""}`}>
             FAHRZEUGE
            </Link>
            <Link to="/performance" className={`nav-link ${location.pathname === "/performance" ? "active" : ""}`}>
            LEISTUNGEN
            </Link>
            <Link to="/contact" className={`nav-link ${location.pathname === "/contact" ? "active" : ""}`}>
             KONTAKT
            </Link>
          </Nav>
        </Container>
      </Navbar>

      {/* Side Modal for mobile navigation */}
      {isModalOpen && (
        <div className="side-modal">
          <div className="modal-header">
            <span onClick={toggleModal} className="close-btn">
              &times;
            </span>
          </div>
          {/* Small header inside the modal */}
          <div className="small-header p-3">
            <div className="mb-3">
              <FaPhone className="me-2" style={{ color: "red" }} /> (0) 89 568 266 31
            </div>
            <div className="mb-3">
              <FaMapMarkerAlt style={{ color: "red" }} className="me-2" /> 282 81827 Munich
            </div>
            <div>
              <a href="https://www.instagram.com/medusasportwagen" target="_blank" rel="noopener noreferrer">
                <FaInstagram style={{ color: "red" }} className="me-3" />
              </a>
              <a
                href="https://www.facebook.com/people/MEDUSA-Sportwagen-GmbH/100070057459539/?ref=ts&fref=ts"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook style={{ color: "red" }} />
              </a>
            </div>
          </div>
          <hr style={{ color: "white" }} />
          <Nav className="flex-column p-3">
            <Link to="/" className={`nav-link ${location.pathname === "/" ? "active" : ""}`} onClick={toggleModal}>
              HOME
            </Link>
            <Link to="/vehicles" className={`nav-link ${location.pathname === "/vehicles" ? "active" : ""}`} onClick={toggleModal}>
            FAHRZEUGE
            </Link>
            <Link to="/performance" className={`nav-link ${location.pathname === "/performance" ? "active" : ""}`} onClick={toggleModal}>
             LEISTUNGEN
            </Link>
            <Link to="/contact" className={`nav-link ${location.pathname === "/contact" ? "active" : ""}`} onClick={toggleModal}>
            KONTAKT
            </Link>
          </Nav>
        </div>
      )}
      </div>
    </>
  );
};

export default Header;
