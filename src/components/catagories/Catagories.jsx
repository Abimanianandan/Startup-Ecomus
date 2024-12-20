import React from "react";
import "../catagories/Catagories.css";

const Categories = () => {
  return (
    <div className="catagory-main-container">
      <h1 className="d-flex justify-content-center mt-5">
        Shop by category
      </h1>
      <div className="main-container py-4 w-100 h-100 mt-5">
        {/* Sub Container */}
        <div className="sub-container container w-100 h-100   d-flex justify-content-center">
          <div className="row g-4 w-100 h-100 justify-content-center">
            {/* Card 1 */}
            <div className="col-md-6 col-12 d-flex justify-content-center">
              <div className="card text-grey w-100 h-100 category">
                <img
                  src="https://ecomusnext-themesflat.vercel.app/images/collections/accessories2_b1.jpg"
                  className="card-img"
                  alt="Card 1"
                  style={{ width: "100%", height: "640px", objectFit: "cover" }}
                />
                <div className="card-img-overlay d-flex flex-column justify-content-end p-3 p-md-5 text-center text-md-start">
                  <h5 className="card-title mb-1 fs-4 fs-md-3">UV charger</h5>
                  <p className="card-text mb-2 fs-6 fs-md-5">
                    Every piece is made to last beyond the season
                  </p>
                  <a href="#" style={{ fontWeight: "500", color: "black" }}>
                    Shop Collection
                    <i className="fa-solid fa-arrow-up-right-from-square"></i>
                  </a>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="col-md-6 col-12 d-flex justify-content-center">
              <div className="card text-grey  w-100 h-100 category">
                <img
                  src="https://ecomusnext-themesflat.vercel.app/images/collections/accessories2_b2.jpg"
                  className="card-img"
                  alt="Card 2"
                  style={{ width: "100%", height: "640px", objectFit: "cover" }}
                />
                <div className="card-img-overlay d-flex flex-column justify-content-end p-3 p-md-5 text-center text-md-start">
                  <h5 className="card-title mb-1 fs-4 fs-md-3">
                    Ness Headphone
                  </h5>
                  <p className="card-text mb-2 fs-6 fs-md-5">
                    Every piece is made to last beyond the season
                  </p>
                  <a href="#" style={{ fontWeight: "500", color: "black" }}>
                    Shop Collection
                    <i className="fa-solid fa-arrow-up-right-from-square"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
