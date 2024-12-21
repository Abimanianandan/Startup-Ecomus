
import React, { useRef, useState } from "react";
import "../bestseller/BestSeller.css";
import WhatsAppRedirect from "../whatsappredirection/WhatsAppRedirect";
import { Link } from "react-router-dom";


const BestSeller = () => {
  const productRef = useRef(null);
    const [right, setRight] = useState(true);
    const [left, setLeft] = useState(false);
    const [red,setRed] = useState(true);
    const [selectedProduct,setSelectedProduct]=useState("")
    const [buy,setBuy]=useState(false)

    const [white,setWhite] = useState(false);
    const [black,setBlack] = useState(false);
    const [blue,setBlue] = useState(true);
    const [black1,setBlack1] = useState(false);
    const [orange,setOrange] = useState(false);
    const [green,setGreen] = useState(false);
    const [brown,setBrown] = useState(false);
    const [black2,setBlack2] = useState(true);
    const [white1,setWhite1] = useState(false);
    const [black3,setBlack3] = useState(true);
    const [white2,setWhite2] = useState(false);
    const [black4,setBlack4] = useState(true);
    const [orange1,setOrange1] = useState(false)
    const [white3,setWhite3] = useState(false);
   
    const smoothScroll = (element, distance, duration) => {
      let start = element.scrollLeft;
      let startTime = performance.now();
      const scroll = (time) => {
        const timeElapsed = time - startTime;
        const scrollAmount = Math.min(timeElapsed / duration, 1) * distance;
        element.scrollLeft = start + scrollAmount;
        if (timeElapsed < duration) {
          requestAnimationFrame(scroll);
        }
      };
 
      requestAnimationFrame(scroll);
    };
    const handleRight = () => {
      if (productRef.current) {
        smoothScroll(productRef.current, 1400, 1000);
        setRight(false);
        setLeft(true);
      }
    };
    const handleLeft = () => {
      if (productRef.current) {
        smoothScroll(productRef.current, -1400, 1000);
        setRight(true);
        setLeft(false);
      }
    };
    const handleWhite = () =>{
      setWhite(true);
      setRed(false);
      setBlack(false);
    }
    const handleRed = () =>{
      setRed(true);
      setWhite(false);
      setBlack(false);
    }
    const handleBlack = () =>{
      setBlack(true);
      setWhite(false);
      setRed(false);
    }
    const handleBlue = () =>{
      setBlue(true)
      setBlack1(false)
      setOrange(false)
      setGreen(false)
      setBrown(false)
    }
    const handleBlack1 = () =>{
      setBlack1(true)
      setBlue(false)
      setOrange(false)
      setGreen(false)
      setBrown(false)
    }
    const handleOrange = () =>{
      setOrange(true)
      setBlue(false)
      setBlack1(false)
      setGreen(false)
      setBrown(false)
    }
    const handleGreen = () =>{
      setGreen(true)
      setBlue(false)
      setBlack1(false)
      setOrange(false)
      setBrown(false)
    }
    const handleBrown = () =>{
      setBrown(true)
      setBlue(false)
      setBlack1(false)
      setOrange(false)
      setGreen(false)
    }
    const handleBlack2 = () =>{
        setBlack2(true);
        setWhite1(false);
    }
    const handleWhite1 = () =>{
      setWhite1(true);
      setBlack2(false);
  }
  const handleBlack3 = () =>{
    setBlack3(true);
    setWhite2(false);
}
const handleWhite2 = () =>{
  setWhite2(true);
  setBlack3(false);
}
const handleBlack4 = () =>{
  setBlack4(true);
  setOrange1(false);
  setWhite3(false);
}
const handleOrange1 = () =>{
  setOrange1(true);
  setBlack4(false);
  setWhite3(false);
}
const handleWhite3 = () =>{
  setWhite3(true);
  setOrange1(false);
  setBlack4(false);
}
const handleBuying=(products)=>{    
  setSelectedProduct(products)        
   setBuy(true)
    }


  return (
    <div className="bestseller-main w-100%">
      <h1 className="display-4 display-sm-3 display-md-2 display-lg-1 text-center mt-5">
        Best Seller
      </h1>
      {buy ?
   
   <WhatsAppRedirect setBuy={setBuy} ProductName={selectedProduct.name} ProductPrice={selectedProduct.price}/>
    :
      <div className="container mt-5" ref={productRef}>
        <div className="row" style={{flexWrap:"nowrap",gap:"2px"}}>
          {/* card 1 */}
          <div className="col-sm-3 col-md-5 col-lg-3 d-flex justify-content-center">
            <div className="card shadow p-4 mb-5 bg-body-tertiary rounded position-relative">
              {white &&  <img
              src="https://ecomusnext-themesflat.vercel.app/images/products/headphone-white.jpg"
              className="card-img b-one"
              alt="..."
            />
           }
            {red &&  <img
              src="https://ecomusnext-themesflat.vercel.app/images/products/headphone-red2.jpg"
              className="card-img b-one"
              alt="..."
            />
           }
            {black &&  <img
              src="https://ecomusnext-themesflat.vercel.app/images/products/headphone-black.jpg"
              className="card-img b-one"
              alt="..."
            />
           }
              <div className="icons-container position-absolute d-flex justify-content-center ms-4">
                <i
                  className="fa-regular fa-heart ms-2 p-2 shadow-lg p-3 mb-5 bg-body-tertiary rounded icon"
                  style={{ backgroundColor: "whitesmoke", borderRadius: "5px" }}
                ></i>
              <Link to="/ordermanagement"><i className="fa-regular fa-handshake ms-2 p-2 shadow-lg p-3 mb-5 bg-body-tertiary rounded  icon"  style={{backgroundColor:"whitesmoke", borderRadius:"5px"}}></i></Link>

                <i
                  className="fa-solid fa-eye ms-2 p-2 shadow-lg p-3 mb-5 bg-body-tertiary rounded icon"
                  style={{ backgroundColor: "whitesmoke", borderRadius: "5px" }}
                ></i>
              </div>
              <div className="card-body text-center">
                <h6 className="card-title">Beats Studio Buds</h6>
                <p className="card-text">
                  $199.00 &nbsp;{" "}</p>
                  <div className="circle-colors d-flex justify-content-center" style={{gap:"15px",cursor:"pointer"}} >
                  <i className="fa-solid fa-circle p-1 rounded-circle" style={{border: red && "1px solid black",color:"red"}} onMouseEnter={handleRed}></i>  
                  <i className="fa-solid fa-circle p-1 rounded-circle" style={{border: white && "1px solid black",color:"white"}} onMouseEnter={handleWhite}></i>  
                  <i className="fa-solid fa-circle p-1 rounded-circle" style={{border: black && "1px solid black",color:"black"}} onMouseEnter={handleBlack}></i>  
                </div>  
                <button className="btn rounded-pill mt-3 w-100 buy" onClick={()=>handleBuying({name:'Case with MagSafe',price:'$19.99'})}>ADD TO CART</button>
              </div>
            </div>
          </div>
          {/* cord 2 */}
          <div className="col-sm-3 col-md-5 col-lg-3 d-flex justify-content-center">
            <div className="card shadow p-4 mb-5 bg-body-tertiary rounded position-relative">
            {blue && <img
              src= "https://ecomusnext-themesflat.vercel.app/images/products/bark-phone-blue2.jpg"
              className="card-img b-two"
              alt="..."
            /> }
             {black1 && <img
              src= "https://ecomusnext-themesflat.vercel.app/images/products/bark-phone-black.jpg"
              className="card-img b-two"
              alt="..."
            /> }
            {orange && <img
              src= "https://ecomusnext-themesflat.vercel.app/images/products/bark-phone-orange.jpg"
              className="card-img b-two"
              alt="..."
            /> }
             {green && <img
              src= "https://ecomusnext-themesflat.vercel.app/images/products/bark-phone-green.jpg"
              className="card-img b-two"
              alt="..."
            /> }
             {brown && <img
              src= "https://ecomusnext-themesflat.vercel.app/images/products/bark-phone-light-brown.jpg"
              className="card-img b-two"
              alt="..."
            /> }
              {left ? (
                  <i
                    className="fa-solid fa-chevron-left  position-absolute angle"
                    style={{
                      top: "40%",
                      right: "270px",
                      transform: "translateY(-50%)",
                      color: "black",
                      fontSize: "24px",
                      cursor: "pointer",
                    }}
                    onClick={handleLeft}
                  ></i>
                ) : (
                  ""
                )}
              <div className="icons-container position-absolute d-flex justify-content-center ms-4">
               
                <i
                  className="fa-regular fa-heart ms-2 p-2 shadow-lg p-3 mb-5 bg-body-tertiary rounded icon"
                  style={{ backgroundColor: "whitesmoke", borderRadius: "5px" }}
                ></i>
                              <Link to="/ordermanagement"><i className="fa-regular fa-handshake ms-2 p-2 shadow-lg p-3 mb-5 bg-body-tertiary rounded  icon"  style={{backgroundColor:"whitesmoke", borderRadius:"5px"}}></i></Link>

                <i
                  className="fa-solid fa-eye ms-2 p-2 shadow-lg p-3 mb-5 bg-body-tertiary rounded icon"
                  style={{ backgroundColor: "whitesmoke", borderRadius: "5px" }}
                ></i>
              </div>
              <div className="card-body text-center">
                <h6 className="card-title">Case with MagSafe</h6>
                <p className="card-text">$19.99</p>
                <div className="circle-colors d-flex justify-content-evenly" style={{cursor:'pointer'}}>
                  <i className="fa-solid fa-circle p-1 rounded-circle blue" style={{border: blue && "1px solid black",color:"rgb(161,161,250)"}} onMouseEnter={handleBlue}></i>  
                  <i className="fa-solid fa-circle p-1 rounded-circle black" style={{border: black1 && "1px solid black"}} onMouseEnter={handleBlack1}></i>  
                  <i className="fa-solid fa-circle p-1 rounded-circle orange" style={{border: orange && "1px solid black",color:"orange"}} onMouseEnter={handleOrange}></i>  
                  <i className="fa-solid fa-circle p-1 rounded-circle green" style={{border:green && "1px solid black",color:"rgb(127, 213, 127)"}} onMouseEnter={handleGreen}></i>  
                  <i className="fa-solid fa-circle p-1 rounded-circle brown" style={{border:brown && "1px solid black",color:"rgb(167, 126, 126)"}} onMouseEnter={handleBrown}></i>  
                </div>
                <button className="btn rounded-pill mt-3 w-100 buy" onClick={()=>handleBuying({name:'Case with MagSafe',price:'$19.99'})}>ADD TO CART</button>
              </div>
            </div>
          </div>
          {/* card 3  */}
          <div className="col-sm-3 col-md-5 col-lg-3 d-flex justify-content-center">
            <div className="card shadow p-4 mb-5 bg-body-tertiary rounded position-relative">
            {white1 && <img
              src= "https://ecomusnext-themesflat.vercel.app/images/products/wireless-charging-white2.jpg"
              className="card-img b-three"
              alt="..."
            /> }
             {black2 && <img
              src= "https://ecomusnext-themesflat.vercel.app/images/products/wireless-charging-black2.jpg"
              className="card-img b-three"
              alt="..."
            /> }
              <div className="icons-container position-absolute d-flex justify-content-center ms-4">
                <i
                  className="fa-regular fa-heart ms-2 p-2 shadow-lg p-3 mb-5 bg-body-tertiary rounded icon"
                  style={{ backgroundColor: "whitesmoke", borderRadius: "5px" }}
                ></i>
                              <Link to="/ordermanagement"><i className="fa-regular fa-handshake ms-2 p-2 shadow-lg p-3 mb-5 bg-body-tertiary rounded  icon"  style={{backgroundColor:"whitesmoke", borderRadius:"5px"}}></i></Link>

                <i
                  className="fa-solid fa-eye ms-2 p-2 shadow-lg p-3 mb-5 bg-body-tertiary rounded icon"
                  style={{ backgroundColor: "whitesmoke", borderRadius: "5px" }}
                ></i>
              </div>
              <div className="card-body text-center">
                <h6 className="card-title">Smart Watch Series 6</h6>
                <p className="card-text">
                  $299.99 &nbsp;{" "}</p>
                  <div className="circle-colors d-flex justify-content-center" style={{gap:"15px",cursor:"pointer"}} >
                  <i className="fa-solid fa-circle p-1 rounded-circle" style={{border: black2 && "1px solid black",color:"black"}} onMouseEnter={handleBlack2}></i>  
                  <i className="fa-solid fa-circle p-1 rounded-circle" style={{border: white1 && "1px solid black",color:"white"}} onMouseEnter={handleWhite1}></i>  
                </div>
                <button className="btn rounded-pill mt-3 w-100 buy" onClick={()=>handleBuying({name:'Case with MagSafe',price:'$19.99'})}>ADD TO CART</button>
              </div>
            </div>
          </div>

          {/* card 4 */}

          <div className="col-sm-3 col-md-5 col-lg-3  d-flex justify-content-center">
            <div className="card shadow p-4 mb-5 bg-body-tertiary rounded position-relative">
            {white2 && <img
              src= "https://ecomusnext-themesflat.vercel.app/images/products/wireless-charging-white.jpg"
              className="card-img b-four"
              alt="..."
            /> }
             {black3 && <img
              src= "https://ecomusnext-themesflat.vercel.app/images/products/wireless-charging-black2.jpg"
              className="card-img b-four"
              alt="..."
            /> }
              {right ? (
              <i
              className={`fa-solid fa-chevron-right arrow arrow-right`}
              aria-label="Scroll Right"
              role="button"
              onClick={handleRight}
            ></i>
           
                 
                ) : (
                  ""
                )}
              <div className="icons-container position-absolute d-flex justify-content-center ms-4">
                <i
                  className="fa-regular fa-heart ms-2 p-2 shadow-lg p-3 mb-5 bg-body-tertiary rounded icon"
                  style={{ backgroundColor: "whitesmoke", borderRadius: "5px" }}
                ></i>
                              <Link to="/ordermanagement"><i className="fa-regular fa-handshake ms-2 p-2 shadow-lg p-3 mb-5 bg-body-tertiary rounded  icon"  style={{backgroundColor:"whitesmoke", borderRadius:"5px"}}></i></Link>

                <i
                  className="fa-solid fa-eye ms-2 p-2 shadow-lg p-3 mb-5 bg-body-tertiary rounded icon"
                  style={{ backgroundColor: "whitesmoke", borderRadius: "5px" }}
                ></i>
              </div>
              <div className="card-body text-center">
                <h6 className="card-title">Ultra Thin Labtop</h6>
                <p className="card-text">
                  $999.99 &nbsp;{" "}</p>
                  <div className="circle-colors d-flex justify-content-center" style={{gap:"15px",cursor:"pointer"}} >
                  <i className="fa-solid fa-circle p-1 rounded-circle" style={{border: black3 && "1px solid black",color:"black"}} onMouseEnter={handleBlack3}></i>  
                  <i className="fa-solid fa-circle p-1 rounded-circle" style={{border: white2 && "1px solid black",color:"white"}} onMouseEnter={handleWhite2}></i>  
                </div>
                <button className="btn rounded-pill mt-3 w-100 buy" onClick={()=>handleBuying({name:'Case with MagSafe',price:'$19.99'})}>ADD TO CART</button>
              </div>
            </div>
          </div>
          {/* card 5 */}
          <div className="col-sm-3 col-md-5 col-lg-3  d-flex justify-content-center">
            <div className="card shadow p-4 mb-5 bg-body-tertiary rounded position-relative">
            {white3 && <img
              src= "https://ecomusnext-themesflat.vercel.app/images/products/albert-white2.jpg"
              className="card-img b-five"
              alt="..."
            /> }
             {black4 && <img
              src= "https://ecomusnext-themesflat.vercel.app/images/products/albert-black.jpg"
              className="card-img b-five"
              alt="..."
            /> }
             {orange1 && <img
              src= "https://ecomusnext-themesflat.vercel.app/images/products/albert-orange.jpg"
              className="card-img b-five"
              alt="..."
            /> }
              <div className="icons-container position-absolute d-flex justify-content-center ms-4">
                <i
                  className="fa-regular fa-heart ms-2 p-2 shadow-lg p-3 mb-5 bg-body-tertiary rounded icon"
                  style={{ backgroundColor: "whitesmoke", borderRadius: "5px" }}
                ></i>
                              <Link to="/ordermanagement"><i className="fa-regular fa-handshake ms-2 p-2 shadow-lg p-3 mb-5 bg-body-tertiary rounded  icon"  style={{backgroundColor:"whitesmoke", borderRadius:"5px"}}></i></Link>

                <i
                  className="fa-solid fa-eye ms-2 p-2 shadow-lg p-3 mb-5 bg-body-tertiary rounded icon"
                  style={{ backgroundColor: "whitesmoke", borderRadius: "5px" }}
                ></i>
              </div>
              <div className="card-body text-center">
                <h6 className="card-title">Wireless Earbuds</h6>
                <p className="card-text">
                  $149.99 &nbsp;{" "}</p>
                  <div className="circle-colors d-flex justify-content-center" style={{gap:"15px",cursor:"pointer"}} >
                  <i className="fa-solid fa-circle p-1 rounded-circle" style={{border: black4 && "1px solid black",color:"black"}} onMouseEnter={handleBlack4}></i>  
                  <i className="fa-solid fa-circle p-1 rounded-circle" style={{border: orange1 && "1px solid black",color:"orange"}} onMouseEnter={handleOrange1}></i>  
                  <i className="fa-solid fa-circle p-1 rounded-circle" style={{border: white3 && "1px solid black",color:"white"}} onMouseEnter={handleWhite3}></i>  
                </div>
                <button className="btn rounded-pill mt-3 w-100 buy" onClick={()=>handleBuying({name:'Case with MagSafe',price:'$19.99'})}>ADD TO CART</button>
              </div>
            </div>
          </div>
        </div>
      </div>
}
    </div>
  );
};

export default BestSeller;