import React, { useRef, useState } from "react";
import "../bestseller/BestSeller.css";
import bsimage1 from "../bestseller/bestsellerimgs/headphone-red2.jpg";
import bsimage2 from "../hotdeals/hotdealsimgs/bark-phone-blue.jpg";
import bsimage3 from "../bestseller/bestsellerimgs/wireless-charging-black.jpg";
import bsimage4 from "../bestseller/bestsellerimgs/wireless-charging-black2.jpg";

const BestSeller = () => {
  const productRef = useRef(null);
    const [right, setRight] = useState(true);
    const [left, setLeft] = useState(false);
  
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
        setRight(false);
        setLeft(true);
      }
    };
    const handleLeft = () => {
      if (productRef.current) {
        smoothScroll(productRef.current, -1400, 1000);
        setRight(true);
        setLeft(false);
      }
    };
  return (
    <div className="bestseller-main w-100%">
      <h1 className="display-4 display-sm-3 display-md-2 display-lg-1 text-center mt-5">
        Best Seller
      </h1>
      <div className="container mt-5" ref={productRef}>
        <div className="row" style={{flexWrap:"nowrap",gap:"2px"}}>
          {/* card 1 */}
          <div class="col-sm-3 col-md-5 col-lg-3 d-flex justify-content-center">
            <div class="card shadow p-4 mb-5 bg-body-tertiary rounded position-relative">
              <img src={bsimage1} class="card-img-top b-one" alt="..." />
              <div className="icons-container position-absolute d-flex justify-content-center ms-4">
                <i
                  className="fa-regular fa-heart ms-2 p-2 shadow-lg p-3 mb-5 bg-body-tertiary rounded"
                  style={{ backgroundColor: "whitesmoke", borderRadius: "5px" }}
                ></i>
                <i
                  className="fa-solid fa-down-left-and-up-right-to-center  ms-2 p-2 shadow-lg p-3 mb-5 bg-body-tertiary rounded"
                  style={{ backgroundColor: "whitesmoke", borderRadius: "5px" }}
                ></i>
                <i
                  className="fa-solid fa-eye ms-2 p-2 shadow-lg p-3 mb-5 bg-body-tertiary rounded"
                  style={{ backgroundColor: "whitesmoke", borderRadius: "5px" }}
                ></i>
              </div>
              <div class="card-body text-center">
                <h6 class="card-title">Case with MagSafe</h6>
                <p class="card-text">
                  $19.99 &nbsp;{" "}
                  <i
                    class="fa-solid fa-cart-shopping"
                    style={{ color: "#000000" }}
                  ></i>
                </p>
              </div>
            </div>
          </div>
          {/* cord 2 */}
          <div className="col-sm-3 col-md-5 col-lg-3 d-flex justify-content-center">
            <div className="card shadow p-4 mb-5 bg-body-tertiary rounded position-relative">
              <img src={bsimage2} className="card-img one b-two" alt="..." />
              {left ? (
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
                <i
                  className="fa-solid fa-cart-shopping p-2 shadow-lg p-3 mb-5 bg-body-tertiary rounded"
                  style={{ backgroundColor: "whitesmoke", borderRadius: "5px" }}
                ></i>
                <i
                  className="fa-regular fa-heart ms-2 p-2 shadow-lg p-3 mb-5 bg-body-tertiary rounded"
                  style={{ backgroundColor: "whitesmoke", borderRadius: "5px" }}
                ></i>
                <i
                  className="fa-solid fa-down-left-and-up-right-to-center  ms-2 p-2 shadow-lg p-3 mb-5 bg-body-tertiary rounded"
                  style={{ backgroundColor: "whitesmoke", borderRadius: "5px" }}
                ></i>
                <i
                  className="fa-solid fa-eye ms-2 p-2 shadow-lg p-3 mb-5 bg-body-tertiary rounded"
                  style={{ backgroundColor: "whitesmoke", borderRadius: "5px" }}
                ></i>
              </div>
              <div className="card-body text-center">
                <h6 className="card-title">Case with MagSafe</h6>
                <p className="card-text">$19.99</p>
              </div>
            </div>
          </div>
          {/* card 3  */}
          <div class="col-sm-3 col-md-5 col-lg-3 d-flex justify-content-center">
            <div class="card shadow p-4 mb-5 bg-body-tertiary rounded position-relative">
              <img src={bsimage4} class="card-img-top b-three" alt="..." />
              <div className="icons-container position-absolute d-flex justify-content-center ms-4">
                <i
                  className="fa-regular fa-heart ms-2 p-2 shadow-lg p-3 mb-5 bg-body-tertiary rounded"
                  style={{ backgroundColor: "whitesmoke", borderRadius: "5px" }}
                ></i>
                <i
                  className="fa-solid fa-down-left-and-up-right-to-center  ms-2 p-2 shadow-lg p-3 mb-5 bg-body-tertiary rounded"
                  style={{ backgroundColor: "whitesmoke", borderRadius: "5px" }}
                ></i>
                <i
                  className="fa-solid fa-eye ms-2 p-2 shadow-lg p-3 mb-5 bg-body-tertiary rounded"
                  style={{ backgroundColor: "whitesmoke", borderRadius: "5px" }}
                ></i>
              </div>
              <div class="card-body text-center">
                <h6 class="card-title">Case with MagSafe</h6>
                <p class="card-text">
                  $19.99 &nbsp;{" "}
                  <i
                    class="fa-solid fa-cart-shopping"
                    style={{ color: "#000000" }}
                  ></i>
                </p>
              </div>
            </div>
          </div>

          {/* card 4 */}

          <div class="col-sm-3 col-md-5 col-lg-3  d-flex justify-content-center">
            <div class="card shadow p-4 mb-5 bg-body-tertiary rounded position-relative">
              <img src={bsimage3} class="card-img-top b-four" alt="..." />
              {right ? (
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
                <i
                  className="fa-regular fa-heart ms-2 p-2 shadow-lg p-3 mb-5 bg-body-tertiary rounded"
                  style={{ backgroundColor: "whitesmoke", borderRadius: "5px" }}
                ></i>
                <i
                  className="fa-solid fa-down-left-and-up-right-to-center  ms-2 p-2 shadow-lg p-3 mb-5 bg-body-tertiary rounded"
                  style={{ backgroundColor: "whitesmoke", borderRadius: "5px" }}
                ></i>
                <i
                  className="fa-solid fa-eye ms-2 p-2 shadow-lg p-3 mb-5 bg-body-tertiary rounded"
                  style={{ backgroundColor: "whitesmoke", borderRadius: "5px" }}
                ></i>
              </div>
              <div class="card-body text-center">
                <h6 class="card-title">Case with MagSafe</h6>
                <p class="card-text">
                  $19.99 &nbsp;{" "}
                  <i
                    class="fa-solid fa-cart-shopping"
                    style={{ color: "#000000" }}
                  ></i>
                </p>
              </div>
            </div>
          </div>
          {/* card 5 */}
          <div class="col-sm-3 col-md-5 col-lg-3  d-flex justify-content-center">
            <div class="card shadow p-4 mb-5 bg-body-tertiary rounded position-relative">
              <img src="https://tse1.mm.bing.net/th?id=OIP.RIODAg7JWokrzN8JIgXaTgHaHa&pid=Api&P=0&h=180" class="card-img-top b-five" alt="..." />
              <div className="icons-container position-absolute d-flex justify-content-center ms-4">
                <i
                  className="fa-regular fa-heart ms-2 p-2 shadow-lg p-3 mb-5 bg-body-tertiary rounded"
                  style={{ backgroundColor: "whitesmoke", borderRadius: "5px" }}
                ></i>
                <i
                  className="fa-solid fa-down-left-and-up-right-to-center  ms-2 p-2 shadow-lg p-3 mb-5 bg-body-tertiary rounded"
                  style={{ backgroundColor: "whitesmoke", borderRadius: "5px" }}
                ></i>
                <i
                  className="fa-solid fa-eye ms-2 p-2 shadow-lg p-3 mb-5 bg-body-tertiary rounded"
                  style={{ backgroundColor: "whitesmoke", borderRadius: "5px" }}
                ></i>
              </div>
              <div class="card-body text-center">
                <h6 class="card-title">Case with MagSafe</h6>
                <p class="card-text">
                  $19.99 &nbsp;{" "}
                  <i
                    class="fa-solid fa-cart-shopping"
                    style={{ color: "#000000" }}
                  ></i>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestSeller;
