import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "../../layout-styles/posp-styles/services.css";

const Services = () => {
  return (
    <>
      <Container fluid className="position-relative services-page">
        <div className="container">
          <img
            src="https://res.cloudinary.com/dvlpuvdrd/image/upload/v1652701738/Posp/Vector_8_wtgrow.svg"
            className="	d-none d-sm-block position-absolute top-0 start-0 "
          />
          <img
            src="https://res.cloudinary.com/dvlpuvdrd/image/upload/v1652701738/Posp/Vector_6_fg9p7s.svg"
            className="	d-none d-sm-block position-absolute top-0 start-0 "
          />
          <div className="d-flex flex-column align-items-center py-5">
            <div className="text-center mb-3">
              <p className="services-heading text-primary">Our Services</p>
              <p className="services-mini-heading">
                Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
                Donec rutrum congue leo eget malesuada.
              </p>
            </div>
            <Row className="align-items-center px-5">
              <Col xs={12} lg={4} className="py-2 align-items-end">
                <div
                  
                  className="service-blocks d-flex flex-column align-items-center text-center py-4"
                >
                  <p className="badge bg-primary ">1</p>
                  <p className="badge-heading">Instant Policy Issuance</p>
                  <p className="badge-para">
                    Generate insurance quotes for your client and help them
                    cover instantly.
                  </p>
                </div>
                <div
                  
                  className="service-blocks d-flex flex-column align-items-center text-center py-4"
                >
                  <p className="badge bg-primary ">2</p>
                  <p className="badge-heading">Trainer by your side.</p>
                  <p className="badge-para">
                    Don't worry, we have a team of experts to guide you through.
                  </p>
                </div>
                <div
                  
                  className="service-blocks d-flex flex-column align-items-center text-center py-4"
                >
                  <p className="badge bg-primary ">3</p>
                  <p className="badge-heading">Claims Assistance</p>
                  <p className="badge-para">
                    Stay connected with an internal claims team, dedicated to
                    serving your clients.
                  </p>
                </div>
              </Col>
              <Col xs={12} lg={4}>
                <div className="text-center px-0">
                  <img
                    src="https://res.cloudinary.com/dvlpuvdrd/image/upload/v1652699865/Posp/posp_mobile_h8vbkv.png"
                    className="img-fluid"
                  />
                </div>
              </Col>
              <Col xs={12} lg={4}>
                <div
                  
                  className="service-blocks d-flex flex-column align-items-center text-center py-4"
                >
                  <p className="badge bg-primary ">4</p>
                  <p className="badge-heading">
                    Branch Access &amp; Transparency
                  </p>
                  <p className="badge-para">
                    Get direct branch access with complete office support. &amp;
                    Complete transparency on each case from login to claims.
                  </p>
                </div>
                <div
                  
                  className="service-blocks d-flex flex-column align-items-center text-center py-4"
                >
                  <p className="badge bg-primary ">5</p>
                  <p className="badge-heading">Regular Industry Update.</p>
                  <p className="badge-para">
                    Stay ahead of your competition and keep your knowledge up to
                    date with regular updates from the team.
                  </p>
                </div>
                <div
                  
                  className="service-blocks d-flex flex-column align-items-center text-center py-4"
                >
                  <p className="badge bg-primary ">6</p>
                  <p className="badge-heading">Rewarding Career</p>
                  <p className="badge-para">
                    Best in class reward for all your business and efforts..
                  </p>
                </div>
              </Col>
            </Row>
          </div>
          <img
            src="https://res.cloudinary.com/dvlpuvdrd/image/upload/v1652701728/Posp/Vector_7_kgsw0q.svg"
            className="d-none d-sm-block position-absolute  bottom-0 end-0 "
          />
        </div>
      </Container>
    </>
  );
};

export default Services;
