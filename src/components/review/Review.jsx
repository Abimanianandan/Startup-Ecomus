import React, { useState } from "react";
import "../review/Review.css";

const Review = () => {
  const [review, setReview] = useState(true);

  const handleChange = () => {
    if (review) {
      setReview(false);
    } else {
      setReview(true);
    }
  };

  return (
   
    <div className="container review shadow p-4 mb-5 bg-body-tertiary rounded d-flex mt-4">
    {review ? (
      <div className="row d-flex align-items-center bg-dark text-white">
        <div className="col-md-6 d-flex flex-column justify-content-center">
          <p className="fw-bold text-uppercase text-center">
            Our Customer's Review
          </p>
          <div className="d-flex justify-content-center mb-3">
            {[...Array(5)].map((_, index) => (
              <i
                key={index}
                className="fa-solid fa-star"
                style={{ color: "#fc7303", marginRight: "5px" }}
              ></i>
            ))}
          </div>
          <p className="fs-5 fw-normal text-center">
               Consider if the headphones support any advanced audio
               technologies, such as noise cancellation or surround sound,
               depending on your preferences. Comfort is crucial for long
               listening sessions.
          </p>
          <p className="fw-bold text-center mb-1">Robert Smith</p>
          <p className="fw-light text-center">
            Purchase item:{" "}
            <span className="fw-lighter cold">3-in-1 Wireless Charging</span>
          </p>
          {review ? (
            <i
              className={`fa-solid fa-code-compare text-center fs-3`}
              role="button"
              onClick={handleChange}
            ></i>
          ) : (
            ""
          )}
        </div>
        <div className="col-md-6 d-flex justify-content-center position-relative">
          <div className="image-container">
          <img
            src="https://ecomusnext-themesflat.vercel.app/images/slider/accessories-tes1.png"
            alt="Customer Review"
            className="img-fluid rounded shadow-sm main-img"
          />
          </div>
         
        
        </div>
      </div>
    ) : (
      <div className="row d-flex align-items-center bg-dark text-white">
        <div className="col-md-6 d-flex flex-column justify-content-center">
          <p className="fw-bold text-uppercase text-center">
            Our Customer's Review
          </p>
          <div className="d-flex justify-content-center mb-3">
            {[...Array(5)].map((_, index) => (
              <i
                key={index}
                className="fa-solid fa-star"
                style={{ color: "#fc7303", marginRight: "5px" }}
              ></i>
            ))}
          </div>
          <p className="fs-5 fw-normal text-center">
              Love love love! This product is so
              easy to use! I absolutely love the this product. High-quality
              headphones deliver a balanced and clear sound. Look for headphones
              with good bass, clear mids, and crisp highs.
          </p>
          <p className="fw-bold text-center mb-1"> Alex Grien</p>
          <p className="fw-light text-center">
            Purchase item:{" "}
            <span className="fw-lighter"> Beats Studio Buds</span>
          </p>
          {review ? (
            ""
          ) : (
            <i
              className={`fa-solid fa-code-compare text-center fs-3`}
              role="button"
              onClick={handleChange}
            ></i>
          )}
        </div>

        <div className="col-md-6 d-flex justify-content-center position-relative">
          <div className="image-container">
          <img
            src="https://ecomusnext-themesflat.vercel.app/images/slider/accessories-tes2.png"
            alt="Customer Review"
            className="img-fluid rounded shadow-sm main-img"
          />
          </div>
        </div>
      </div>
    )}
  </div>
  );
};

export default Review;
