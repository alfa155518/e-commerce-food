import serviceImg_1 from "../images/service-1.svg";
import serviceImg_2 from "../images/service-2.svg";
import serviceImg_3 from "../images/service-3.svg";
import serviceImg_4 from "../images/service-4.svg";
import serviceImg_5 from "../images/service-5.svg";

import "../sass/sections/services.css";

function Services() {
  return (
    <section className="services">
      <div className="box">
        <div className="wrapper-img">
          <img src={serviceImg_1} alt="service-img" />
        </div>
        <div className="details">
          <h4>Wide Assortment</h4>
          <span>Mega Discounts</span>
        </div>
      </div>

      <div className="box">
        <div className="wrapper-img">
          <img src={serviceImg_2} alt="service-img" />
        </div>
        <div className="details">
          <h4>Easy Returns</h4>
          <span>Within 30 Days</span>
        </div>
      </div>

      <div className="box">
        <div className="wrapper-img">
          <img src={serviceImg_3} alt="service-img" />
        </div>
        <div className="details">
          <h4>Best Price & Offer</h4>
          <span>Order $50 or More</span>
        </div>
      </div>

      <div className="box">
        <div className="wrapper-img">
          <img src={serviceImg_4} alt="service-img" />
        </div>
        <div className="details">
          <h4>Free Delivery</h4>
          <span>24/7 Amazing Services</span>
        </div>
      </div>

      <div className="box">
        <div className="wrapper-img">
          <img src={serviceImg_5} alt="service-img" />
        </div>
        <div className="details">
          <h4>Great Daily Deal</h4>
          <span>When You Sing up</span>
        </div>
      </div>
    </section>
  );
}

export default Services;
