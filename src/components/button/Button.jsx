import React from 'react'
import '../button/Button.css'

const Button = () => {
  return (
    <button
    className="btn btn-outline-dark mt-4 p-2 text-dark show-button  rounded-pill"
    style={{  width: "200px" }}
  >
    Shop Collection  <i className="fa-solid fa-arrow-right ms-3"></i>
  </button>
  )
}

export default Button