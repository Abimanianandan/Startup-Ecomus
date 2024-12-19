import React from 'react'
import "../devices/Devices.css"

const Devices = () => {
  return (
    <div className="container-fluid mt-5">
    <h2 className="d-flex justify-content-center fs-1 fw-normal mt-4">Shop Gram</h2>
    <p className="d-flex justify-content-center fw-lighter mt-3 discription">Inspire and let yourself be inspired, from one unique fashion to another .</p>
    <div className="row row-cols-1 row-cols-md-5 justify-content-center mt-3" style={{gap:"20px"}}>
      <div className="col-md-2">
        <div className="card item ">
          <div className="image-container dress position-relative">
            <img
              src="https://ecomusnext-themesflat.vercel.app/images/shop/gallery/accessories-gallery1.jpg"
              alt="fav1"
              className="w-100 fasion"
            />
          </div>
          <div className="cart-icon position-absolute rounded-circle p-1">
          <i className="fa-solid fa-cart-plus ms-1"></i>
          </div>
         
        </div>
      </div>

      <div className="col-md-2">
        <div className="card item ">
          <div className="image-container dress position-relative">
            <img
              src="https://ecomusnext-themesflat.vercel.app/images/shop/gallery/accessories-gallery2.jpg"
              alt="fav2"
              className="w-100 fasion"
            />  
          </div>
          <div className="cart-icon position-absolute rounded-circle p-1">
          <i className="fa-solid fa-cart-plus ms-1"></i>
          </div>
        </div>
      </div>

      <div className="col-md-2">
        <div className="card item">
          <div className="image-container dress position-relative">
            <img
              src="https://ecomusnext-themesflat.vercel.app/images/shop/gallery/accessories-gallery3.jpg"
              alt="fav3"
              className="w-100 fasion"
            />
          </div>
          <div className="cart-icon position-absolute rounded-circle p-1">
          <i className="fa-solid fa-cart-plus ms-1"></i>
          </div>
        </div>
      </div>

      <div className="col-md-2">
        <div className="card item">
          <div className="image-container dress position-relative">
            <img
              src="https://ecomusnext-themesflat.vercel.app/images/shop/gallery/accessories-gallery4.jpg"
              alt="fav4"
              className="w-100 fasion"
            />     
          </div>
          <div className="cart-icon position-absolute rounded-circle p-1">
          <i className="fa-solid fa-cart-plus ms-1"></i>
          </div>
        </div>
      </div>

      <div className="col-md-2">
        <div className="card item">
          <div className="image-container dress position-relative">
            <img
              src="https://ecomusnext-themesflat.vercel.app/images/shop/gallery/accessories-gallery5.jpg"
              alt="fav5"
              className="w-100 fasion"
            />
          </div>
          <div className="cart-icon position-absolute rounded-circle p-1">
            <i className="fa-solid fa-cart-plus ms-1"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Devices