import React, { useContext, useRef, useState } from 'react'
import '../hotdeals/HotDeals.css'
import WhatsAppRedirect from '../whatsappredirection/WhatsAppRedirect';
import { cartContext } from '../../App';


const HotDeals = () => {
  const {heart,setHeart,setHeartItem} = useContext(cartContext)
  const productRef = useRef(null);
  const [rightArrow, setRightArrow] = useState(true);
  const [leftArrow, setLeftArrow] = useState(false);
  const [selectedProduct,setSelectedProduct]=useState("")
  const [buy,setBuy]=useState(false)
  const [blue,setBlue] = useState(true);
  const [black,setBlack] = useState(false);
  const [orange,setOrange] = useState(false);
  const [green,setGreen] = useState(false);
  const [brown,setBrown] = useState(false);
  const [black1,setBlack1] = useState(true)
  const [white,setWhite] = useState(false);
  const [pink,setPink] = useState(false);
  const [gray,setGray] = useState(false);
  const [white1,setWhite1] = useState(true);
  const [red,setRed] = useState(false);
  const [black2,setBlack2] = useState(false)
  const [black3,setBlack3] = useState(true)
  const [white2,setWhite2] = useState(false);
  const [black4,setBlack4] = useState(true);
  const [white3,setWhite3] = useState(false);
  const [pink1,setPink1] = useState(false);
  const [blue1,setBlue1] = useState(false);
  const [black5,setBlack5] = useState(true);
  const [white4,setWhite4] = useState(false);
  const [blue2,setBlue2] = useState(false);


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
      setRightArrow(false);
      setLeftArrow(true);
    }
  };
  const handleLeft = () => {
    if (productRef.current) {
      smoothScroll(productRef.current, -1400, 1000);
      setRightArrow(true);
      setLeftArrow(false);
    }
  };
  const handleBlue = () =>{
    setBlue(true)
    setBlack(false)
    setOrange(false)
    setGreen(false)
    setBrown(false)
  }
  const handleBlack = () =>{
    setBlack(true)
    setBlue(false)
    setOrange(false)
    setGreen(false)
    setBrown(false)
  }
  const handleOrange = () =>{
    setOrange(true)
    setBlack(false)
    setBlue(false)
    setGreen(false)
    setBrown(false)
  }
  const handleGreen = () =>{
    setGreen(true)
    setBlack(false)
    setBlue(false)
    setOrange(false)
    setBrown(false)
  }
  const handleBrown = () =>{
    setBrown(true)
    setBlack(false)
    setBlue(false)
    setOrange(false)
    setGreen(false)
  }
  const handleBlack1 = () =>{
    setBlack1(true);
    setWhite(false);
    setPink(false);
    setGray(false)
  }  

  const handleWhite = () =>{
    setWhite(true);
    setBlack1(false);
    setPink(false);
    setGray(false)
  }
  const handlePink = () =>{
    setPink(true);
    setBlack1(false);
    setWhite(false);
    setGray(false)
  }
  const handleGray = () =>{
    setGray(true);
    setBlack1(false);
    setWhite(false);
    setPink(false);
  }
  const handleWhite1 = () =>{
    setWhite1(true);
    setRed(false);
    setBlack2(false);
  }
  const handleRed = () =>{
    setRed(true);
    setWhite1(false);
    setBlack2(false);
  }
  const handleBlack2 = () =>{
    setBlack2(true);
    setWhite1(false);
    setRed(false);
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
    setWhite3(false);
    setPink1(false);
    setBlue1(false);
  }
  const handleWhite3 = () =>{
    setWhite3(true);
    setBlack4(false);
    setPink1(false);
    setBlue1(false);
  }
  const handlePink1 = () =>{
    setPink1(true);
    setBlack4(false);
    setWhite3(false);
    setBlue1(false);
  }
  const handleBlue1 = () =>{
    setBlue1(true);
    setPink1(false);
    setBlack4(false);
    setWhite3(false);
  }
  const handleBlack5 = () =>{
    setBlack5(true);
    setWhite4(false);
    setBlue2(false);
  }
  const handleWhite4 = () =>{
     setWhite4(true);
     setBlack5(false);
     setBlue2(false);
  }
  const handleBlue2 = () =>{
    setBlue2(true);
    setBlack5(false);
    setWhite4(false);
  }

  const handleBuy=(products)=>{    
    setSelectedProduct(products)        
     setBuy(true) 
      }

  const handleHeart = (item) =>{
    setHeartItem((prevItem)=> [...prevItem,item]) 
    setHeart(heart + 1)    
  }

  return(
    <>
    <h1 className="d-flex justify-content-center mt-5">Hot Deals</h1>
   {buy ? 
   
       <WhatsAppRedirect setBuy={setBuy} ProductName={selectedProduct.name} ProductPrice={selectedProduct.price}/>
        : <div className="container" ref={productRef}>
      <div className="row mt-5 hotdealsrow-container " style={{flexWrap:"nowrap"}}>  
        <div className="col-sm-3 col-md-5 col-lg-3">
          <div className="card shadow p-4 mb-5 bg-body-tertiary rounded  position-relative"  >
            {blue && <img
              src= "https://ecomusnext-themesflat.vercel.app/images/products/bark-phone-blue2.jpg"
              className="card-img one"
              alt="..."
            /> }
             {black && <img
              src= "https://ecomusnext-themesflat.vercel.app/images/products/bark-phone-black.jpg"
              className="card-img one"
              alt="..."
            /> }
            {orange && <img
              src= "https://ecomusnext-themesflat.vercel.app/images/products/bark-phone-orange.jpg"
              className="card-img one"
              alt="..."
            /> }
             {green && <img
              src= "https://ecomusnext-themesflat.vercel.app/images/products/bark-phone-green.jpg"
              className="card-img one"
              alt="..."
            /> }
             {brown && <img
              src= "https://ecomusnext-themesflat.vercel.app/images/products/bark-phone-light-brown.jpg"
              className="card-img one"
              alt="..."
            /> }
             <div className="icons-container position-absolute d-flex justify-content-center ms-4">
                <i className="fa-solid fa-cart-shopping p-2 shadow-lg p-3 mb-5 bg-body-tertiary rounded  icon carticon" onClick={()=>handleBuy({name:'Case with MagSafe',price:'$19.99'})} style={{backgroundColor:"whitesmoke", borderRadius:"5px"}}> </i> 
                <i className="fa-regular fa-heart ms-2 p-2 shadow-lg p-3 mb-5 bg-body-tertiary rounded  icon"  onClick={()=>handleHeart({
                    name: "Case with MagSafe",
                    price: "$19.00",
                    img: "https://ecomusnext-themesflat.vercel.app/images/products/bark-phone-green.jpg",
                  })} style={{backgroundColor:"whitesmoke", borderRadius:"5px"}}></i>
                <i className="fa-solid fa-down-left-and-up-right-to-center  ms-2 p-2 shadow-lg p-3 mb-5 bg-body-tertiary rounded  icon"  style={{backgroundColor:"whitesmoke", borderRadius:"5px"}}></i>
                <i className="fa-solid fa-eye ms-2 p-2 shadow-lg p-3 mb-5 bg-body-tertiary rounded  icon"  style={{backgroundColor:"whitesmoke", borderRadius:"5px"}}></i>
            </div>
            <div className="card-body text-center">
               <h6 className='card-title'>Case with MagSafe</h6>
                <p className="card-text">$19.99</p>   
                <div className="circle-colors d-flex justify-content-evenly" style={{cursor:'pointer'}}>
                  <i className="fa-solid fa-circle p-1 rounded-circle blue" style={{border: blue && "1px solid black",color:"rgb(161,161,250)"}} onMouseEnter={handleBlue}></i>  
                  <i className="fa-solid fa-circle p-1 rounded-circle black" style={{border: black && "1px solid black"}} onMouseEnter={handleBlack}></i>  
                  <i className="fa-solid fa-circle p-1 rounded-circle orange" style={{border: orange && "1px solid black",color:"orange"}} onMouseEnter={handleOrange}></i>  
                  <i className="fa-solid fa-circle p-1 rounded-circle green" style={{border:green && "1px solid black",color:"rgb(127, 213, 127)"}} onMouseEnter={handleGreen}></i>  
                  <i className="fa-solid fa-circle p-1 rounded-circle brown" style={{border:brown && "1px solid black",color:"rgb(167, 126, 126)"}} onMouseEnter={handleBrown}></i>  
                </div> 
            </div>
          </div>
        </div>
        <div className="col-sm-3 col-md-5 col-lg-3">
          <div className="card shadow p-4 mb-5 bg-body-tertiary rounded position-relative">
           {black1 &&  <img
              src="https://ecomusnext-themesflat.vercel.app/images/products/cable-black.jpg"
              className="card-img two"
              alt="..."
            />
           }
            {white &&  <img
              src="https://ecomusnext-themesflat.vercel.app/images/products/cable-white.jpg"
              className="card-img two"
              alt="..."
            />
           }
            {pink &&  <img
              src="https://tse3.mm.bing.net/th?id=OIP.NALIB-QgruWgm6afALuZWAAAAA&pid=Api&P=0&h=180"
              className="card-img two"
              alt="..."
            />
           }
            {gray &&  <img
              src="https://ecomusnext-themesflat.vercel.app/images/products/cable-grey.jpg"
              className="card-img two"
              alt="..."
            />
           }
             <div className="icons-container position-absolute d-flex justify-content-center ms-4">
                <i className="fa-solid fa-cart-shopping p-2 shadow-lg p-3 mb-5 bg-body-tertiary rounded icon"onClick={()=>handleBuy({name:'MagSafe 3 Cable',price:'$39.00'})} style={{backgroundColor:"whitesmoke", borderRadius:"5px"}}></i>
                <i className="fa-regular fa-heart ms-2 p-2 shadow-lg p-3 mb-5 bg-body-tertiary rounded icon"onClick={()=>handleHeart({
                    name: "MagSafe 3 Cable",
                    price: "$39.00",
                    img: "https://ecomusnext-themesflat.vercel.app/images/products/cable-black.jpg",})}  style={{backgroundColor:"whitesmoke", borderRadius:"5px"}}></i>
                <i className="fa-solid fa-down-left-and-up-right-to-center  ms-2 p-2 shadow-lg p-3 mb-5 bg-body-tertiary rounded icon"  style={{backgroundColor:"whitesmoke", borderRadius:"5px"}}></i>
                <i className="fa-solid fa-eye ms-2 p-2 shadow-lg p-3 mb-5 bg-body-tertiary rounded icon"  style={{backgroundColor:"whitesmoke", borderRadius:"5px"}}></i>
            </div>
            <div className="card-body text-center">
            <h6 className='card-title'>MagSafe 3 Cable</h6>
            <p className="card-text">$39.00</p> 
            <div className="circle-colors d-flex justify-content-evenly"style={{cursor:'pointer'}} >
                  <i className="fa-solid fa-circle p-1 rounded-circle" style={{border:black1 && "1px solid black",color:"black"}} onMouseEnter={handleBlack1}></i>  
                  <i className="fa-solid fa-circle p-1 rounded-circle" style={{border:white && "1px solid black",color:"white"}} onMouseEnter={handleWhite}></i>  
                  <i className="fa-solid fa-circle p-1 rounded-circle" style={{border:pink && "1px solid black",color:"pink"}} onMouseEnter={handlePink}></i>  
                  <i className="fa-solid fa-circle p-1 rounded-circle" style={{border:gray && "1px solid black",color:"gray"}} onMouseEnter={handleGray}></i>  
                </div>   
            </div>
          </div>
        </div>
        <div className="col-sm-3 col-md-5 col-lg-3">
          <div className="card shadow p-4 mb-5 bg-body-tertiary rounded position-relative">
          {white1 &&  <img
              src="https://ecomusnext-themesflat.vercel.app/images/products/headphone-white.jpg"
              className="card-img three"
              alt="..."
            />
           }
            {red &&  <img
              src="https://ecomusnext-themesflat.vercel.app/images/products/headphone-red2.jpg"
              className="card-img three"
              alt="..."
            />
           }
            {black2 &&  <img
              src="https://ecomusnext-themesflat.vercel.app/images/products/headphone-black.jpg"
              className="card-img three"
              alt="..."
            />
           }
           
             {leftArrow ? (
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
                <i className="fa-solid fa-cart-shopping p-2 shadow-lg p-3 mb-5 bg-body-tertiary rounded icon"onClick={()=>handleBuy({name:'Beats Studio Buds',price:'$199.00'})} style={{backgroundColor:"whitesmoke", borderRadius:"5px"}}></i>
                <i className="fa-regular fa-heart ms-2 p-2 shadow-lg p-3 mb-5 bg-body-tertiary rounded icon"onClick={()=>handleHeart({
                    name: "Beats Studio Buds",
                    price: "$199.00",
                    img: "https://ecomusnext-themesflat.vercel.app/images/products/headphone-red2.jpg",})}  style={{backgroundColor:"whitesmoke", borderRadius:"5px"}}></i>
                <i className="fa-solid fa-down-left-and-up-right-to-center  ms-2 p-2 shadow-lg p-3 mb-5 bg-body-tertiary rounded icon"  style={{backgroundColor:"whitesmoke", borderRadius:"5px"}}></i>
                <i className="fa-solid fa-eye ms-2 p-2 shadow-lg p-3 mb-5 bg-body-tertiary rounded icon"  style={{backgroundColor:"whitesmoke", borderRadius:"5px"}}></i>
            </div>
            <div className="card-body text-center">
            <h6 className='card-title'>Beats Studio Buds</h6>
            <p className="card-text">$199.00</p> 
            <div className="circle-colors d-flex justify-content-center" style={{gap:"15px",cursor:"pointer"}} >
                  <i className="fa-solid fa-circle p-1 rounded-circle" style={{border: white1 && "1px solid black",color:"white"}} onMouseEnter={handleWhite1}></i>  
                  <i className="fa-solid fa-circle p-1 rounded-circle" style={{border: red && "1px solid black",color:"red"}} onMouseEnter={handleRed}></i>  
                  <i className="fa-solid fa-circle p-1 rounded-circle" style={{border: black2 && "1px solid black",color:"black"}} onMouseEnter={handleBlack2}></i>  
                </div>  
            </div>
          </div>
        </div>
        <div className="col-sm-3 col-md-5 col-lg-3">
          <div className="card shadow p-4 mb-5 bg-body-tertiary rounded position-relative">
          {black3 &&  <img
              src="https://ecomusnext-themesflat.vercel.app/images/products/albert-black.jpg"
              className="card-img four"
              alt="..."
            />
           }
            {white2 &&  <img
              src="https://ecomusnext-themesflat.vercel.app/images/products/albert-white.jpg"
              className="card-img four"
              alt="..."
            />
           }
              {rightArrow ? (
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
                <i className="fa-solid fa-cart-shopping p-2 shadow-lg p-3 mb-5 bg-body-tertiary rounded icon"onClick={()=>handleBuy({name:'Blue Ocean Band',price:'$9.00'})} style={{backgroundColor:"whitesmoke", borderRadius:"5px"}}></i>
                <i className="fa-regular fa-heart ms-2 p-2 shadow-lg p-3 mb-5 bg-body-tertiary rounded icon" onClick={()=>handleHeart({
                    name: "Blue Ocean Band",
                    price: "$9.00",
                    img: "https://ecomusnext-themesflat.vercel.app/images/products/albert-white.jpg",})} style={{backgroundColor:"whitesmoke", borderRadius:"5px"}}></i>
                <i className="fa-solid fa-down-left-and-up-right-to-center  ms-2 p-2 shadow-lg p-3 mb-5 bg-body-tertiary rounded icon"  style={{backgroundColor:"whitesmoke", borderRadius:"5px"}}></i>
                <i className="fa-solid fa-eye ms-2 p-2 shadow-lg p-3 mb-5 bg-body-tertiary rounded icon"  style={{backgroundColor:"whitesmoke", borderRadius:"5px"}}></i>
            </div>
            <div className="card-body text-center">
            <h6 className='card-title'>Blue Ocean Band</h6>
            <p className="card-text">$9.00</p>  
            <div className="circle-colors d-flex justify-content-center" style={{gap:"15px",cursor:"pointer"}} >
                  <i className="fa-solid fa-circle p-1 rounded-circle" style={{border: black3 && "1px solid black",color:"black"}} onMouseEnter={handleBlack3}></i>  
                  <i className="fa-solid fa-circle p-1 rounded-circle" style={{border: white2 && "1px solid black",color:"white"}} onMouseEnter={handleWhite2}></i>  
                </div>  
            </div>
          </div>
        </div>
        <div className="col-sm-3 col-md-5 col-lg-3">
          <div className="card shadow p-4 mb-5 bg-body-tertiary rounded position-relative">
          {black4 && <img
              src= "https://tse3.mm.bing.net/th?id=OIP.zAEy4tGoL8ixgcDCHM0KJwHaHa&pid=Api&P=0&h=180"
              className="card-img five"
              alt="..."
            /> }
             {white3 && <img
              src= "https://tse4.mm.bing.net/th?id=OIP.RZjRvaO9IfDAwpD20I7e5wHaHa&pid=Api&P=0&h=180"
              className="card-img five"
              alt="..."
            /> }
            {pink1 && <img
              src= "https://tse4.mm.bing.net/th?id=OIP.9eSLzTejcVBWh5qDTnpSuAHaHa&pid=Api&P=0&h=180"
              className="card-img five"
              alt="..."
            /> }
             {blue1 && <img
              src= "https://tse2.mm.bing.net/th?id=OIP.E0HqFb3QUflcVW2tgRROUwHaHa&pid=Api&P=0&h=180"
              className="card-img five"
              alt="..."
            /> }
            <div className="icons-container position-absolute d-flex justify-content-center ms-4">
                <i className="fa-solid fa-cart-shopping p-2 shadow-lg p-3 mb-5 bg-body-tertiary rounded icon"onClick={()=>handleBuy({name:'Beats HeadPhone',price:'$299.00'})} style={{backgroundColor:"whitesmoke", borderRadius:"5px"}}></i>
                <i className="fa-regular fa-heart ms-2 p-2 shadow-lg p-3 mb-5 bg-body-tertiary rounded icon" onClick={()=>handleHeart({
                    name: "Beats HeadPhone",
                    price: "$299.00",
                    img: "https://tse4.mm.bing.net/th?id=OIP.9eSLzTejcVBWh5qDTnpSuAHaHa&pid=Api&P=0&h=180",})} style={{backgroundColor:"whitesmoke", borderRadius:"5px"}}></i>
                <i className="fa-solid fa-down-left-and-up-right-to-center  ms-2 p-2 shadow-lg p-3 mb-5 bg-body-tertiary rounded icon"  style={{backgroundColor:"whitesmoke", borderRadius:"5px"}}></i>
                <i className="fa-solid fa-eye ms-2 p-2 shadow-lg p-3 mb-5 bg-body-tertiary rounded icon"  style={{backgroundColor:"whitesmoke", borderRadius:"5px"}}></i>
            </div>
            <div className="card-body text-center">
            <h6 className='card-title'>Beats HeadPhone</h6>
            <p className="card-text">$299.00</p> 
            <div className="circle-colors d-flex justify-content-center" style={{gap:"15px",cursor:"pointer"}} >
                  <i className="fa-solid fa-circle p-1 rounded-circle" style={{border: black4 && "1px solid black",color:"black"}} onMouseEnter={handleBlack4}></i>  
                  <i className="fa-solid fa-circle p-1 rounded-circle" style={{border:white3 && "1px solid black",color:"white"}} onMouseEnter={handleWhite3}></i>
                  <i className="fa-solid fa-circle p-1 rounded-circle" style={{border:pink1 && "1px solid black",color:"pink"}} onMouseEnter={handlePink1}></i>  
                  <i className="fa-solid fa-circle p-1 rounded-circle" style={{border:blue1 && "1px solid black",color:"blue"}} onMouseEnter={handleBlue1}></i>  
                </div>   
            </div>
          </div>
        </div>       
        <div className="col-sm-3 col-md-5 col-lg-3">
          <div className="card shadow p-4 mb-5 bg-body-tertiary rounded position-relative">
            {black5 && <img
              src= "https://tse3.mm.bing.net/th?id=OIP.oeis4gRjmHOAxpuGnOtYwwHaHa&pid=Api&P=0&h=180"
              className="card-img six"
              alt="..."
            /> }
             {white4 && <img
              src= "https://www.jiomart.com/images/product/original/rvu6rvehky/portronics-power-pro-10k-10000mah-power-bank-with-dual-output-emergency-mobile-charger-white-por-1110-product-images-orvu6rvehky-p594206344-0-202210011829.jpg?im=Resize=(1000,1000)"
              className="card-img six"
              alt="..."
            /> }
            {blue2 && <img
              src= "https://tse2.mm.bing.net/th?id=OIP.QJSRRLaWeEdbiek9K9q0SAHaHa&pid=Api&P=0&h=180"
              className="card-img six"
              alt="..."
            /> }
         
             <div className="icons-container position-absolute d-flex justify-content-center ms-4">
                <i className="fa-solid fa-cart-shopping p-2 shadow-lg p-3 mb-5 bg-body-tertiary rounded icon"onClick={()=>handleBuy({name:'Power Bank',price:'$199.00'})} style={{backgroundColor:"whitesmoke", borderRadius:"5px"}}></i>
                <i className="fa-regular fa-heart ms-2 p-2 shadow-lg p-3 mb-5 bg-body-tertiary rounded icon"onClick={()=>handleHeart({
                    name: "Power Bank",
                    price: "$199.00",
                    img: "https://tse2.mm.bing.net/th?id=OIP.QJSRRLaWeEdbiek9K9q0SAHaHa&pid=Api&P=0&h=180",})}  style={{backgroundColor:"whitesmoke", borderRadius:"5px"}}></i>
                <i className="fa-solid fa-down-left-and-up-right-to-center  ms-2 p-2 shadow-lg p-3 mb-5 bg-body-tertiary rounded icon"  style={{backgroundColor:"whitesmoke", borderRadius:"5px"}}></i>
                <i className="fa-solid fa-eye ms-2 p-2 shadow-lg p-3 mb-5 bg-body-tertiary rounded icon"  style={{backgroundColor:"whitesmoke", borderRadius:"5px"}}></i>
            </div>
            <div className="card-body text-center">
            <h6 className='card-title'>Power Bank</h6>
            <p className="card-text">$199.00</p>  
            <div className="circle-colors d-flex justify-content-center" style={{gap:"15px",cursor:"pointer"}} >
                  <i className="fa-solid fa-circle p-1 rounded-circle" style={{border: black5 && "1px solid black",color:"black"}} onMouseEnter={handleBlack5}></i>  
                  <i className="fa-solid fa-circle p-1 rounded-circle" style={{border: white4 && "1px solid black",color:"white"}} onMouseEnter={handleWhite4}></i>
                  <i className="fa-solid fa-circle p-1 rounded-circle" style={{border: blue2 && "1px solid black",color:"blue"}} onMouseEnter={handleBlue2}></i>  
                </div>  
            </div>
          </div>
        </div>
      </div>
     
    </div> }
    
    
  
  </>
  )
}

export default HotDeals
