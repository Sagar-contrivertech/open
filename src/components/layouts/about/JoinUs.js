import React from "react";
import "../../layout-styles/about-styles/join.css";

export default function JoinUs() {
  return (
    <div className="container-fluid joinUs">
      <h2 className="joinTitle wow fadeInUp">JOIN US</h2>
      <p className="joinDesc">Our Team Our Pride.</p>
      <div className="team-img-cont">
        <img
          className="team-back-mesh"
          src="https://res.cloudinary.com/dvlpuvdrd/image/upload/v1652677115/home-page/Titik-titik_ldgroc.png"
          alt="team-back-mesh"
        />
        <p className="team-text">Hello,</p>
        <img
          src="https://res.cloudinary.com/dvlpuvdrd/image/upload/v1652854820/home-page/Vector_2_1_wrjjmu.png"
          className="team-arrow"
        />
        <img
          className="teamImg"
          src="https://res.cloudinary.com/dvlpuvdrd/image/upload/v1652638151/home-page/Rectangle_2446_bk0ikk.png"
          alt="team-meeting"
        />
      </div>
      <div className="joinUsBox">
        <p className="joinCont">
          Smart work with Team work and open communication complete an open
          working environment, this is what we believe in at Policy Era. If
          you're into that, check out our current openings in the Career page.
          Also you can send us your CV to below email id..
        </p>
        <div className="box-contact">
          <a rel="stylesheet" className="call" href="tel:8591682034">
            <img
              src="https://res.cloudinary.com/dvlpuvdrd/image/upload/v1652677115/home-page/Group_39558_jc07w4.png"
              alt=""
            />{" "}
            8591682034
          </a>
          <p className="divider"></p>
          <a rel="stylesheet" className="mail" href="mailto:hr@policyera.com">
            {" "}
            <img
              src="https://res.cloudinary.com/dvlpuvdrd/image/upload/v1652677115/home-page/Group_39794_favvng.png"
              alt=""
              srcset=""
            />{" "}
            hr@policyera.com
          </a>
        </div>
        <img
          className="dots-bot"
          src="https://res.cloudinary.com/dvlpuvdrd/image/upload/v1652677115/home-page/Titik-titikbig_zvenpz.png"
          alt="dots"
        />
      </div>
    </div>
  );
}
