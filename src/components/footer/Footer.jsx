import React from 'react'
import "../footer/Footer.css"

const Footer = () => {
  return (
    <div className="container-fluid mt-5">
        <hr />
    <footer className="p-4">
      <div className="row d-flex flex-column flex-md-row ">
        <div className="col mb-4">
          <a href="#">
            <img
              src="https://themesflat.co/html/ecomus/images/logo/logo.svg"
              alt="Brand Logo"
              width="140"
              className="mb-4 brand"
            />
          </a>
          <div className="d-flex justify-content-center justify-content-md-start">
          <p className="fw-light">
            Address: 1234 Fashion Street, Suite 567,
            <br /> New York, NY 10001
            <br />
            Email: info@fashionshop.com
            <br /> Phone: (212) 555-1234
          </p>
          </div>
          <div className="gap mt-3 d-flex justify-content-center justify-content-md-start icon">
            <a href="#" className="text-decoration-none me-3">
              <i className="fa-brands fa-facebook fa-2x  icon" style={{color:"black"}}></i>
            </a>
            <a href="#" className="text-decoration-none me-3">
              <i className="fa-brands fa-x-twitter fa-2x  icon" style={{color:"black"}}></i>
            </a>
            <a href="#" className="text-decoration-none me-3">
              <i className="fa-brands fa-instagram fa-2x  icon" style={{color:"black"}}></i>
            </a>
            <a href="#" className="text-decoration-none me-3">
              <i className="fa-brands fa-tiktok fa-2x  icon" style={{color:"black"}}></i>
            </a>
            <a href="#" className="text-decoration-none">
              <i className="fa-brands fa-pinterest fa-2x  icon"style={{color:"black"}}></i>
            </a>
          </div>
        </div>
  
        <div className="col mb-4">
          <h5 className="mb-3 text-center text-md-start">Help</h5>
          <ul className="list-unstyled text-center text-md-start fw-light">
            <li className="mb-2">
              Privacy Policy
            </li>
            <li className="mb-2">
              Returns + Exchanges
            </li>
            <li className="mb-2">
              Shipping
            </li>
            <li className="mb-2">
              Terms & Conditions
            </li>
            <li className="mb-2">
              FAQ’s
            </li>
            <li className="mb-2">
              Compare
            </li>
            <li className="mb-2">
              My Wishlist
            </li>
          </ul>
        </div>
  
        <div className="col mb-4">
          <h5 className="mb-3 text-center text-md-start">About Us</h5>
          <ul className="list-unstyled text-center text-md-start fw-light">
            <li className="mb-2">
              Our Story
            </li>
            <li className="mb-2">
              Visit Our Store
            </li>
            <li className="mb-2">
              Contact Us
            </li>
            <li className="mb-2">
              Account
            </li>
          </ul>
        </div>
  
        <div className="col mb-4">
          <h5 className="mb-3 text-center text-md-start">Sign Up for Email</h5>
          <p className="text-center text-md-start fw-light">
            Sign up to get first dibs on new arrivals, sales, exclusive content,
            events and more!
          </p>
          <form>
            <div className="d-flex flex-column flex-md-row gap-2">
              <input
                type="email"
                className="form-control mb-2 mb-md-0"
                placeholder="Enter your email"
              />
              <button
                type="submit"
                className="btn btn-dark d-flex align-items-center justify-content-center"
              >
                Subscribe
                <i className="fa-solid fa-arrow-up-right-from-square ms-2  icon"></i>
              </button>
            </div>
          </form>
        </div>
      </div>
  
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-center mt-4">
        <p className="mb-2 mb-md-0 text-center">© 2024 Ecomus Store. All Rights Reserved</p>
        <div className="d-flex justify-content-center">
          <i className="fab fa-cc-visa fa-2x me-3 icon"></i>
          <i className="fab fa-cc-mastercard fa-2x me-3 icon"></i>
          <i className="fab fa-cc-paypal fa-2x  icon"></i>
        </div>
      </div>
    </footer>
    <hr />
  </div>
  )
}

export default Footer