import React, { useState, useEffect } from "react";
import { MdFingerprint } from "react-icons/md";
import { Link } from "react-router-dom";
import { FaTimes, FaBars } from "react-icons/fa";
import { Button } from "./Button";
import "./Navbar.css";
import { IconContext } from "react-icons/lib";

function Navbar() {
  const [click, setClick] = useState(false);
  const [click1, setClick1] = useState(true);
  const [click2, setClick2] = useState(false);
  const [click3, setClick3] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => {
    setClick1(!click);
  };

  const handleClick1 = () => {
    setClick1(true);
    setClick2(false);
    setClick3(false);
  };
  const handleClick2 = () => {
    setClick1(false);
    setClick2(true);
    setClick3(false);
  };
  const handleClick3 = () => {
    setClick1(false);
    setClick2(false);
    setClick3(true);
  };
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);
  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <div className="navbar">
          <div className="navbar-container container">
            <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
              <MdFingerprint className="navbar-icon" />
              LAVISH
            </Link>
            <div className="menu-icon" onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li
                className={click1 ? "nav-item active" : "nav-item"}
                onClick={handleClick1}
              >
                <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                  Home
                </Link>
              </li>
              <li
                className={click2 ? "nav-item active" : "nav-item"}
                onClick={handleClick2}
              >
                <Link
                  to="/services"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Services
                </Link>
              </li>
              <li
                className={click3 ? "nav-item active" : "nav-item"}
                onClick={handleClick3}
              >
                <Link
                  to="/products"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Products
                </Link>
              </li>
              <li className="nav-btn">
                {button ? (
                  <Link
                    to="/sign-up"
                    className="btn-link"
                    onClick={closeMobileMenu}
                  >
                    <Button buttonStyle="btn--outline">SIGN UP</Button>
                  </Link>
                ) : (
                  <Link
                    to="/sign-up"
                    className="btn-link"
                    onClick={closeMobileMenu}
                  >
                    <Button buttonStyle="btn--outline" buttonSize="btn--mobile">
                      SIGN UP
                    </Button>
                  </Link>
                )}
              </li>
            </ul>
          </div>
        </div>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
