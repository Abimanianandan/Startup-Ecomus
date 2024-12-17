import React, { useEffect, useState } from "react";
import "../navbar/Navbar.css"

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav   className={`navbar navbar-expand-lg fixed-top ${
        scrolled ? "bg-body-terminary" : ""
      }`}>
        <div className="container-fluid">
        <a className="navbar-brand" href="#">
            <img
              src="https://themesflat.co/html/ecomus/images/logo/logo.svg"
              alt="Brand Logo"
              style={{width:"150px"}}
            />
          </a>
      
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
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="nav nav-underline justify-content-center ms-auto">
              <li className="nav-item">
                <a
                  className="nav-link text-danger active"
                  aria-current="page"
                  href="#"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark" href="#">
                  Shop
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark" href="#">
                  Products
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark">Pages</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark">Blog</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark">Buy now</a>
              </li>
            </ul>
            <div
              className="d-flex ms-auto gap-3 text-dark"
              style={{ cursor: "pointer" }}
            >
              <i className="fa-solid fa-magnifying-glass fs-5 icon"></i>
              <i className="fa-regular fa-user fs-5 icon"></i>
              <i className="fa-solid fa-down-left-and-up-right-to-center fs-5 icon"></i>
              <i className="fa-regular fa-heart fs-5 icon"></i>
              <i className="fa-solid fa-cart-shopping fs-5 icon"></i>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
