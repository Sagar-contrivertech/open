import axios from "axios";
import React, { useState } from "react";
import "../../layout-styles/posp-styles/topSection.css";

const TopSection = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");

  // console.log(name);
  // console.log(number);
  // console.log(email);
  // const numberReg = new RegExp("/^[0-9\b]+$/");
  // const checkNumber = (num) => {
  //   if (numberReg.test(num)) {
  //     console.log("number barober");
  //   } else if (!numberReg.test(num)) {
  //     console.log("number barober nai");
  //   }
  // };
  const body = {
    Name: name,
    Number: number,
    Email: email,
  };
  const submitData = (e) => {
    e.preventDefault();
    axios
      .post("http://13.232.99.230:3000", body)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <div className="container-fluid TopSection mt-5 mt-lg-0">
        <div className="top-section row">
          <div className="top-sec-img col-md-6">
            <img
              src="https://res.cloudinary.com/dvlpuvdrd/image/upload/v1652676334/Posp/posp-top-section-img_fh5tes.png"
              alt=""
              className="img-fluid"
            />
          </div>
          <div className="main-form col-md-6">
            <span className="top-form-text"> Partner With Us</span>
            <div className="top-sec-form-bg">
              <form
                className="formPosp"
                method="post"
                onSubmit={(e) => submitData(e)}
              >
                <div className=" sell-btn">Sell Better &amp; Faster</div>
                <div className="pospInput">
                  <input
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    placeholder="Your full Name"
                    className="top-sec-input px-2"
                  />
                </div>
                <div className="pospInput">
                  <input
                    maxLength="10"
                    required
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
                    type="number"
                    placeholder="Your Phone Number"
                    className="top-sec-input px-2"
                    // onBlur={(e) => checkNumber(e.target.value)}
                  />
                </div>

                {/* <div className="pospInput">
                  <input
                    type="text"
                    placeholder="qualification"
                    className="top-sec-input px-2"
                  />
                </div> */}

                {/* <select className="form-select pospInput" aria-label="Default select example">
                  <option selected>qualification</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select> */}
                <div className="pospInput margin-bottom-inc">
                  <input
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    placeholder="email"
                    className="top-sec-input px-2"
                  />
                </div>
                <button type="submit" className="top-sec-btn text-white">
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopSection;
