import React from 'react'
import "../benifits/Benifits.css"

const Benifits = () => {
  return (
    <div className="container-fluid mt-5">
        <div className="row row-col-autos-1 row-col-autos-md-8 mt-5 justify-content-center">
            <div className="col-auto rounded-circle shadow p-3 mb-5 bg-body-tertiary rounded ms-5">
              <i className="fa-solid fa-cube fs-1  icon" style={{color: "#000000"}}></i>             
            </div>
           <div className="col-auto ms-3">
            <h6 className="fs-5 fw-normal purchase"> Free Shipping</h6>
            <p className="fw-light">You will love at great low prices</p>
           </div>
           <div className="col-auto rounded-circle shadow p-3 mb-5 bg-body-tertiary rounded ms-5">
              <i className="fa-regular fa-credit-card fs-1  icon" style={{color: "#000000"}}></i>             
            </div>
           <div className="col-auto ms-3">
            <h6 className="fs-5 fw-normal purchase">Flexible Payment</h6>
            <p className="fw-light">Pay with Multiple Credit Cards</p>
           </div>
           <div className="col-auto rounded-circle shadow p-3 mb-5 bg-body-tertiary rounded ms-5">
              <i className="fa-solid fa-person-walking-arrow-loop-left fs-1  icon" style={{color: "#000000"}}></i>             
            </div>
           <div className="col-auto ms-3">
            <h6 className="fs-5 fw-normal purchase">14 Day Returns</h6>
            <p className="fw-light">Within 30 days for an exchange</p>
           </div>
           <div className="col-auto rounded-circle shadow p-3 mb-5 bg-body-tertiary rounded ms-5">
              <i className="fa-solid fa-headset fs-1  icon" style={{color: "#000000"}}></i>             
            </div>
           <div className="col-auto ms-3">
            <h6 className="fs-5 fw-normal purchase">Premium Support</h6>
            <p className="fw-light">Outstanding premium support</p>
           </div>
        </div>
    </div>
  )
}

export default Benifits