import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg"
        style={{ backgroundColor: "#2e8b57" }}
      >
        <div className="container-fluid">
          <a
            className="navbar-brand"
            href="#"
            style={{ color: "#2f2f2f", fontWeight: "600" }}
          >
            MyApp
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            style={{ borderColor: "#2f2f2f" }}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  to="/"
                  style={{ color: "#2f2f2f" }}
                >
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/about"
                  style={{ color: "#2f2f2f" }}
                >
                  About
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/service"
                  style={{ color: "#2f2f2f" }}
                >
                  Services
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/contact"
                  style={{ color: "#2f2f2f" }}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Bootstrap JS */}
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
    </>
  );
};

export default Navbar;
