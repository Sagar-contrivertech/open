import React from "react";
import { Col, Row } from "react-bootstrap";
import Footer from "../components/layouts/Footer";
import Header from "../components/layouts/Header";
import "../components/layout-styles/product-styles/product.css";
 
const Product = () => {
  return (
    <>
      <Header />
      <div className="container-fluid">
      <Row className="mt-5 mt-md-5 px-0 margin-decrease">
        <Col xl={4} lg={3} md={12} className="Sticky-mobile-view">
          <div className="sticky-center m-5">
            <nav className="nav nav-pills flex-column">
              <a className="nav-link active" aria-current="page" href="#general">
                General
              </a>
              <a className="nav-link" href="#feature">
                Features
              </a>
              <a className="nav-link" href="#return">
                Returns
              </a>
              <a className="nav-link" href="#refund">
                Refunds
              </a>
              <a className="nav-link" href="#">
                Account
              </a>
              <a className="nav-link" href="#">
                Subscription
              </a>
              <a className="nav-link" href="#subproduct">
                Sub products
              </a>
            </nav>
          </div>
        </Col>
        <Col xl={8} lg={9} md={12} className="product-right-container px-0">
          <div id="general" className="px-3 px-md-5 main-container d-flex flex-column align-items-center ">
            <div className="d-flex flex-column text-center align-items-center mt-5">
              <p className="text-capitalize fs-1 fw-bold">
                Main Product heading
              </p>
              <p className="sub-head">
                Nulla porttitor accumsan tincidunt. Pellentesque in ipsum id
                orci porta dapibus. Curabitur arcu erat, accumsan id imperdiet
                et, porttitor at sem.
              </p>
            </div>
            <div className="question-box">
              <p className="fw-bold">1. How Can I get a Refund</p>
              <p className="question-body">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor,
                vitae dui, semper turpis sed. Id duis nisi, accumsan diam augue
                non libero. Augue sed nulla at arcu facilisis. Sagittis leo
                habitant ut nibh. Ultrices odio diam venenatis et interdum.
                Vulputate viverra mattis aliquam facilisi egestas lacinia quam
                nulla consequat. Et hac fringilla ut vitae, ut ultrices.
                Consectetur duis viverra ut eu massa. Mi integer mauris, sit
                aliquet. Justo rhoncus ac sagittis laoreet vehicula. Mattis
                ultricies fames amet nibh vestibulum non laoreet donec.
                Suspendisse risus tortor cursus malesuada diam quis mi enim.
                Consectetur non egestas diam gravida cum aliquet facilisis id
                donec. Facilisis malesuada integer at leo morbi non praesent.
                Ultrices felis blandit at molestie in gravida purus, dignissim
                lacus. Venenatis, in id nibh risus praesent nisi non. Est et
                facilisis venenatis congue eu, gravida laoreet vel nunc. Tortor,
                amet, venenatis posuere magna fames ut nulla. Vulputate nibh dui
                sem diam tincidunt consequat, purus orci. Varius purus malesuada
                ac sit id euismod{" "}
              </p>
            </div>
          </div>
          <div id="feature" className="feature-container px-3 px-md-5">
            <p className="ps-4 text-primary fw-bold fs-1">Features</p>
            <Row className="mx-auto ps-lg-3 ps-xl-5">
              <Col md={6}>
                <div className="feature-box d-flex flex-column mt-5">
                  <div>
                    <div className="badge bg-primary fs-4">1</div>
                  </div>
                  <div className="mt-3">
                    <p className="fw-bold fs-5">Content Box</p>
                    <p className="mt-2">
                      a book or other written or printed work, regarded in terms
                      of its content rather than its physical form.
                    </p>
                  </div>
                </div>
                <div className="feature-box d-flex flex-column mt-5">
                  <div>
                    <div className="badge bg-primary fs-4">2</div>
                  </div>
                  <div className="mt-3">
                    <p className="fw-bold fs-5">Content Box</p>
                    <p className="mt-2">
                      a book or other written or printed work, regarded in terms
                      of its content rather than its physical form.
                    </p>
                  </div>
                </div>
              </Col>
              <Col md={6}>
                <div className="feature-box d-flex flex-column">
                  <div>
                    <div className="badge bg-primary fs-4">3</div>
                  </div>
                  <div className="mt-3">
                    <p className="fw-bold fs-5">Content Box</p>
                    <p className="mt-2">
                      a book or other written or printed work, regarded in terms
                      of its content rather than its physical form.
                    </p>
                  </div>
                </div>
                <div className="feature-box d-flex flex-column mt-5">
                  <div>
                    <div className="badge bg-primary fs-4">4</div>
                  </div>
                  <div className="mt-3">
                    <p className="fw-bold fs-5">Content Box</p>
                    <p className="mt-2">
                      a book or other written or printed work, regarded in terms
                      of its content rather than its physical form.
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
          <div id="return" className="px-3 px-md-5 covered-wrapper position-relative mb-5">
            <img
              src="https://res.cloudinary.com/dvlpuvdrd/image/upload/v1652777448/product/Vector_2_y9emcy.png"
              alt="green-arrow"
              className="covered-arrow d-none d-md-block"
            />
            <div className="covered-container">
              <p className="covered-title">
                <img
                  src="https://res.cloudinary.com/dvlpuvdrd/image/upload/v1652777414/product/Vector_ght8qm.png"
                  alt="tick-green"
                  className="pe-4"
                />
                What's Covered
              </p>
              <div className="covered-body p-md-5">
                <div className="d-flex flex-row align-items-center py-4">
                  <img
                    src="https://res.cloudinary.com/dvlpuvdrd/image/upload/v1652777465/product/Icon_usd4v9.png"
                    alt="green-tick"
                  />
                  <p className="ps-4">
                    Nam libero tempore, cum soluta nobis est eligendi optio
                    cumque nihil impedit quo minuscc d quod maxime
                  </p>
                </div>
                <div className="d-flex flex-row align-items-center py-4">
                  <img
                    src="https://res.cloudinary.com/dvlpuvdrd/image/upload/v1652777465/product/Icon_usd4v9.png"
                    alt="green-tick"
                  />
                  <p className="ps-4">
                    Nam libero tempore, cum soluta nobis est eligendi optio
                    cumque nihil impedit quo minuscc d quod maxime
                  </p>
                </div>
                <div className="d-flex flex-row align-items-center py-4">
                  <img
                    src="https://res.cloudinary.com/dvlpuvdrd/image/upload/v1652777465/product/Icon_usd4v9.png"
                    alt="green-tick"
                  />
                  <p className="ps-4">
                    Nam libero tempore, cum soluta nobis est eligendi optio
                    cumque nihil impedit quo minuscc d quod maxime
                  </p>
                </div>
                <div className="d-flex flex-row align-items-center py-4">
                  <img
                    src="https://res.cloudinary.com/dvlpuvdrd/image/upload/v1652777465/product/Icon_usd4v9.png"
                    alt="green-tick"
                  />
                  <p className="ps-4">
                    Nam libero tempore, cum soluta nobis est eligendi optio
                    cumque nihil impedit quo minuscc d quod maxime
                  </p>
                </div>
                <div className="d-flex flex-row align-items-center py-4">
                  <img
                    src="https://res.cloudinary.com/dvlpuvdrd/image/upload/v1652777465/product/Icon_usd4v9.png"
                    alt="green-tick"
                  />
                  <p className="ps-4">
                    Nam libero tempore, cum soluta nobis est eligendi optio
                    cumque nihil impedit quo minuscc d quod maxime
                  </p>
                </div>
                <div className="d-flex flex-row align-items-center py-4">
                  <img
                    src="https://res.cloudinary.com/dvlpuvdrd/image/upload/v1652777465/product/Icon_usd4v9.png"
                    alt="green-tick"
                  />
                  <p className="ps-4">
                    Nam libero tempore, cum soluta nobis est eligendi optio
                    cumque nihil impedit quo minuscc d quod maxime
                  </p>
                </div>
              </div>
            </div>
            <img
              src="https://res.cloudinary.com/dvlpuvdrd/image/upload/v1652777493/product/Titik-titik_dwfxb6.png"
              alt="green-mesh"
              className="covered-mesh"
            />
          </div>
          <div className="px-3 px-md-5 not-covered-wrapper position-relative mb-5">
            <img
              src="https://res.cloudinary.com/dvlpuvdrd/image/upload/v1652777530/product/Vector_3_zyzdt6.png"
              alt="green-arrow"
              className="not-covered-arrow d-none d-md-block"
            />
            <div className="not-covered-container">
              <p className="not-covered-title">
                <img
                  src="https://res.cloudinary.com/dvlpuvdrd/image/upload/v1652777515/product/Vector_1_vnie1h.png"
                  alt="cross-red"
                  className="pe-4"
                />
                What's Covered
              </p>
              <div className="not-covered-body p-1 p-md-5">
                <div className="d-flex flex-row align-items-center py-4">
                  <img
                    src="https://res.cloudinary.com/dvlpuvdrd/image/upload/v1652777543/product/Vector_2_midxjd.png"
                    alt="red-cross-small"
                  />
                  <p className="ps-4">
                    Nam libero tempore, cum soluta nobis est eligendi optio
                    cumque nihil impedit quo minuscc d quod maxime
                  </p>
                </div>
                <div className="d-flex flex-row align-items-center py-4">
                  <img
                    src="https://res.cloudinary.com/dvlpuvdrd/image/upload/v1652777543/product/Vector_2_midxjd.png"
                    alt="red-cross-small"
                  />
                  <p className="ps-4">
                    Nam libero tempore, cum soluta nobis est eligendi optio
                    cumque nihil impedit quo minuscc d quod maxime
                  </p>
                </div>
                <div className="d-flex flex-row align-items-center py-4">
                  <img
                    src="https://res.cloudinary.com/dvlpuvdrd/image/upload/v1652777543/product/Vector_2_midxjd.png"
                    alt="red-cross-small"
                  />
                  <p className="ps-4">
                    Nam libero tempore, cum soluta nobis est eligendi optio
                    cumque nihil impedit quo minuscc d quod maxime
                  </p>
                </div>
                <div className="d-flex flex-row align-items-center py-4">
                  <img
                    src="https://res.cloudinary.com/dvlpuvdrd/image/upload/v1652777543/product/Vector_2_midxjd.png"
                    alt="red-cross-small"
                  />
                  <p className="ps-4">
                    Nam libero tempore, cum soluta nobis est eligendi optio
                    cumque nihil impedit quo minuscc d quod maxime
                  </p>
                </div>
                <div className="d-flex flex-row align-items-center py-4">
                  <img
                    src="https://res.cloudinary.com/dvlpuvdrd/image/upload/v1652777543/product/Vector_2_midxjd.png"
                    alt="red-cross-small"
                  />
                  <p className="ps-4">
                    Nam libero tempore, cum soluta nobis est eligendi optio
                    cumque nihil impedit quo minuscc d quod maxime
                  </p>
                </div>
                <div className="d-flex flex-row align-items-center py-4">
                  <img
                    src="https://res.cloudinary.com/dvlpuvdrd/image/upload/v1652777543/product/Vector_2_midxjd.png"
                    alt="red-cross-small"
                  />
                  <p className="ps-4">
                    Nam libero tempore, cum soluta nobis est eligendi optio
                    cumque nihil impedit quo minuscc d quod maxime
                  </p>
                </div>
              </div>
            </div>
            <img
              src="https://res.cloudinary.com/dvlpuvdrd/image/upload/v1652777560/product/Titik-titik_1_htbwaw.png"
              alt="red-mesh"
              className="not-covered-mesh"
            />
          </div>
        </Col>
      </Row>
      </div>
      <div id="subproduct" className="sub-products-wrapper position-relative px-3 px-md-5">
        <img
          src="https://res.cloudinary.com/dvlpuvdrd/image/upload/v1652784769/product/Line_147_alksft.png"
          alt="sub-product-top-left-line"
          className="position-absolute top-0 start-0 d-none d-lg-block"
        />
        <div className="sub-products-container mx-auto d-flex flex-wrap py-3 py-md-5">
          <div className="sub-container-head d-flex flex-row row">
            <p className="col-12 col-md-6 fs-1 fw-bold">Sub Products</p>
            <p className="col-6 d-none d-md-block">
              Pellentesque in ipsum id orci porta dapibus. Praesent sapien
              massa, convallis a pellentesque nec, egestas non nisi. Nulla
              porttitor accumsan tincidunt.
            </p>
          </div>
          <div className="sub-product-body d-flex flex-row flex-wrap align-content-center gap-3">
            <div className="sub-product-box bg-primary text-white">
              <p className="text-uppercase fs-5 fw-bold">Name of Products</p>
              <p className="text-light mt-3">
                Nam libero tempore, cum soluta nobis est eligendi optio cumque
                nihil impedit quo minus id quod
              </p>
            </div>
            <div className="sub-product-box">
              <p className="text-uppercase fs-5 fw-bold">Name of Products</p>
              <p className=" mt-3">
                Nam libero tempore, cum soluta nobis est eligendi optio cumque
                nihil impedit quo minus id quod
              </p>
            </div>
            <div className="sub-product-box ">
              <p className="text-uppercase fs-5 fw-bold">Name of Products</p>
              <p className=" mt-3">
                Nam libero tempore, cum soluta nobis est eligendi optio cumque
                nihil impedit quo minus id quod
              </p>
            </div>
          </div>
        </div>
        <img
          src="https://res.cloudinary.com/dvlpuvdrd/image/upload/v1652784883/product/Line_148_xrwtis.png"
          alt="sub-product-bottom-right-line"
          className="sub-product-end-line d-none d-lg-block"

        />
      </div>
      <Footer />
    </>
  );
};

export default Product;
