import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../layout-styles/header-styles/header.css";
import WOW from "wowjs";
import axios from "axios";

function Header() {
  const [show, setShow] = useState(false);
  // console.log(show);

  const [gender, setGender] = useState("female");
  const [firstName, setFirstName] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [product, setProduct] = useState("");
  const [description, setDescription] = useState("");
  const [showThanks, setShowThanks] = useState(false);

  const handleModal = () => {
    setShow(!show);
  };
  const body = {
    Gender: gender,
    FirstName: firstName,
    LastName: contactNumber,
    Product: product,
    description: description,
  };

  const submitData = (e) => {
    e.preventDefault();
    // console.log(body)
    axios
      .post("http://13.232.99.230:3000/getassured", body)
      .then((res) => {
        setShow(false);
        setShowThanks(true);
        setTimeout(() => {
          setShowThanks(false);
        }, 2000);
      })
      // .catch((err) => {
      //   console.log(err);
      // });
  };
  useEffect(() => {
    new WOW.WOW({
      live: false,
    }).init();
  });

  return (
    <>
      <div className="header-navbar container-fluid fixed-top">
        <div className="position-relative">
          <nav
            className="container navbar navbar-expand-lg navbar-light my-3 "
            id="header-sticky"
          >
            <div className="container-fluid">
              <div className="col-12 col-lg-4 d-flex flex-column">
                <div className="d-flex align-items-center justify-content-between">
                  <Link to="/">
                    <img
                      src="https://res.cloudinary.com/dvlpuvdrd/image/upload/v1652439771/Vector_u5mkv3.png"
                      className="logo-img"
                      alt="logo"
                    />
                  </Link>
                  <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    {/* <span className="navbar-toggler-icon" /> */}
                    <img
                      style={{ border: "none" }}
                      src="https://res.cloudinary.com/dvlpuvdrd/image/upload/v1652647011/home-page/Vector_kxcrbu.png"
                      alt="hamburger_icon"
                    />
                  </button>
                </div>
                <div className="d-lg-none d-flex align-items-center justify-content-between">
                  <div className="nav-item m-2">
                    <Link
                      to="/posp"
                      type="button"
                      class="btn btn-outline-primary"
                    >
                      Join As Posp
                    </Link>
                  </div>
                  <div className="nav-item m-2">
                    <button
                      onClick={handleModal}
                      type="button"
                      class="btn btn-primary"
                    >
                      Get Insured
                    </button>
                  </div>
                </div>
              </div>
              <div
                className="collapse navbar-collapse justify-content-end"
                id="navbarSupportedContent"
              >
                <div>
                  <div className="navbar-nav ms-auto mb-2 mb-lg-0 ">
                    <div className="nav-item m-2">
                      <Link to="/about" type="button" class="btn">
                        About
                      </Link>
                    </div>
                    {/* <div className="nav-item m-2">
                      <Link to="/product" type="button" class="btn">
                        Product
                      </Link>
                    </div> */}
                    <div className="nav-item m-2 d-none d-lg-block">
                      <Link
                        to="/posp"
                        type="button"
                        class="btn btn-outline-primary"
                      >
                        Join As Posp
                      </Link>
                    </div>
                    <div className="nav-item m-2 d-none d-lg-block">
                      <button
                        onClick={handleModal}
                        type="button"
                        class="btn btn-primary"
                      >
                        Get Insured
                      </button>
                    </div>
                    {/* <div className="nav-item m-2">
                  <div className="dropdown">
                    <button className="btn  dropdown-toggle " type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                      <span className='text-primary'> Product</span>
                    </button>
                    <ul className="dropdown-menu custom-dropdown-menu" aria-labelledby="dropdownMenuButton2">
                      <li className='firstBox'>
                        <ul>
                          <li>
                            <Link className="dropdown-item titleDrop" to='/'>Personal Insurance</Link>
                            <ul>
                              <li><Link className="dropdown-item cusItem" to='/'>Health Insurance</Link></li>
                              <li><Link className="dropdown-item cusItem" to='/'>Life Insurance</Link></li>
                              <li><Link className="dropdown-item cusItem" to='/'>Motor Insurance</Link></li>
                              <li><Link className="dropdown-item cusItem" to='/'>Travel Insurance</Link></li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <ul>
                          <li>
                            <Link className="dropdown-item titleDrop" to='/'>Banking Insurance</Link>
                            <ul>
                              <li><Link className="dropdown-item cusItem" to='/'>Employee Insurance</Link></li>
                              {/* <li><Link className="dropdown-item cusItem" to='/'>Fire Insurance</Link></li>
                              <li><Link className="dropdown-item cusItem" to='/'>Marine Insurance</Link></li>
                              <li><Link className="dropdown-item cusItem" to='/'>Liablity Insurance</Link></li>
                              <li><Link className="dropdown-item cusItem" to='/'>Engineering</Link></li> *}
                            </ul>
                          </li>
                        </ul>
                      </li>

                    </ul>
                  </div>
                </div> */}
                    {/* <div className="nav-item m-2">
                  <button type="button" class="btn btn-outline-primary">Join As POSP</button>
                </div>
                <div className="nav-item m-2">
                  <button type="button" class="btn btn-primary">Get Insured</button>
                </div> */}
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
        <div className={`form-modal ${!show ? "modal-none" : ""}`}>
          <div>
            <div className="form-body">
              <img
                onClick={handleModal}
                className="blue-cross"
                src="https://res.cloudinary.com/dvlpuvdrd/image/upload/v1652865457/Vector_3_roh2wc.png"
                alt="blue cross"
              />
              <form method="post" onSubmit={(e) => submitData(e)}>
                <div className="mb-3 mb-md-3">
                  <div>
                    <div className="text-primary">I am a</div>
                    <div className="row">
                      <div className="col-6">
                        <label
                          className="w-100 btn btn-outline-primary"
                          htmlFor="option1"
                          onClick={() => setGender("male")}
                        >
                          <input
                            required
                            value={gender}
                            checked={gender === "male"}
                            type="radio"
                            className="btn-check"
                            name="options"
                          />
                          Male
                        </label>
                      </div>
                      <div className="col-6">
                        <label
                          className="w-100 btn btn-outline-primary"
                          onClick={() => setGender("female")}
                          htmlFor="option2"
                        >
                          <input
                            required
                            value={gender}
                            checked={gender === "female"}
                            type="radio"
                            className="btn-check"
                            name="options"
                          />
                          Female
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mb-1 mb-md-3">
                  <label
                    htmlFor="firstName"
                    className="form-label text-primary"
                  >
                    First Name
                  </label>
                  <input
                    required
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    type="text"
                    className="form-control border"
                    id="firstName"
                    placeholder="First Name"
                  />
                </div>
                <div className="mb-1 mb-md-3">
                  <label
                    htmlFor="contactNumber"
                    className="form-label text-primary"
                  >
                    Contact Number
                  </label>
                  <input
                    required
                    value={contactNumber}
                    onChange={(e) => {
                      setContactNumber(e.target.value);
                    }}
                    type="number"
                    className="form-control border"
                    id="contactNumber"
                    placeholder="Contact Number"
                  />
                </div>
                <div className="mb-1 mb-md-3">
                  <label htmlFor="product" className="form-label text-primary">
                    Select Product
                  </label>
                  <select
                    value={product}
                    onChange={(e) => {
                      setProduct(e.target.value);
                    }}
                    className="form-select"
                    id="product"
                  >
                    <option selected hidden>
                      Select
                    </option>
                    <option value="Health insurance">Health insurance</option>
                    <option value="Life insurance">Life insurance</option>
                    <option value="Motor insurance">Motor insurance</option>
                    <option value="Travel insurance">Travel insurance</option>
                    <option value="Employee benefits">Employee benefits</option>
                    <option value="Fire insurance">Fire insurance</option>
                    <option value="Marine insurance">Marine insurance</option>
                    <option value="Liability insurance">
                      Liability insurance
                    </option>
                    <option value="Engineering">Engineering</option>
                  </select>
                </div>
                <div className="mb-1 mb-md-3">
                  <label htmlFor="message" className="form-label text-primary">
                    What are you contacting us for ?
                  </label>
                  <textarea
                    value={description}
                    onChange={(e) => {
                      setDescription(e.target.value);
                    }}
                    className="form-control"
                    id="message"
                    placeholder="Description"
                  ></textarea>
                </div>
                <input
                  required
                  type="submit"
                  className="btn btn-primary w-100"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className={`submit-success py-4 px-1 ${showThanks ? "" : "v-none"}`}>
        <div className="d-flex flex-column align-items-center">
          <div className="d-flex align-items-center justify-content-center">
            <img
              src="https://res.cloudinary.com/dvlpuvdrd/image/upload/v1652971710/home-page/Vector_5_u0iger.png"
              alt="grenn-tick"
              className="green-tick"
            />
            <p className="ps-2 green-text fs-5">Thank You</p>
          </div>
          <p className="mt-2 success-body-text px-3">
            we have got you concern, will get back to you soon!!!
          </p>
        </div>
      </div>
    </>
  );
}

export default Header;
