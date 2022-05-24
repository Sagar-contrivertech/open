import React, { createContext, useContext, useState } from "react";
import { Link } from "react-router-dom";
// import Typewriter from "typewriter-effect";
import { productvalue } from "../../pages/Home";
// const productshow = createContext("true");

function Hero() {

  const displayfunc = () => {
    let product = document.querySelector(".homeproduct");
    // console.log(product);
    product.style.display = 'unset';
    window.scrollTo(0, product.offsetTop - 100);
    // console.log(product.offsetTop);
  }
  return (
    <>
      <div className="Hero-section mt-5 mt-lg-0">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-6 ">
              <div className="hero-content">
                <p className="hero-content-red">Insurance made simple</p>
                <h1 style={{"display" : "inline-block"}}>
                  The Best Place 
                  <span className="wrapper" >
                    <p>To co</p> 
                    <div className="words">
                      <span>nsult</span>
                      <span>mpare</span>
                      <span>ver</span>
                    </div>
                    {/* <TextLoop children={["nsult", "mpare", "ver",]} interval={100} /> */}
                    {/* <Typewriter
                      options={{
                        loop: true,
                      }}
                      onInit={(typewriter) => {
                        typewriter
                          .typeString("Consult")
                          .pauseFor(1000)
                          .deleteAll()
                          .typeString("Compare")
                          .pauseFor(1000)
                          .deleteAll()
                          .typeString("Cover")
                          .pauseFor(1000)
                          .deleteAll()
                          .start();
                      }}
                    /> */}
                  </span>
                </h1>
                <p className="hero-content-p">
                  Insurance at your doorstep by verified &amp; trusted advisors
                  nearby.
                </p>
                <Link to="/" className="hero-content-btn btn btn-primary" onClick={displayfunc}>
                  <p className="d-inline">Explore All Products</p>
                  <img
                    className="d-inline"
                    src="https://res.cloudinary.com/dvlpuvdrd/image/upload/v1652866892/Vector_4_u11wnq.png"
                    alt="white-arrow"
                  />
                </Link>
              </div>
            </div>
            <div className="col-md-6 col-6  ">
              <div className="hero-image">
                <img
                  src="https://res.cloudinary.com/dvlpuvdrd/image/upload/v1652529952/Group_39836_atvviy.png"
                  className="bg-image"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
// export {productshow}
