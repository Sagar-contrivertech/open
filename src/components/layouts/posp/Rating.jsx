import React from "react";
import "../../layout-styles/posp-styles/rating.css";
const Rating = () => {
  return (
    <>
      <div className="container-fluid Rating">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-4 col-12">
            <img
              src="https://res.cloudinary.com/dvlpuvdrd/image/upload/v1652691199/Posp/Rating_a7tq99.png"
              alt=""
            />
          </div>
          <div className="col-md-8 col-12">
            <div className="rating-star mb-0 rating-star-text">
              <p>Rated 4.8 out of 5 by our POSP Agents </p>
            </div>
          </div>
        </div>
        <div className="row">
          <p className="d-flex justify-content-center  mini-p-rating">
            access to all insurance product
          </p>
        </div>
      </div>
      </div>
    </>
  );
};

export default Rating;
