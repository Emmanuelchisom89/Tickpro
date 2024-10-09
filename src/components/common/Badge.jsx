const Badge = () => {
  return (
    <div className="badge">
      <div className="row">
        <div className="column">
          <img
            src="/src/images/customer-service.png"
            alt="Millenary Watches Excellent Customer Service"
          />
          <h2>Client Support</h2>
          <p>
            Our aim is to provide you with exceptional client support, ensuring
            your shopping experience is as enjoyable as possible. From the
            moment you reach out to us until you’re wearing your new watch, we
            prioritize your satisfaction. We want to leave you so pleased with
            your purchase that you trust us to assist with your next one. We'll
            be with you every step of the way.
          </p>
        </div>

        <div className="column">
          <img
            src="/src/images/authenticity.png"
            alt="Millenary Watches Authentic Watches"
          />
          <h2>Authenticity</h2>
          <p>
            We aim to provide peace of mind during your purchase. Therefore, we
            carefully check all our timepieces to ensure their authenticity and
            that everything is in its order. When buying a timepiece from us,
            you can be confident that it is authentic. We also value your
            privacy and safety, and this is why we take great measures to keep
            your information safe at all times.
          </p>
        </div>

        <div className="column">
          <img
            src="/src/images/fair-price.png"
            alt="Millenary Watches Fair Prices"
          />
          <h2>Fair Prices</h2>
          <p>
            At our company, we are committed to offering fair prices for all our
            watches. We want you to be assured that you're getting excellent
            value for your money with every purchase. With our extensive network
            and connections in sourcing luxury watches, we also offer some of
            the finest timepieces at competitive prices, all this services from
            the convenience of your home.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Badge;
