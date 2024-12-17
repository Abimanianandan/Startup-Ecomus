import React from 'react'
import '../hotdeals/HotDeals.css'
import image1 from '../hotdeals/hotdealsimgs/bark-phone-blue.jpg'

const HotDeals = () => {
  return(
    <>
  <div class="row row-cols-1 row-cols-md-4 g-4 mt-5">
  <div class="col">
    <div class="card">
    <img src={image1} class="card-img-top" alt="..."/>
    <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
    <img src={image1} class="card-img-top" alt="..."/>
    <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
    <img src={image1} class="card-img-top" alt="..."/>
    <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
    <img src={image1} class="card-img-top" alt="..."/>
    <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
</div>

  </>
  )
}

export default HotDeals