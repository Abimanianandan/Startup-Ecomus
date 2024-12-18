import React from 'react'
import '../hotdeals/HotDeals.css'
import image1 from '../hotdeals/hotdealsimgs/bark-phone-blue.jpg'
import image2 from '../hotdeals/hotdealsimgs/cable-black.jpg'
import image3 from '../hotdeals/hotdealsimgs/headphone-white.jpg'
import image4 from '../hotdeals/hotdealsimgs/albert-black.jpg'


const HotDeals = () => {
  return(
//     <div className="hotdeals-main w-100%">
//     <h1 className="display-4 display-sm-3 display-md-2 display-lg-1 text-center mt-5">Hot Deals</h1>
 
//   <div className="hotdeals-container d-flex justify-content-center  mt-5">

//   <div class="row hotdeals-row row-cols-1 row-cols-md-4 g-0 mt-5 mt-3 d-flex justify-content-center">
//     {/* card 1 */}
//   <div className="col g-3 d-flex justify-content-center">
//     <div className="card d-flex justify-content-center position-relative">
//     <img src={image1} className="card-img-top" alt="..."/>

//       <div className="icons-container position-absolute d-flex justify-content-center ms-4">
//          <i className="fa-solid fa-cart-shopping p-2 shadow-lg p-3 mb-5 bg-body-tertiary rounded" style={{backgroundColor:"whitesmoke", borderRadius:"5px"}}></i>
//          <i className="fa-regular fa-heart ms-2 p-2 shadow-lg p-3 mb-5 bg-body-tertiary rounded"  style={{backgroundColor:"whitesmoke", borderRadius:"5px"}}></i>
//          <i className="fa-solid fa-down-left-and-up-right-to-center  ms-2 p-2 shadow-lg p-3 mb-5 bg-body-tertiary rounded"  style={{backgroundColor:"whitesmoke", borderRadius:"5px"}}></i>
//          <i className="fa-solid fa-eye ms-2 p-2 shadow-lg p-3 mb-5 bg-body-tertiary rounded"  style={{backgroundColor:"whitesmoke", borderRadius:"5px"}}></i>
//       </div>
//     <div className="card-body text-center">
//       <h6 className='card-title'>Case with MagSafe</h6>
//       <p className="card-text">$19.99
//       </p>
      
//        </div>
//     </div>
   

//   </div>
//   {/* card 2 */}
//   <div className="col g-3 d-flex justify-content-center">
//     <div className="card position-relative">
//     <img src={image2} className="card-img-top" alt="..."/>
//     <div className="icons-container position-absolute d-flex justify-content-center ms-4">
//          <i className="fa-solid fa-cart-shopping p-2 shadow-lg p-3 mb-5 bg-body-tertiary rounded" style={{backgroundColor:"whitesmoke", borderRadius:"5px"}}></i>
//          <i className="fa-regular fa-heart ms-2 p-2 shadow-lg p-3 mb-5 bg-body-tertiary rounded"  style={{backgroundColor:"whitesmoke", borderRadius:"5px"}}></i>
//          <i className="fa-solid fa-down-left-and-up-right-to-center  ms-2 p-2 shadow-lg p-3 mb-5 bg-body-tertiary rounded"  style={{backgroundColor:"whitesmoke", borderRadius:"5px"}}></i>
//          <i className="fa-solid fa-eye ms-2 p-2 shadow-lg p-3 mb-5 bg-body-tertiary rounded"  style={{backgroundColor:"whitesmoke", borderRadius:"5px"}}></i>
//       </div>
//     <div className="card-body text-center">
//       <h6 className='card-title'>Case with MagSafe</h6>
//       <p className="card-text">$19.99
//       </p>
      
//        </div>
//     </div>
//   </div>
//   {/* card 3  */}
//   <div className="col g-3 d-flex justify-content-center">
//     <div className="card posiion-relative">
//     <img src={image3} className="card-img-top" alt="..."/>
//     <div className="icons-container position-absolute d-flex justify-content-center ms-4">
//          <i className="fa-solid fa-cart-shopping p-2 shadow-lg p-3 mb-5 bg-body-tertiary rounded" style={{backgroundColor:"whitesmoke", borderRadius:"5px"}}></i>
//          <i className="fa-regular fa-heart ms-2 p-2 shadow-lg p-3 mb-5 bg-body-tertiary rounded"  style={{backgroundColor:"whitesmoke", borderRadius:"5px"}}></i>
//          <i className="fa-solid fa-down-left-and-up-right-to-center  ms-2 p-2 shadow-lg p-3 mb-5 bg-body-tertiary rounded"  style={{backgroundColor:"whitesmoke", borderRadius:"5px"}}></i>
//          <i className="fa-solid fa-eye ms-2 p-2 shadow-lg p-3 mb-5 bg-body-tertiary rounded"  style={{backgroundColor:"whitesmoke", borderRadius:"5px"}}></i>
//       </div>
//     <div className="card-body text-center">
//       <h6 className='card-title'>Case with MagSafe</h6>
//       <p className="card-text">$19.99
//       </p>
      
//        </div>
//     </div>
//   </div>
//   {/* card 4 */}
//   <div className="col g-3 d-flex justify-content-center">
//     <div className="card position-relative">
//     <img src={image4} className="card-img-top" alt="..."/>
//     <div className="icons-container position-absolute d-flex justify-content-center ms-4">
//          <i className="fa-solid fa-cart-shopping p-2 shadow-lg p-3 mb-5 bg-body-tertiary rounded" style={{backgroundColor:"whitesmoke", borderRadius:"5px"}}></i>
//          <i className="fa-regular fa-heart ms-2 p-2 shadow-lg p-3 mb-5 bg-body-tertiary rounded"  style={{backgroundColor:"whitesmoke", borderRadius:"5px"}}></i>
//          <i className="fa-solid fa-down-left-and-up-right-to-center  ms-2 p-2 shadow-lg p-3 mb-5 bg-body-tertiary rounded"  style={{backgroundColor:"whitesmoke", borderRadius:"5px"}}></i>
//          <i className="fa-solid fa-eye ms-2 p-2 shadow-lg p-3 mb-5 bg-body-tertiary rounded"  style={{backgroundColor:"whitesmoke", borderRadius:"5px"}}></i>
//       </div>
//     <div className="card-body text-center">
//       <h6 className='card-title'>Case with MagSafe</h6>
//       <p className="card-text">$19.99
//       </p>
      
//        </div>
//     </div>
//   </div>  
// </div>
  
//    </div>
// </div>
  
<div className="container" >
<h1 className="display-4 display-sm-3 display-md-2 display-lg-1 text-center mt-5">Hot Deals</h1>
      <div className="row mt-5" style={{flexWrap:"nowrap",gap:"2px"}}>    
        <div className="col-sm-3 col-md-5 col-lg-3">
          <div className="card shadow p-3 mb-5 bg-body-tertiary rounded position-relative">
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
          <div className="card shadow p-3 mb-5 bg-body-tertiary rounded position-relative">
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
          <div className="card shadow p-3 mb-5 bg-body-tertiary rounded position-relative">
            <img
              src={image3}
              className="card-img three"
              alt="..."
            />
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
          <div className="card shadow p-3 mb-5 bg-body-tertiary rounded position-relative">
            <img
              src={image4}
              className="card-img four"
              alt="..."
            />
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
        {/* <div className="col-sm-3 col-md-5 col-lg-3">
          <div className="card shadow p-3 mb-5 bg-body-tertiary rounded">
            <img
              src="https://demo-ecomus-global2.myshopify.com/cdn/shop/files/Frame254.jpg?v=1706772810&width=668"
              className="card-img five"
              alt="..."
            />
           
            <div className="card-body text-center">
              <p className="card-text">Natural Moisturizing Factors</p>
              <div className="d-flex justify-content-center">
                <p className="text-muted text-decoration-line-through">
                  $ 62.00
                </p>
                <p className="fw-bold ms-3 text-danger">$ 52.00</p>
              </div>
              <div className="d-flex justify-content-center justify-content-evenly">
                <span className="fw-bold border p-1">50ml</span>
                <span className="fw-bold border p-1">80ml</span>
              </div>
              <button className="btn btn-dark mt-3">Quick add</button>
            </div>
          </div>
        </div>
        <div className="col-sm-3 col-md-5 col-lg-3">
          <div className="card shadow p-3 mb-5 bg-body-tertiary rounded">
            <img
              src="https://demo-ecomus-global2.myshopify.com/cdn/shop/files/Frame245_d1e20333-8119-423e-9111-d3c65409901f.jpg?v=1706772563&width=668"
              className="card-img six"
              alt="..."
            />
            <div className="card-body text-center">
              <p className="card-text">100% Organic Cold-Pressed Oil</p>
              <div className="d-flex justify-content-center">
                <p className=" text-muted text-decoration-line-through">
                  $ 85.00
                </p>
                <p className=" fw-bold ms-3 text-danger">$ 50.00</p>
              </div>
              <div className="d-flex justify-content-center justify-content-evenly">
                <span className="fw-bold border p-1">15ml</span>
                <span className="fw-bold border p-1">20ml</span>
              </div>
              <button className="btn btn-dark mt-3">Quick add</button>
            </div>
          </div>
        </div>
        <div className="col-sm-3 col-md-5 col-lg-3">
          <div className="card shadow p-3 mb-5 bg-body-tertiary rounded">
            <img
              src="https://demo-ecomus-global2.myshopify.com/cdn/shop/files/Frame253.jpg?v=1706772675&width=668"
              className="card-img seven"
              alt="..."
            />
            <div className="card-body text-center">
              <p className="card-text">Mini Skin Perfecting Exfoliant</p>
              <p className="fw-bold">$ 35.00</p>
              <div className="d-flex justify-content-center justify-content-evenly">
                <span className="fw-bold border p-1">40ml</span>
                <span className="fw-bold border p-1">50ml</span>
              </div>
              <button className="btn btn-dark mt-3">Quick add</button>
            </div>
          </div>
        </div>
        <div className="col-sm-3 col-md-5 col-lg-3">
          <div className="card shadow p-3 mb-5 bg-body-tertiary rounded">
            <img
              src="https://demo-ecomus-global2.myshopify.com/cdn/shop/files/Frame251.jpg?v=1706772622&width=668"
              className="card-img eight"
              alt="..."
            />
            <div className="card-body text-center">
              <p className="card-text">Mini ExfoliKate Foaming Wash</p>
              <p className="fw-bold">$ 40.00</p>
              <div className="d-flex justify-content-center justify-content-evenly">
                <span className="fw-bold border p-1">10ml</span>
                <span className="fw-bold border p-1">20ml</span>
              </div>
              <button className="btn btn-dark mt-3">Quick add</button>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  
  
  )
}

export default HotDeals


