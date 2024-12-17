
import React from "react";
import "../carousel/Carousel.css";
import PhoneImage from "../../assets/images/phone.png"
import ChargeImage from "../../assets/images/charge.png"
import HeadPhoneImage from "../../assets/images/headphone.png"
import Button from "../button/Button";

const slides = [
  {
    src: PhoneImage,
    alt: "Phone Slide",
    title: "Mix. Match. MagSafe.",
    description: "Snap on a case, wallet, wireless charger, or battery pack.",
  },
  {
    src: ChargeImage,
    alt: "Charge Slide ",
    title: "Ecomus Docking",
    description: "Fast wireless charging on-the-go.",
  },
  {
    src: HeadPhoneImage,
    alt: "Headphone Slide ",
    title: "Accessory Sale",
    description: "Up to 40% off chargers, earbuds, and more.",
  },
];

const Carousel = () => {
  return (
    <div id="carouselExampleCaptions" className="carousel slide position-relative">
      <div className="carousel-indicators">
        {slides.map((_, index) => (
          <button
            key={index}
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to={index}
            className={index === 0 ? "active" : ""}
            aria-label={`Slide ${index + 1}`}
          ></button>
        ))}
      </div>
      <div className="carousel-inner">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`carousel-item ${index === 0 ? "active" : ""}`}
          >
            <img
              src={slide.src}
              alt={slide.alt}
              className="d-block w-100 carousel-img"
              loading="lazy"
            />
            <div className="carousel-caption custom-caption">
              <h2 className="col-md-12 fw-normal">{slide.title}</h2>
              <p className="mt-2">{slide.description}</p>
              <Button />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
