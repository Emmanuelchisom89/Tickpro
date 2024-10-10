import { useState } from "react";

const About = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  const fullText = `
    At TickPro, We are dedicated to providing the best products to our customers. We believe that a wristwatch is more than just a
    timekeeping device, it’s a statement of style, a mark of sophistication, and a symbol of your personality. Founded with a passion
    for elegance and precision, TickPro has become a trusted destination for watch enthusiasts and style aficionados alike. Our
    mission is to provide you with the finest selection of wristwatches that combine quality craftsmanship with timeless design.
    Whether you’re seeking a classic piece to complement your professional attire, a sporty model for your active lifestyle, or a
    luxurious watch to make a statement, we have something for every wrist and occasion.
  `;

  return (
    <section id="about" className="about__sec">
      <h1>About Us</h1>

      <div className="about__div box">
        <div
          className="about__img"
          data-aos="zoom-in"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          <img src="/Tickpro/images/about_image.jpg" alt="About Us" />
        </div>

        <div
          className="about__txt"
          data-aos="fade-left"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          <h2 className="about__txt__head">Best Luxury Brands</h2>

          <p className="line"></p>

          <p className={`about__text ${isExpanded ? "expanded" : "collapsed"}`}>
            {isExpanded ? fullText : `${fullText.substring(0, 500)}...`}
          </p>

          <button className="toggle__button" onClick={handleToggle} aria-expanded={isExpanded}>
            {isExpanded ? "Show Less" : "Read More"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
