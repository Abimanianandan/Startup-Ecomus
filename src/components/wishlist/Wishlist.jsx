import React, {useContext} from 'react'
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import { cartContext } from "../../App";

const Wishlist = () => {
    const {heartItem} = useContext(cartContext)
  return (
    <>
    <Navbar />
    <div className="container mt-5">
        {heartItem.length > 0 ? (
          <>
           <h1 className="d-flex justify-content-center">Your Wishlist</h1>
            <div className="row row-cols-1 row-cols-md-4 mt-5">
              {heartItem.map((item, index) => (
                <div
                  className="col d-flex justify-content-center mb-4"
                  key={index}
                >
                  <div className="card shadow p-4 bg-body-tertiary rounded">
                    <img
                      src={item.img}
                      className="card-img-top"
                      alt={item.name}
                    />
                  
                    <div className="card-body text-center">
                      <h6 className="card-title">{item.name}</h6>
                      <p className="card-text">{item.price}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <h1 className="d-flex justify-content-center">Your Wishlist Is Empty</h1>
        )}
      </div>
      <Footer />
    </>
  )
}

export default Wishlist