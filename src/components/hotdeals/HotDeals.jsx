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
  <div class="col g-3 d-flex justify-content-center">
    <div class="card d-flex justify-content-center">
    <img src={image1} class="card-img-top" alt="..."/>
    <div class="card-body text-center">
      <h6 class='card-title'>Case with MagSafe</h6>
      <p class="card-text">$19.99
      </p>
      
       </div>
    </div>
  </div>
  {/* card 2 */}
  <div class="col g-3 d-flex justify-content-center">
    <div class="card">
    <img src={image2} class="card-img-top" alt="..."/>
    <div class="card-body text-center">
      <h6 class='card-title'>Case with MagSafe</h6>
      <p class="card-text">$19.99
      </p>
      
       </div>
    </div>
  </div>
  {/* card 3  */}
  <div class="col g-3 d-flex justify-content-center">
    <div class="card">
    <img src={image3} class="card-img-top" alt="..."/>
    <div class="card-body text-center">
      <h6 class='card-title'>Case with MagSafe</h6>
      <p class="card-text">$19.99
      </p>
      
       </div>
    </div>
  </div>
  {/* card 4 */}
  <div class="col g-3 d-flex justify-content-center">
    <div class="card">
    <img src={image4} class="card-img-top" alt="..."/>
    <div class="card-body text-center">
      <h6 class='card-title'>Case with MagSafe</h6>
      <p class="card-text">$19.99
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


