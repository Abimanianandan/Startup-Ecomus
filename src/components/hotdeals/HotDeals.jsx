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

  <div class="row hotdeals-row row-cols-1 row-cols-md-4 g-0 mt-3 d-flex justify-content-center">
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



// import React from 'react';
// import '../hotdeals/HotDeals.css';
// import image1 from '../hotdeals/hotdealsimgs/bark-phone-blue.jpg';
// import image2 from '../hotdeals/hotdealsimgs/cable-black.jpg';
// import image3 from '../hotdeals/hotdealsimgs/headphone-white.jpg';
// import image4 from '../hotdeals/hotdealsimgs/albert-black.jpg';

// const HotDeals = () => {
//   return (
//     <div className="hotdeals-container d-flex justify-content-center">
//       <div className="row hotdeals-row row-cols- row-cols-sm-2 row-cols-md-3 row-cols-lg-4 gx-3 mt-5 ">
//         {/* card 1 */}
//         <div className="col mb-4">
//           <div className="card">
//             <img src={image1} className="card-img-top" alt="..." />
//             <div className="card-body text-center">
//               <h6 className="card-title">Case with MagSafe</h6>
//               <p className="card-text">$19.99</p>
//             </div>
//           </div>
//         </div>

//         {/* card 2 */}
//         <div className="col mb-4">
//           <div className="card">
//             <img src={image2} className="card-img-top" alt="..." />
//             <div className="card-body text-center">
//               <h6 className="card-title">Cable Black</h6>
//               <p className="card-text">$15.99</p>
//             </div>
//           </div>
//         </div>

//         {/* card 3 */}
//         <div className="col mb-4">
//           <div className="card">
//             <img src={image3} className="card-img-top" alt="..." />
//             <div className="card-body text-center">
//               <h6 className="card-title">Headphone White</h6>
//               <p className="card-text">$29.99</p>
//             </div>
//           </div>
//         </div>

//         {/* card 4 */}
//         <div className="col mb-4">
//           <div className="card">
//             <img src={image4} className="card-img-top" alt="..." />
//             <div className="card-body text-center">
//               <h6 className="card-title">Albert Black</h6>
//               <p className="card-text">$25.99</p>
//             </div>
//           </div>
//         </div>

        
//       </div>
//     </div>
//   );
// };

// export default HotDeals;






// import React, { useState, useRef } from 'react';
// import '../hotdeals/HotDeals.css';
// import image1 from '../hotdeals/hotdealsimgs/bark-phone-blue.jpg';
// import image2 from '../hotdeals/hotdealsimgs/cable-black.jpg';
// import image3 from '../hotdeals/hotdealsimgs/headphone-white.jpg';
// import image4 from '../hotdeals/hotdealsimgs/albert-black.jpg';
// import image5 from '../hotdeals/hotdealsimgs/albert-black.jpg';

// const HotDeals = () => {
//   const cardImages = [image1, image2, image3, image4, image5]; // Example images
//   const [rightArrow, setRightArrow] = useState(true);
//   const [leftArrow, setLeftArrow] = useState(false);
//   const dealsRef = useRef(null);

//   const smoothScroll = (element, distance, duration) => {
//     let start = element.scrollLeft;
//     let startTime = performance.now();
//     const scroll = (time) => {
//       const timeElapsed = time - startTime;
//       const scrollAmount = Math.min(timeElapsed / duration, 1) * distance;
//       element.scrollLeft = start + scrollAmount;
//       if (timeElapsed < duration) {
//         requestAnimationFrame(scroll);
//       }
//     };
//     requestAnimationFrame(scroll);
//   };

//   const handleRight = () => {
//     if (dealsRef.current) {
//       smoothScroll(dealsRef.current, 600, 1000); // Adjust scroll distance
//       setRightArrow(false);
//       setLeftArrow(true);
//     }
//   };

//   const handleLeft = () => {
//     if (dealsRef.current) {
//       smoothScroll(dealsRef.current, -600, 1000); // Adjust scroll distance
//       setRightArrow(true);
//       setLeftArrow(false);
//     }
//   };

//   return (
//     <div className="container mt-4 position-relative">
//       {/* Left Button */}
//       {leftArrow && (
//         <button
//           className="btn btn-dark position-absolute start-0 top-50 translate-middle-y"
//           onClick={handleLeft}
//           style={{ zIndex: 10 }}
//         >
//           &lt;
//         </button>
//       )}

//       {/* Cards Container */}
//       <div
//         className="row hotdeals-row gx-3 overflow-auto"
//         ref={dealsRef}
//         style={{ scrollBehavior: 'smooth' }}
//       >
//         {cardImages.map((image, index) => (
//           <div
//             className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center mb-4"
//             key={index}
//           >
//             <div className="card border-0 shadow" style={{ width: '100%' }}>
//               <img src={image} className="card-img-top" alt={`Hot Deal ${index + 1}`} />
//               <div className="card-body text-center">
//                 <h6 className="card-title">Hot Deal {index + 1}</h6>
//                 <p className="card-text">$19.99</p>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Right Button */}
//       {rightArrow && (
//         <button
//           className="btn btn-dark position-absolute end-0 top-50 translate-middle-y"
//           onClick={handleRight}
//           style={{ zIndex: 10 }}
//         >
//           &gt;
//         </button>
//       )}
//     </div>
//   );
// };

// export default HotDeals;

