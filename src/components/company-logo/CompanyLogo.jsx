import React from 'react'
import '../company-logo/CompanyLogo.css'

const CompanyLogo = () => {
  return (
    <div className="container">
        <div className="row row-cols-1 row-cols-md-6 justify-content-evenly align-items-center logos">
            <div className="col-md-auto mt-5">
                <img src="https://ecomusnext-themesflat.vercel.app/images/brand/dyson.svg" alt="logo1" />
            </div>
            <div className="col-md-auto mt-5">
                <img src="https://ecomusnext-themesflat.vercel.app/images/brand/sony.svg" alt="logo2" />
            </div>
            <div className="col-md-auto mt-5">
                <img src="https://ecomusnext-themesflat.vercel.app/images/brand/samsung.svg" alt="logo3" />
            </div>
            <div className="col-md-auto mt-5">
                <img src="https://ecomusnext-themesflat.vercel.app/images/brand/oneplus.svg" alt="logo4" />
            </div>
            <div className="col-md-auto mt-5">
                <img src="https://ecomusnext-themesflat.vercel.app/images/brand/monster.svg" alt="logo5" />
            </div>
            <div className="col-md-auto mt-5">
                <img src="https://ecomusnext-themesflat.vercel.app/images/brand/sonos.svg" alt="logo6" />
            </div>
        </div>
    </div>
  )
}

export default CompanyLogo