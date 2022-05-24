import React, { useEffect } from "react";
import "../layout-styles/why.css";
import WOW from "wowjs";

export default function Whyus() {
  useEffect(() => {
    new WOW.WOW({
      live: false,
    }).init();
    // new WOW().init();
  });

  return (
    <div className="container-fluid why-container">
      <div className="container">
        <div className="title_container">
          <h2 className="why_title wow fadeInUp" data-wow-offset="100">
            WHY US?
          </h2>
          <p className="why_desc">What we are known for</p>
        </div>
        <div className="row">
          <div className="col-md-6 col-12 ">
            <div className="box_why">
              <img
                src="https://res.cloudinary.com/dvlpuvdrd/image/upload/v1652551300/home-page/indi_vzm1ju.png"
                alt="whyUs_man"
              />
              <p className="empower_txt">
                Empowering{" "}
                <span className="blue_txt">
                  <u>Indiviual</u>
                </span>
              </p>
              <p className="emp_desc">
                We have selected Insurance companies that have been <br />{" "}
                handpicked on the basis of several factors like, their pricing,
                claims service, etc to empower you and your family.
              </p>

              {/* box section */}
              <div className="emp_box">
                <div className="me-3">
                  <p className="fs-3 badge bg-primary h-auto">1</p>
                </div>
                <div>
                  <div>
                    <p className="emp_box_title">Plans drafted with care.</p>
                    <p>
                      Each plan and product reaches you after all checks &amp;
                      compliances.
                    </p>
                  </div>
                </div>
              </div>

              {/* box section */}
              <div className="emp_box">
                <div className="me-3">
                  <p className="fs-3 badge bg-primary h-auto">2</p>
                </div>
                <div>
                  <p className="emp_box_title">
                    {" "}
                    Insurance Expert by your side.
                  </p>
                  <p>Expert who stands by your side all the time.</p>
                </div>
              </div>
              {/* box section */}

              <div className="emp_box">
                <div className="me-3">
                  <p className="fs-3 badge bg-primary h-auto">3</p>
                </div>
                <div>
                  <p className="emp_box_title">Hassle Free Claims</p>
                  <p>
                    Our claims department deals with settling claims daily. We
                    make it easy for you to get it without hassles.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-12 ">
            <div className="box_why">
              <img
                src="https://res.cloudinary.com/dvlpuvdrd/image/upload/v1652551300/home-page/corp_b0hezv.png"
                alt="whyUs_man"
              />
              <p className="empower_txt">
                Empowering{" "}
                <span className="org_txt">
                  <u>Buisness</u>
                </span>
              </p>
              <p className="emp_desc">
                We have selected Insurance companies that have been <br />{" "}
                handpicked on the basis of several factors like, their pricing,
                claims service, etc to empower you and your family.
              </p>

              {/* box section */}
              <div className="emp_box">
                <div className="me-3">
                  <p className="fs-3 badge bg-custom-red">1</p>
                </div>
                <div>
                  <p className="emp_box_title"> Regular Review</p>
                  <p>
                    We review your cover at regular intervals, while you keep
                    growing your business.
                  </p>
                </div>
              </div>

              {/* box section */}
              <div className="emp_box">
                <div className="me-3">
                  <p className="fs-3 badge bg-custom-red">2</p>
                </div>
                <div>
                  <p className="emp_box_title">Umbrella Services</p>
                  <p>
                    A team of experts to cover all your business requirements
                    under one roof.
                  </p>
                </div>
              </div>
              {/* box section */}

              <div className="emp_box">
                <div className="me-3">
                  <p className="fs-3 badge bg-custom-red">3</p>
                </div>
                <div>
                  <p className="emp_box_title">Customise Cover</p>
                  <p>
                    At business you have different needs and requirements, we
                    understand it better so we designed it better as per your
                    requirements.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
