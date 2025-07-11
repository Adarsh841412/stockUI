import React from "react";
import { Link } from "react-router-dom";




function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg bg-body-tertiary border-bottom"
      style={{ backgroundColor: "#fff" }}
    >
      <div className="container px-5">
        <Link className="navbar-brand px-5" to="/">
          <img
            style={{ width: "45%" }}
            src="media/images/logo1.svg"
            alt="logo"
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse px-5" id="navbarSupportedContent">
          <form className="d-flex px-5" role="search">
            <ul className="navbar-nav mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" to="/signup">
                  Signup
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/products">
                  Products
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/pricing">
                  Pricing
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/support">
                  Support
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/menu">
                  <i className="fa fa-bars" aria-hidden="true"></i>
                </Link>
              </li>
            </ul>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
