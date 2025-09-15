import React, { useState, useEffect } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/icons/logo.png";
 

function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate()

  // close mobile menu on route change
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Experience", path: "/experience" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="navbar glass">
      <div className="nav-inner">
        <div className="brand">
          <img src={logo} alt="RJ" style={{cursor: "pointer"}} className="navbar-logo" onClick={()=>{
            navigate("/")
          }} />
          <span className="brand-text">Raman</span>
        </div>

        <button
          className={`burger ${open ? "open" : ""}`}
          onClick={() => setOpen(v => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span />
          <span />
          <span />
        </button>

        <ul className={`nav-links ${open ? "open" : ""}`}>
          {links.map((link, idx) => (
            <li key={idx}>
              <NavLink
                to={link.path}
                className={({ isActive }) => (isActive ? "active" : undefined)}
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
