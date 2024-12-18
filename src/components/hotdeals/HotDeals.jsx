import React from 'react'
import '../hotdeals/HotDeals.css'
import image1 from '../hotdeals/hotdealsimgs/bark-phone-blue.jpg'
import image2 from '../hotdeals/hotdealsimgs/cable-black.jpg'
import image3 from '../hotdeals/hotdealsimgs/headphone-white.jpg'
import image4 from '../hotdeals/hotdealsimgs/albert-black.jpg'


const HotDeals = () => {
  return(
    <div className="hotdeals-main w-100%">
    <h1 className="display-4 display-sm-3 display-md-2 display-lg-1 text-center mt-5">Hot Deals</h1>
 
  <div className="hotdeals-container d-flex justify-content-center  mt-5">

  <div class="row hotdeals-row row-cols-1 row-cols-md-4 g-0 mt-5 mt-3 d-flex justify-content-center">
    {/* card 1 */}
  <div className="col g-3 d-flex justify-content-center">
    <div className="card d-flex justify-content-center position-relative">
    <img src={image1} className="card-img-top" alt="..."/>

      <div className="icons-container position-absolute d-flex justify-content-center ms-4">
         <i className="fa-solid fa-cart-shopping p-2 shadow-lg p-3 mb-5 bg-body-tertiary rounded" style={{backgroundColor:"whitesmoke", borderRadius:"5px"}}></i>
         <i className="fa-regular fa-heart ms-2 p-2 shadow-lg p-3 mb-5 bg-body-tertiary rounded"  style={{backgroundColor:"whitesmoke", borderRadius:"5px"}}></i>
         <i className="fa-solid fa-down-left-and-up-right-to-center  ms-2 p-2 shadow-lg p-3 mb-5 bg-body-tertiary rounded"  style={{backgroundColor:"whitesmoke", borderRadius:"5px"}}></i>
         <i className="fa-solid fa-eye ms-2 p-2 shadow-lg p-3 mb-5 bg-body-tertiary rounded"  style={{backgroundColor:"whitesmoke", borderRadius:"5px"}}></i>
      </div>
    <div className="card-body text-center">
      <h6 className='card-title'>Case with MagSafe</h6>
      <p className="card-text">$19.99
      </p>
      
       </div>
    </div>
   

  </div>
  {/* card 2 */}
  <div className="col g-3 d-flex justify-content-center">
    <div className="card position-relative">
    <img src={image2} className="card-img-top" alt="..."/>
    <div className="icons-container position-absolute d-flex justify-content-center ms-4">
         <i className="fa-solid fa-cart-shopping p-2 shadow-lg p-3 mb-5 bg-body-tertiary rounded" style={{backgroundColor:"whitesmoke", borderRadius:"5px"}}></i>
         <i className="fa-regular fa-heart ms-2 p-2 shadow-lg p-3 mb-5 bg-body-tertiary rounded"  style={{backgroundColor:"whitesmoke", borderRadius:"5px"}}></i>
         <i className="fa-solid fa-down-left-and-up-right-to-center  ms-2 p-2 shadow-lg p-3 mb-5 bg-body-tertiary rounded"  style={{backgroundColor:"whitesmoke", borderRadius:"5px"}}></i>
         <i className="fa-solid fa-eye ms-2 p-2 shadow-lg p-3 mb-5 bg-body-tertiary rounded"  style={{backgroundColor:"whitesmoke", borderRadius:"5px"}}></i>
      </div>
    <div className="card-body text-center">
      <h6 className='card-title'>Case with MagSafe</h6>
      <p className="card-text">$19.99
      </p>
      
       </div>
    </div>
  </div>
  {/* card 3  */}
  <div className="col g-3 d-flex justify-content-center">
    <div className="card posiion-relative">
    <img src={image3} className="card-img-top" alt="..."/>
    <div className="icons-container position-absolute d-flex justify-content-center ms-4">
         <i className="fa-solid fa-cart-shopping p-2 shadow-lg p-3 mb-5 bg-body-tertiary rounded" style={{backgroundColor:"whitesmoke", borderRadius:"5px"}}></i>
         <i className="fa-regular fa-heart ms-2 p-2 shadow-lg p-3 mb-5 bg-body-tertiary rounded"  style={{backgroundColor:"whitesmoke", borderRadius:"5px"}}></i>
         <i className="fa-solid fa-down-left-and-up-right-to-center  ms-2 p-2 shadow-lg p-3 mb-5 bg-body-tertiary rounded"  style={{backgroundColor:"whitesmoke", borderRadius:"5px"}}></i>
         <i className="fa-solid fa-eye ms-2 p-2 shadow-lg p-3 mb-5 bg-body-tertiary rounded"  style={{backgroundColor:"whitesmoke", borderRadius:"5px"}}></i>
      </div>
    <div className="card-body text-center">
      <h6 className='card-title'>Case with MagSafe</h6>
      <p className="card-text">$19.99
      </p>
      
       </div>
    </div>
  </div>
  {/* card 4 */}
  <div className="col g-3 d-flex justify-content-center">
    <div className="card position-relative">
    <img src={image4} className="card-img-top" alt="..."/>
    <div className="icons-container position-absolute d-flex justify-content-center ms-4">
         <i className="fa-solid fa-cart-shopping p-2 shadow-lg p-3 mb-5 bg-body-tertiary rounded" style={{backgroundColor:"whitesmoke", borderRadius:"5px"}}></i>
         <i className="fa-regular fa-heart ms-2 p-2 shadow-lg p-3 mb-5 bg-body-tertiary rounded"  style={{backgroundColor:"whitesmoke", borderRadius:"5px"}}></i>
         <i className="fa-solid fa-down-left-and-up-right-to-center  ms-2 p-2 shadow-lg p-3 mb-5 bg-body-tertiary rounded"  style={{backgroundColor:"whitesmoke", borderRadius:"5px"}}></i>
         <i className="fa-solid fa-eye ms-2 p-2 shadow-lg p-3 mb-5 bg-body-tertiary rounded"  style={{backgroundColor:"whitesmoke", borderRadius:"5px"}}></i>
      </div>
    <div className="card-body text-center">
      <h6 className='card-title'>Case with MagSafe</h6>
      <p className="card-text">$19.99
      </p>
      
       </div>
    </div>
  </div>  
</div>
  
   </div>
</div>
  

  
  
  )
}

export default HotDeals


