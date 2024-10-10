const FeaturesSection = () => {
  return (
    <section className="features__sec box">
      <h1>Our Features</h1>
      <div className="features__grid">
        <div
          className="feature"
          data-aos="zoom-in"
          data-aos-duration="200"
        >
          <div className="feature__title">
            <div className="dot"></div>
            <h3>Fast Delivery</h3>
          </div>
          <img src="/public/images/speed4.jpg" alt="" />
          <p>Get your products delivered in no time.</p>
        </div>
        <div
          className="feature"
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
          <div className="feature__title">
            <div className="dot"></div>
            <h3>Secure Payment</h3>
          </div>
          <img src="/public/images/secure.jpg" alt="" />
          <p>Safe and secure payment options.</p>
        </div>
        <div
          className="feature"
          data-aos="zoom-in"
          data-aos-duration="1800"
        >
          <div className="feature__title">
            <div className="dot"></div>
            <h3>Easy Returns</h3>
          </div>
          <img src="/public/images/delivery.jpg" alt="" />
          <p>Hassle-free returns within 30 days.</p>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
