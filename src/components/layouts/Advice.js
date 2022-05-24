import React, { useEffect, useState } from "react";
import { PopupModal, PopupWidget } from "react-calendly";
import { Link } from "react-router-dom";
import "../layout-styles/advice.css";
import Calendly from "./Calendly";
// import Calendly from '.'
import WOW from "wowjs";
import ReactPlayer from "react-player";

export default function Advice() {
  const [show, setshow] = useState(false);
  const [audio, setaudio] = useState(false);
  useEffect(() => {
    new WOW.WOW({
      live: false,
    }).init();
    // new WOW().init();
  });
  return (
    <div className="container-fluid advice">
      <div className="container">
        <div className="titleBox  wow fadeInUp">
          <h2 className="adv-title">ADVICE</h2>
          <p className="adv_desc" data-wow-offset="100">
            Get an expert by your side.
          </p>
        </div>
        <div className="row ">
          <div className="col-md-6 col-12 ">
            <div className="video">
              <img
                src="https://res.cloudinary.com/dvlpuvdrd/image/upload/v1652679350/Rectangle_2455_csoxjj.png"
                className="poster-img"
              />
              <img
                src="https://res.cloudinary.com/dvlpuvdrd/image/upload/v1652551207/home-page/play_button_wbb6df.png"
                alt=""
                className="btn-img"
                onClick={() => {
                  setshow(true);
                  setaudio(true);
                }}
              />
            </div>
            {/* <iframe
                            className='video_advice'
                            src="https://www.youtube.com/embed/Sd8qzy0UUXc"
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen>
                        </iframe> */}
          </div>
          <div className="col-md-6 col-12 book-cont">
            <div>
              <h2 className="bookTitle">
                Book Consultation <br />
                call <span className="expTxt">with Expert</span>
              </h2>
            </div>
            <p>
              Be it your existing policy or you are looking for a new policy, we
              are here. Just click and book your slot to get an expert by your
              side
            </p>
            <div className="my-3">
              <div className="d-flex felx-row align-items-center justify-content-start">
                <img
                  src="https://res.cloudinary.com/dvlpuvdrd/image/upload/v1652968173/home-page/Group_39769_fm6z0f.png"
                  alt="blue-bulb"
                />
                <p className="ms-2 fs-5">Verified your policy at zero cost.</p>
              </div>
              <div className="d-flex felx-row align-items-center justify-content-start">
                <img
                  src="https://res.cloudinary.com/dvlpuvdrd/image/upload/v1652968173/home-page/Group_39769_fm6z0f.png"
                  alt="blue-bulb"
                />
                <p className="ms-2 fs-5">No spam guarantee</p>
              </div>
            </div>
            {/* calendly */}
            <Calendly />
            {/*  */}
            {/* <Link to='' className=' btn btn-primary getTouchBtn'>GET IN TOUCH</Link> */}
          </div>
        </div>
        <div
          className="row openpopupbox"
          style={show ? { display: "flex" } : { display: "none" }}
        >
          {/* <iframe
                            className=''
                            src="https://www.youtube.com/embed/Sd8qzy0UUXc?autoplay=1"
                            title="YouTube video player"
                            frameborder="0"
                            height="500px"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen>
                        </iframe> */}
          <ReactPlayer
            url={
              "https://res.cloudinary.com/dvlpuvdrd/video/upload/v1652969983/home-page/get-in-touch-helper-video_ugyquv.mp4"
            }
            controls="true"
            width={"100%"}
            height={"100%"}
          />

          <i
            class="fa-solid fa-xmark"
            onClick={() => {
              setshow(false);
              setaudio(false);
            }}
          ></i>
        </div>
      </div>
    </div>
  );
}
