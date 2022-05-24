import React, { useEffect } from "react";
import "../layout-styles/services.css";
import WOW from "wowjs";

export default function Services() {
  useEffect(() => {
    new WOW.WOW({
      live: false,
    }).init();
    // new WOW().init();
  });

  return (
    <div className="container-fluid services-container">
      <div className="container">
        <div className="title">
          <h2 className="serTitle">SERVICES</h2>
          <p className="serDesc wow fadeInUp" data-wow-offset="100">
            What we are known for
          </p>
          <h2 className="polEra">
            PolicyEra Best <span className="ser-blue">Services</span>
          </h2>
        </div>
        <div className="serviceBoxes">
          <div className="boxServ">
            <p className="boxInTitle">
              <span className="fs-3 bluBox badge bg-primary">1</span>
              Unbaised Guidance
            </p>
            <p className="boxInDesc">
              a book or other written or printed work, regarded in terms of its
              content rather than its physical form.
            </p>
          </div>
          <div className="boxServ boxServMar">
            <p className="boxInTitle">
              <span className="fs-3 bluBox badge bg-primary">2</span>
              Claims Assistance
            </p>
            <p className="boxInDesc">
              Services is our core value and we are here to help you 24*7. Our
              claim expert deals in settling claims every moment
            </p>
          </div>
          <div className="boxServ">
            <p className="boxInTitle">
              <span className="fs-3 bluBox badge bg-primary">3</span>
              Best price
            </p>
            <p className="boxInDesc">
              No hidden charges &amp; no additional fees. Just pure Insurance.
            </p>
          </div>
          <div className="boxServ ">
            <p className="boxInTitle">
              <span className="fs-3 bluBox badge bg-primary">4</span>
              Policy Mangement
            </p>
            <p className="boxInDesc">
              Create a free account and manage your policy at one place.
            </p>
          </div>
          <div className="boxServ ">
            <p className="boxInTitle">
              <span className="fs-3 bluBox badge bg-primary">5</span>
              Quick &amp; Easy
            </p>
            <p className="boxInDesc">
              We are here to make it simple with no jargon to confuse you
            </p>
          </div>
          <div className="boxServ">
            <p className="boxInTitle">
              <span className="fs-3 bluBox badge bg-primary">6</span>
              Deicated RM
            </p>
            <p className="boxInDesc">
              Personal touch to your insurance, get an expert dedicated to you.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
