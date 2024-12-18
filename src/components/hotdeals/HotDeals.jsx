import React, { useRef, useState } from 'react'
import '../hotdeals/HotDeals.css'
import image1 from '../hotdeals/hotdealsimgs/bark-phone-blue.jpg'
import image2 from '../hotdeals/hotdealsimgs/cable-black.jpg'
import image3 from '../hotdeals/hotdealsimgs/headphone-white.jpg'
import image4 from '../hotdeals/hotdealsimgs/albert-black.jpg'


const HotDeals = () => {
  const productRef = useRef(null);
  const [rightArrow, setRightArrow] = useState(true);
  const [leftArrow, setLeftArrow] = useState(false);

  const smoothScroll = (element, distance, duration) => {
    let start = element.scrollLeft;
    let startTime = performance.now();
    const scroll = (time) => {
      const timeElapsed = time - startTime;
      const scrollAmount = Math.min(timeElapsed / duration, 1) * distance;
      element.scrollLeft = start + scrollAmount;
      if (timeElapsed < duration) {
        requestAnimationFrame(scroll);
      }
    };

    requestAnimationFrame(scroll);
  };
  const handleRight = () => {
    if (productRef.current) {
      smoothScroll(productRef.current, 1400, 1000);
      setRightArrow(false);
      setLeftArrow(true);
    }
  };
  const handleLeft = () => {
    if (productRef.current) {
      smoothScroll(productRef.current, -1400, 1000);
      setRightArrow(true);
      setLeftArrow(false);
    }
  };
  return(
<div className="container" ref={productRef}>
<h1 className="display-4 display-sm-3 display-md-2 display-lg-1 text-center mt-5">Hot Deals</h1>
      <div className="row mt-5" style={{flexWrap:"nowrap",gap:"2px"}}>    
        <div className="col-sm-3 col-md-5 col-lg-3">
          <div className="card shadow p-4 mb-5 bg-body-tertiary rounded position-relative">
            <img
              src={image1}
              className="card-img one"
              alt="..."
            />
             <div className="icons-container position-absolute d-flex justify-content-center ms-4">
                <i className="fa-solid fa-cart-shopping p-2 shadow-lg p-3 mb-5 bg-body-tertiary rounded" style={{backgroundColor:"whitesmoke", borderRadius:"5px"}}></i>
                <i className="fa-regular fa-heart ms-2 p-2 shadow-lg p-3 mb-5 bg-body-tertiary rounded"  style={{backgroundColor:"whitesmoke", borderRadius:"5px"}}></i>
                <i className="fa-solid fa-down-left-and-up-right-to-center  ms-2 p-2 shadow-lg p-3 mb-5 bg-body-tertiary rounded"  style={{backgroundColor:"whitesmoke", borderRadius:"5px"}}></i>
                <i className="fa-solid fa-eye ms-2 p-2 shadow-lg p-3 mb-5 bg-body-tertiary rounded"  style={{backgroundColor:"whitesmoke", borderRadius:"5px"}}></i>
            </div>
            <div className="card-body text-center">
               <h6 className='card-title'>Case with MagSafe</h6>
                <p className="card-text">$19.99</p>    
            </div>
          </div>
        </div>
        <div className="col-sm-3 col-md-5 col-lg-3">
          <div className="card shadow p-4 mb-5 bg-body-tertiary rounded position-relative">
            <img
              src={image2}
              className="card-img two"
              alt="..."
            />
             <div className="icons-container position-absolute d-flex justify-content-center ms-4">
                <i className="fa-solid fa-cart-shopping p-2 shadow-lg p-3 mb-5 bg-body-tertiary rounded" style={{backgroundColor:"whitesmoke", borderRadius:"5px"}}></i>
                <i className="fa-regular fa-heart ms-2 p-2 shadow-lg p-3 mb-5 bg-body-tertiary rounded"  style={{backgroundColor:"whitesmoke", borderRadius:"5px"}}></i>
                <i className="fa-solid fa-down-left-and-up-right-to-center  ms-2 p-2 shadow-lg p-3 mb-5 bg-body-tertiary rounded"  style={{backgroundColor:"whitesmoke", borderRadius:"5px"}}></i>
                <i className="fa-solid fa-eye ms-2 p-2 shadow-lg p-3 mb-5 bg-body-tertiary rounded"  style={{backgroundColor:"whitesmoke", borderRadius:"5px"}}></i>
            </div>
            <div className="card-body text-center">
            <h6 className='card-title'>MagSafe 3 Cable</h6>
            <p className="card-text">$39.00</p>   
            </div>
          </div>
        </div>
        <div className="col-sm-3 col-md-5 col-lg-3">
          <div className="card shadow p-4 mb-5 bg-body-tertiary rounded position-relative">
            <img
              src={image3}
              className="card-img three"
              alt="..."
            />
             {leftArrow ? (
                  <i
                    className="fa-solid fa-chevron-left  position-absolute angle"
                    style={{
                      top: "40%",
                      right: "230px",
                      transform: "translateY(-50%)",
                      color: "black",
                      fontSize: "24px",
                      cursor: "pointer",
                    }}
                    onClick={handleLeft}
                  ></i>
                ) : (
                  ""
                )}
            <div className="icons-container position-absolute d-flex justify-content-center ms-4">
                <i className="fa-solid fa-cart-shopping p-2 shadow-lg p-3 mb-5 bg-body-tertiary rounded" style={{backgroundColor:"whitesmoke", borderRadius:"5px"}}></i>
                <i className="fa-regular fa-heart ms-2 p-2 shadow-lg p-3 mb-5 bg-body-tertiary rounded"  style={{backgroundColor:"whitesmoke", borderRadius:"5px"}}></i>
                <i className="fa-solid fa-down-left-and-up-right-to-center  ms-2 p-2 shadow-lg p-3 mb-5 bg-body-tertiary rounded"  style={{backgroundColor:"whitesmoke", borderRadius:"5px"}}></i>
                <i className="fa-solid fa-eye ms-2 p-2 shadow-lg p-3 mb-5 bg-body-tertiary rounded"  style={{backgroundColor:"whitesmoke", borderRadius:"5px"}}></i>
            </div>
            <div className="card-body text-center">
            <h6 className='card-title'>Beats Studio Buds</h6>
            <p className="card-text">$199.00</p>  
            </div>
          </div>
        </div>
        <div className="col-sm-3 col-md-5 col-lg-3">
          <div className="card shadow p-4 mb-5 bg-body-tertiary rounded position-relative">
            <img
              src={image4}
              className="card-img four"
              alt="..."
            />
              {rightArrow ? (
              <i
              className={`fa-solid fa-chevron-right arrow arrow-right`}
              aria-label="Scroll Right"
              role="button"
              onClick={handleRight}
            ></i>
            
                 
                ) : (
                  ""
                )}
             <div className="icons-container position-absolute d-flex justify-content-center ms-4">
                <i className="fa-solid fa-cart-shopping p-2 shadow-lg p-3 mb-5 bg-body-tertiary rounded" style={{backgroundColor:"whitesmoke", borderRadius:"5px"}}></i>
                <i className="fa-regular fa-heart ms-2 p-2 shadow-lg p-3 mb-5 bg-body-tertiary rounded"  style={{backgroundColor:"whitesmoke", borderRadius:"5px"}}></i>
                <i className="fa-solid fa-down-left-and-up-right-to-center  ms-2 p-2 shadow-lg p-3 mb-5 bg-body-tertiary rounded"  style={{backgroundColor:"whitesmoke", borderRadius:"5px"}}></i>
                <i className="fa-solid fa-eye ms-2 p-2 shadow-lg p-3 mb-5 bg-body-tertiary rounded"  style={{backgroundColor:"whitesmoke", borderRadius:"5px"}}></i>
            </div>
            <div className="card-body text-center">
            <h6 className='card-title'>Blue Ocean Band</h6>
            <p className="card-text">$9.00</p>  
            </div>
          </div>
        </div>
        <div className="col-sm-3 col-md-5 col-lg-3">
          <div className="card shadow p-4 mb-5 bg-body-tertiary rounded position-relative">
            <img
              src="http://beyondthebox.ph/cdn/shop/products/STUDIOPROWIRELESSHEADPHONES1_COLOR-BLACK.jpg?v=1691628249"
              className="card-img five "
              alt="..."
            />
            <div className="icons-container position-absolute d-flex justify-content-center ms-4">
                <i className="fa-solid fa-cart-shopping p-2 shadow-lg p-3 mb-5 bg-body-tertiary rounded" style={{backgroundColor:"whitesmoke", borderRadius:"5px"}}></i>
                <i className="fa-regular fa-heart ms-2 p-2 shadow-lg p-3 mb-5 bg-body-tertiary rounded"  style={{backgroundColor:"whitesmoke", borderRadius:"5px"}}></i>
                <i className="fa-solid fa-down-left-and-up-right-to-center  ms-2 p-2 shadow-lg p-3 mb-5 bg-body-tertiary rounded"  style={{backgroundColor:"whitesmoke", borderRadius:"5px"}}></i>
                <i className="fa-solid fa-eye ms-2 p-2 shadow-lg p-3 mb-5 bg-body-tertiary rounded"  style={{backgroundColor:"whitesmoke", borderRadius:"5px"}}></i>
            </div>
            <div className="card-body text-center">
            <h6 className='card-title'>Beats HeadPhone</h6>
            <p className="card-text">$299.00</p>  
            </div>
          </div>
        </div>
        
        <div className="col-sm-3 col-md-5 col-lg-3">
          <div className="card shadow p-4 mb-5 bg-body-tertiary rounded position-relative">
            <img
              src="https://www.jiomart.com/images/product/original/rvu6rvehky/portronics-power-pro-10k-10000mah-power-bank-with-dual-output-emergency-mobile-charger-white-por-1110-product-images-orvu6rvehky-p594206344-0-202210011829.jpg?im=Resize=(1000,1000)"
              className="card-img six"
              alt="..."
            />
             <div className="icons-container position-absolute d-flex justify-content-center ms-4">
                <i className="fa-solid fa-cart-shopping p-2 shadow-lg p-3 mb-5 bg-body-tertiary rounded" style={{backgroundColor:"whitesmoke", borderRadius:"5px"}}></i>
                <i className="fa-regular fa-heart ms-2 p-2 shadow-lg p-3 mb-5 bg-body-tertiary rounded"  style={{backgroundColor:"whitesmoke", borderRadius:"5px"}}></i>
                <i className="fa-solid fa-down-left-and-up-right-to-center  ms-2 p-2 shadow-lg p-3 mb-5 bg-body-tertiary rounded"  style={{backgroundColor:"whitesmoke", borderRadius:"5px"}}></i>
                <i className="fa-solid fa-eye ms-2 p-2 shadow-lg p-3 mb-5 bg-body-tertiary rounded"  style={{backgroundColor:"whitesmoke", borderRadius:"5px"}}></i>
            </div>
            <div className="card-body text-center">
            <h6 className='card-title'>Power Bank</h6>
            <p className="card-text">$199.00</p>  
            </div>
          </div>
        </div>
      </div>
    </div>
  
  
  )
}

export default HotDeals


