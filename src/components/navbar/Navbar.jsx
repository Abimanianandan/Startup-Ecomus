import React, { useContext, useEffect, useState } from "react";
import "../navbar/Navbar.css"
import { Link } from "react-router-dom";
import { cartContext } from "../../App";

const Navbar = () => {
  const{cart,setCart,heart,setHeart} = useContext(cartContext)
  const [scrolled, setScrolled] = useState(false);
  const [home,setHome] = useState(true);
  const [shop,setShop] = useState(false);
  

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

  const handleHome = () =>{
    if(home){
      setHome(false)
      setShop(true)
    }else{
      setHome(true)
      setShop(false)
    }
    
  }
  // const handleShop = () =>{
  //   if(shop){
  //     setShop()
  //   }else{
  //     setShop(false)
  //   }
    
  // }

  return (
    <>
      <nav   className={`navbar navbar-expand-lg sticky-top ${
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
                <Link
                  className={home ? "nav-link text-danger active" : "nav-link text-dark"}
                  aria-current="page"
                  to={"/"}
                  onClick={handleHome}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
  <Link
    className={shop ? "nav-link text-danger active " : "nav-link text-dark"}
    to={"/shop"}
    onClick={handleHome}
  >
    Shop
  </Link>
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
              <i className="fa-solid fa-magnifying-glass fs-4 icon"></i>
              <i className="fa-regular fa-user fs-4 icon"></i>
              <i className="fa-solid fa-down-left-and-up-right-to-center fs-4 icon"></i>
              <Link to={"/heart"} className="position-relative">  <i className="fa-regular fa-heart fs-4 icon" style={{color:"black"}}>
              <p className="position-absolute text-white p-1 rounded-circle"
                 style={{top:"-30%",left:"60%",backgroundColor:"red",fontSize:"12px"}}>{heart}</p>
                </i> </Link>
              <Link to={"/cart"} className="position-relative"> <i className="fa-solid fa-cart-shopping fs-4 icon" style={{color:"black"}}>
                <p className="position-absolute text-white p-1 rounded-circle"
                 style={{top:"-30%",left:"60%",backgroundColor:"red",fontSize:"12px"}}>{cart}</p>
                 </i>
                 </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
