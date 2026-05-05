import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/project", label: "Project" },
    { to: "/skill", label: "Skill" },
    { to: "/services", label: "Services" },
    { to: "/contact", label: "Contact Us" },
  ];

  return (
    <>
      <style>{`
        body {
          margin: 0;
          padding-top: -px;
          background-color: #0a0a0a;
        }

      .navbar-wrapper {
       position: fixed;
       top: 0;
       left: 0;
       right: 0;
       z-index: 999;
       background-color: #000;
       border-bottom: 2px solid #0d6efd;
       padding-bottom: 10px; 
}

        .navbar-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 10px 24px;
        }

        .brand-col {
          flex: 0 0 40%;
          max-width: 40%;
        }

        .brand {
          color: #fff;
          font-size: 1.5rem;
          font-weight: 700;
          text-decoration: none;
          white-space: nowrap;
        }

        .brand span {
          color: #0d6efd;
        }

        .links-col {
          flex: 0 0 60%;
          max-width: 60%;
          display: flex;
          align-items: center;
          justify-content: flex-end;
          gap: 2px;
          flex-wrap: wrap;
        }

        .nav-link-item {
          color: #fff;
          text-decoration: none;
          padding: 6px 12px;
          border-radius: 6px;
          font-size: 0.9rem;
          background: transparent;
          border: 1px solid transparent;
          transition: all 0.2s;
          white-space: nowrap;
        }

        .nav-link-item:hover {
          color: #ddd;
          background: rgba(255,255,255,0.07);
        }

        .nav-link-item.active {
          background-color: #fff;
          color: #000 !important;
          border: 1px solid #fff;
          font-weight: 600;
        }

        .login-btn {
          background-color: #0d6efd;
          color: #fff !important;
          text-decoration: none;
          padding: 7px 20px;
          border-radius: 6px;
          font-size: 0.9rem;
          margin-left: 6px;
          transition: background 0.2s;
          white-space: nowrap;
          font-weight: 600;
        }

        .login-btn:hover {
          background-color: #0b5ed7;
          color: #fff;
        }

        .hamburger-btn {
          display: none;
          flex-direction: column;
          gap: 5px;
          background: transparent;
          border: 1px solid #555;
          border-radius: 6px;
          padding: 8px 10px;
          cursor: pointer;
        }

        .hamburger-btn span {
          display: block;
          width: 22px;
          height: 2px;
          background-color: #fff;
          transition: all 0.3s ease;
        }

        .hamburger-btn.open span:nth-child(1) {
          transform: rotate(45deg) translate(5px, 5px);
        }
        .hamburger-btn.open span:nth-child(2) {
          opacity: 0;
        }
        .hamburger-btn.open span:nth-child(3) {
          transform: rotate(-45deg) translate(5px, -5px);
        }

        .mobile-menu {
          display: none;
          flex-direction: column;
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.35s ease, padding 0.3s ease;
          background-color: #000;
          padding: 0 20px;
        }

        .mobile-menu.open {
          max-height: 500px;
          padding: 8px 20px 18px;
        }

        .mobile-nav-link {
          color: #ccc;
          text-decoration: none;
          padding: 12px 10px;
          font-size: 0.95rem;
          border-bottom: 1px solid #1a1a1a;
          transition: all 0.2s;
        }

        .mobile-nav-link:hover {
          color: #fff;
          padding-left: 16px;
        }

        .mobile-nav-link.active {
          color: #000;
          background-color: #fff;
          border-radius: 6px;
          padding-left: 12px;
          font-weight: 600;
        }

        .mobile-login-btn {
          background-color: #0d6efd;
          color: #fff;
          text-decoration: none;
          padding: 11px;
          border-radius: 6px;
          font-size: 0.95rem;
          text-align: center;
          margin-top: 12px;
          display: block;
          font-weight: 600;
          transition: background 0.2s;
        }

        .mobile-login-btn:hover {
          background-color: #0b5ed7;
          color: #fff;
        }

        @media (max-width: 768px) {
          .hamburger-btn {
            display: flex;
          }
          .links-col {
            display: none;
          }
          .mobile-menu {
            display: flex;
          }
          .brand-col {
            flex: 1;
            max-width: 100%;
          }
          .navbar-inner {
            padding: 12px 16px;
          }
        }
      `}</style>

      <nav className="navbar-wrapper">
        <div className="navbar-inner">
          <div className="brand-col">
            <NavLink to="/" className="brand" onClick={closeMenu}>
              Mohammad <span>Amir</span>
            </NavLink>
          </div>

          <button
            className={`hamburger-btn ${isOpen ? "open" : ""}`}
            onClick={toggleMenu}
            aria-label="Toggle navigation"
          >
            <span />
            <span />
            <span />
          </button>

          <div className="links-col">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                className={({ isActive }) =>
                  `nav-link-item ${isActive ? "active" : ""}`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <NavLink to="/login" className="login-btn">
              Login
            </NavLink>
          </div>
        </div>

        <div className={`mobile-menu ${isOpen ? "open" : ""}`}>
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              onClick={closeMenu}
              className={({ isActive }) =>
                `mobile-nav-link ${isActive ? "active" : ""}`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <NavLink to="/login" className="mobile-login-btn" onClick={closeMenu}>
            Login
          </NavLink>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
