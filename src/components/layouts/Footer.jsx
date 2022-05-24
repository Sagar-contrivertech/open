import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer>
        <div className="container text-white pt-5 pb-3">
          <div className="row order-one">
            <div className="col">
              <div className="footer-logo">
                <img
                  src="https://res.cloudinary.com/dvlpuvdrd/image/upload/v1652439771/Vector_u5mkv3.png"
                  alt="Footer-Logo"
                />
              </div>
              <div className="contact-footer">
                <div className="contact-footer-heading">
                  <p>Contact Us</p>
                </div>
                <div className="contact-list">
                  <p>
                    <span>
                      <img
                        src="https://res.cloudinary.com/dvlpuvdrd/image/upload/v1652686611/home-page/Email_xasdty.png"
                        alt=""
                        width={20}
                      />
                    </span>
                    <a className="text-decoration-none text-white" href="mailto:support@policyera.com">
                      support@policyera.com
                    </a>
                  </p>
                  <p>
                    <span>
                      <img
                        src="https://res.cloudinary.com/dvlpuvdrd/image/upload/v1652686611/home-page/Phone_o98th0.png"
                        alt=""
                        width={20}
                      />
                    </span>
                    {/* <a className="text-decoration-none text-white" href="tel:"></a> */}
                    9833341817
                  </p>
                  <p>
                    <span>
                      <img
                        src="https://res.cloudinary.com/dvlpuvdrd/image/upload/v1652686611/home-page/Mark_cwchny.png"
                        alt=""
                        width={20}
                      />
                    </span>
                    C-210, 2nd floor, Neptune EBD, LBS Marg, Bhandup (W), Mumbai
                    – 400078, Maharashtra, India
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="contact-footer ">
                <div className="contact-footer-heading contact-footer-margin">
                  <p>Personal Products</p>
                </div>
                <div className="contact-list">
                  <p>Health Insurance</p>
                  <p>Life Insurance</p>
                  <p>Motor Insurance</p>
                  <p>Travel Insurance</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="contact-footer ">
                <div className="contact-footer-heading contact-footer-margin">
                  <p>Corporate Products</p>
                </div>
                <div className="contact-list">
                  <p>Employee Benefit</p>
                  <p>Fire Insurance</p>
                  <p>Marine Insurance.</p>
                  <p>Liability Insurance </p>
                  <p>Engineering </p>
                </div>
              </div>
            </div>
            <div className="col-md-2 col">
              <div className="contact-footer ">
                <div className="contact-footer-heading contact-footer-margin">
                  <p>Company</p>
                </div>
                <div className="contact-list">
                  <p>About</p>
                  {/* <p>Contact Us</p> */}
                  <p>Careers</p>
                  {/* <p>Blog</p> */}
                </div>
              </div>
            </div>
            <div className="col-md-2 col">
              <div className="contact-footer ">
                <div className="contact-footer-heading contact-footer-margin position-relative">
                  {/* <button >
                                Register
                            </button> */}
                  <p className="tab-hover">
                    Support
                    <div className="ps-3 hover-show flex-column align-items-start">
                      <div className="row">
                        <div className="d-flex flex-row align-items-center justify-content-start">
                          <img
                            src="https://res.cloudinary.com/dvlpuvdrd/image/upload/v1652970666/home-page/Email_htj2rl.png"
                            alt="email-icon"
                          />
                          <p className="ms-1">support@policyera.com</p>
                        </div>
                      </div>
                      <div className="row">
                        <div className="d-flex flex-row align-items-center justify-content-start">
                          <img
                            src="https://res.cloudinary.com/dvlpuvdrd/image/upload/v1652970657/home-page/Vector_xtcvie.png"
                            alt="phone-icon"
                          />
                          <p className="ms-1"> 9833341817 </p>
                        </div>
                      </div>
                    </div>
                  </p>
                </div>
                <div className="contact-list">
                  <p>Customer Support</p>
                  <p>Grievance</p>
                  {/* <p>Help Center</p>
                                <p>Join as POSP</p>
                                <p>Careers</p>
                                <p>Blog</p> */}
                </div>
              </div>
            </div>
          </div>
          <div className="row footer-second-row">
            <div className="Icons-footer ">
              <img
                src="https://res.cloudinary.com/dvlpuvdrd/image/upload/v1652551207/home-page/Facebook_dr7zja.png"
                alt=""
              />
              <img
                src="https://res.cloudinary.com/dvlpuvdrd/image/upload/v1652551207/home-page/Twitter_o7dos5.png"
                alt=""
              />
              <img
                src="https://res.cloudinary.com/dvlpuvdrd/image/upload/v1652551207/home-page/Instagram_mseosa.png"
                alt=""
              />
              <img
                src="https://res.cloudinary.com/dvlpuvdrd/image/upload/v1652551207/home-page/LinkedIn_twu4sv.png"
                alt=""
              />
              <img
                src="https://res.cloudinary.com/dvlpuvdrd/image/upload/v1652551208/home-page/YouTube_fep3w6.png"
                alt=""
              />
            </div>
            <hr />
            <p className="footer-para">
              Policy Era Insurance Broking LLP (CIN AAX-7485) Registered Office:
              Second Floor, C-210, Eastern Business District, Neptune, Mangatram
              Petrol Pump, Bhandhup, Mumbai, Maharashtra, 400078 IRDAI Broking
              License Code No. DB 897/2021, Certificate No. 810, License
              category- Direct Broker (Life &amp; General), valid till
              28/04/2025. Product information is authentic and solely based on
              the information received from the insurers. The Point of Sales
              person (POSP) is appointed by Policy Era Insurance Broking LLP as
              per the Guidelines on Point of Sales Person issued by the IRDAI
              and amended from time to time.
            </p>
          </div>
          <div className="row footer-third-row d-flex justify-content-between align-items-center">
            <div className="col">
              <p className="copy">Copyright © 2022 PolicyEra</p>
            </div>
            <div className="col ">
              <p className="text-end">
                All Rights Reserved | <Link to="/">Terms and Conditions</Link> |{" "}
                <Link to="/">Privacy Policy</Link>{" "}
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
