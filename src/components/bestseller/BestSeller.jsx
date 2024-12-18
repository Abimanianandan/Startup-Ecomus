import React from 'react'
import '../bestseller/BestSeller.css'
import bsimage1 from '../bestseller/bestsellerimgs/bark-phone-green.jpg'
import bsimage2 from '../bestseller/bestsellerimgs/headphone-red2.jpg'
import bsimage3 from '../bestseller/bestsellerimgs/wireless-charging-black.jpg'
import bsimage4 from '../bestseller/bestsellerimgs/wireless-charging-black2.jpg'


const BestSeller = () => {
  return(
    <div className="bestseller-main w-100%">
    <h1 className="display-4 display-sm-3 display-md-2 display-lg-1 text-center mt-5">Best Seller</h1>
 
  <div className="bestseller-container d-flex justify-content-center  mt-5">

  <div class="row hotdeals-row row-cols-1 row-cols-md-4 g-0 mt-3 d-flex justify-content-center">
    {/* card 1 */}
  <div class="col g-3 d-flex justify-content-center">
    <div class="card d-flex justify-content-center">
    <img src={bsimage1} class="card-img-top" alt="..."/>
    <div class="card-body text-center">
      <h6 class='card-title'>Case with MagSafe</h6>
      <p class="card-text">$19.99 &nbsp; <a href=""><i class="fa-solid fa-cart-shopping" style={{color: "#000000"}}></i></a>
      </p>
      
      
       </div>
    </div>
  </div>
  {/* card 2 */}
  <div class="col g-3 d-flex justify-content-center">
    <div class="card">
    <img src={bsimage2} class="card-img-top" alt="..."/>
    <div class="card-body text-center">
      <h6 class='card-title'>Case with MagSafe</h6>
      <p class="card-text">$19.99 &nbsp; <i class="fa-solid fa-cart-shopping" style={{color: "#000000"}}></i>
      </p>
      
       </div>
    </div>
  </div>
  {/* card 3  */}
  <div class="col g-3 d-flex justify-content-center">
    <div class="card">
    <img src={bsimage3} class="card-img-top" alt="..."/>
    <div class="card-body text-center">
      <h6 class='card-title'>Case with MagSafe</h6>
      <p class="card-text">$19.99 &nbsp; <i class="fa-solid fa-cart-shopping" style={{color: "#000000"}}></i>
      </p>
      
       </div>
    </div>
  </div>
  {/* card 4 */}
  <div class="col g-3 d-flex justify-content-center">
    <div class="card">
    <img src={bsimage4} class="card-img-top" alt="..."/>
    <div class="card-body text-center">
      <h6 class='card-title'>Case with MagSafe</h6>
      <p class="card-text">$19.99 &nbsp; <i class="fa-solid fa-cart-shopping" style={{color: "#000000"}}></i>
      </p>
      
       </div>
    </div>
  </div>
  
  

  
</div>
  </div>
   </div>

  

  
  
  )
}

export default BestSeller

