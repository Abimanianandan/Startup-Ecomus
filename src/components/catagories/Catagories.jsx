import React from 'react';
import '../catagories/Catagories.css';
import speaker from '../catagories/catagoriesimgs/accessories2_b1.jpg';
import headset from '../catagories/catagoriesimgs/accessories2_b2.jpg';

const Categories = () => {
  return (
    <div className="catagory-main-container">
    <h1 className="display-4 display-sm-3 display-md-2 display-lg-1 text-center mt-5">Shop by category</h1>

        
    <div class="main-container py-4 w-100 h-100 mt-5">

      {/* Sub Container */}
      <div class="sub-container container w-100 h-100   d-flex justify-content-center">
        <div class="row g-4 w-100 h-100 justify-content-center" >
          {/* Card 1 */}
          <div class="col-md-6 col-12 d-flex justify-content-center" style={{ border: '1px solid red !important' }}>
            <div class="card bg-dark text-grey w-100 h-100" >
              <img
                src={speaker}
                class="card-img"
                alt="Card 1"
                style={{ width: '100%', height: '640px', objectFit: 'cover' }}
              />
              <div class="card-img-overlay d-flex flex-column justify-content-end p-3 p-md-5 text-center text-md-start">
  <h5 class="card-title mb-1 fs-4 fs-md-3">UV charger</h5>
  <p class="card-text mb-2 fs-6 fs-md-5">Every piece is made to last beyond the season</p>
  <a href="#" style={{fontWeight:'500',color:'black'}}>Shop Collection<i class="fa-solid fa-arrow-up-right-from-square"></i></a>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div class="col-md-6 col-12 d-flex justify-content-center">
            <div class="card bg-dark text-grey  w-100 h-100" >
              <img
                src={headset}
                class="card-img"
                alt="Card 2"
                style={{ width: '100%', height: '640px', objectFit: 'cover' }}
              />
              <div class="card-img-overlay d-flex flex-column justify-content-end p-3 p-md-5 text-center text-md-start">
  <h5 class="card-title mb-1 fs-4 fs-md-3">Ness Headphone</h5>
  <p class="card-text mb-2 fs-6 fs-md-5">Every piece is made to last beyond the season</p>
  <a href="#" style={{fontWeight:'500',color:'black'}}>Shop Collection<i class="fa-solid fa-arrow-up-right-from-square"></i></a>
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



