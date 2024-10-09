import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    id: 1,
    name: "John Daveson",
    quote:
      "I love their service, it is awesome, swift and safe!. I will love to use tick pro again",
  },
  {
    id: 2,
    name: "Maryam Abubakar",
    quote: "I highly recommend TickPro to wrist watch lovers.",
  },
  {
    id: 3,
    name: "David Miller",
    quote:
      "Their attention to detail and commitment to excellence is unparalleled",
  },
  {
    id: 4,
    name: "Emily Johnson",
    quote:
      "I couldn't be happier with the service! It exceeded all my expectations.",
  },
  {
    id: 5,
    name: "Sarah Williams",
    quote:
      "Exceptional quality and top-notch customer service. Highly recommended!",
  },
];

// Function to get the first letter of the name
const getFirstLetter = (name) => {
  return name.charAt(0).toUpperCase();
};

// Array of background colors to rotate through
const colors = ["#FF5733", "#33C3FF", "#FF33A6", "#9D33FF", "#CDD4D8"];

const TestimonialsCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <section className="testimonials__sec">
      <h1>What Our Customers Say</h1>
      <div className="carousel__container">
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div key={testimonial.id} className="testimonial">
              <p className="testimonial__quote">"{testimonial.quote}"</p>
              <p className="line center"></p>
              <div
                className="testimonial__avatar"
                style={{
                  backgroundColor: colors[index % colors.length], // Rotate through colors
                }}
              >
                {getFirstLetter(testimonial.name)}
              </div>
              <p className="testimonial__name">- {testimonial.name}</p>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;
