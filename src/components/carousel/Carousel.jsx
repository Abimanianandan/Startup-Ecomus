import React from "react";
import "../carousel/Carousel.css";

const slides = [
  {
    src: "https://static.dribbble.com/users/90631/screenshots/6356787/asterial_dribble3.png",
    alt: "Skincare Slide 1",
    title: "Mix. Match. MagSafe.",
    description: "Snap on a case, wallet, wireless charger, or battery pack.",
  },
  {
    src: "https://demo-ecomus-global2.myshopify.com/cdn/shop/files/skincare_slide2.jpg?v=1706156130&width=1800",
    alt: "Skincare Slide 2",
    title: "Beauty in Every Drop",
    description: "Indulge in the luxury of flawless skin",
  },
  {
    src: "https://demo-ecomus-global2.myshopify.com/cdn/shop/files/skincare_slide3.jpg?v=1706156130&width=1800",
    alt: "Skincare Slide 3",
    title: "Skin Love, Unleashed",
    description: "Experience the magic of self-care with our premium skincare",
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
              className="d-block w-100 carousel-img justify-content-center"
              loading="lazy"
            />
            <div className="carousel-caption custom-caption">
              <h2 className="col-md-12 fw-normal">{slide.title}</h2>
              <p className="mt-4">{slide.description}</p>
              <button className="btn btn-outline-dark p-3 rounded-pill w-25 mt-5">Shop Collection <i className="fa-solid fa-arrow-right ms-3"></i></button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;