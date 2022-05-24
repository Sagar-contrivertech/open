import React from "react";
import "../../layout-styles/posp-styles/joinUs.css";
const JoinUs = () => {
  return (
    <>
      <div className="joinUs-container">
        <div className="container-fluid">
          <div className="row ">
            <div className="joinus-text  d-flex flex-column align-items-center text-center">
              Join Us
            </div>
          </div>
          <div className="row">
            <div className="joinUs-text-2">
              {" "}
              Get your POSP Code today and opportunity too{" "}
            </div>
          </div>

          <div className="row d-flex justify-content-center m-2 ">
            <div className="JoinUs-text-3">
              <p className="joinUs-holding-text">
                we are always there holding your back 🙌 🙌 🙌 🙌
              </p>
            </div>
          </div>

          <div className="row justify-content-around joinus-boxs">
            <div className="col-md-3 d-flex justify-content-center position-relative  m-3">
              <div className="joinUs-Num">
                <img
                  src="https://res.cloudinary.com/dvlpuvdrd/image/upload/v1652699522/Posp/1_1_uwzhnb.png"
                  alt=""
                />
              </div>
              <div className="position-absolute">
                <div className="joinUs-num-text m-3">
                  Grow your client network.
                </div>
                <p className="m-3 joinus-para-text">
                With our mentorship program, you can grow your client base exponentially.
Get access to our ready marketing materials and flyers to reach your potential client on time.
                </p>
              </div>
            </div>
            <div className="col-md-3 d-flex justify-content-center position-relative m-3">
              <div>
                <img
                  src="https://res.cloudinary.com/dvlpuvdrd/image/upload/v1652699453/Posp/2_ssvbgz.png"
                  alt=""
                />
              </div>
              <div className="position-absolute">
                <p className="joinUs-num-text m-3">
                Get verified clients nearby.
                </p>
                <p className="m-3 joinus-para-text">
                Access to genuine client requirements from your nearby location.
 On field support to arrange events and awareness activities for your clients.
                </p>
              </div>
            </div>
            <div className="col-md-3 d-flex justify-content-center position-relative m-3">
              <div>
                <img
                  src="https://res.cloudinary.com/dvlpuvdrd/image/upload/v1652699452/Posp/3_lrok63.png"
                  alt=""
                />
              </div>
              <div className="position-absolute">
                <p className="joinUs-num-text m-3">
                Complete claim assistance.
                </p>
                <p className="m-3 joinus-para-text">
                Be it your health, life, motor or any insurance, you will see our experts by your side. Claims expert at Policy Era are dealing with claims day in day out, helps you save your time and effort. 
                </p>
              </div>
            </div>
          </div>

          <div className="row  joinUs-num-2 justify-content-around joinus-boxs">
            <div className="col-md-3 d-flex justify-content-center position-relative  m-3">
              <div className="joinUs-Num">
                <img
                  src="https://res.cloudinary.com/dvlpuvdrd/image/upload/v1652699452/Posp/4_i3l9lv.png"
                  alt=""
                />
              </div>
              <div className="position-absolute">
                <p className="joinUs-num-text m-3">Regular training & development.</p>
                <p className="m-3 joinus-para-text">
                Get Industry news on your device.
 Industry veteran for product training and insights to achieve your goals. 

                </p>
              </div>
            </div>
            <div className="col-md-3 d-flex justify-content-center position-relative m-3">
              <div>
                <img
                  src="https://res.cloudinary.com/dvlpuvdrd/image/upload/v1652699452/Posp/5_tctqno.png"
                  alt=""
                />
              </div>
              <div className="position-absolute">
                <p className="joinUs-num-text m-3">
                All insurer’s at one place.
                </p>
                <p className="m-3 joinus-para-text">
                Oppotunity to reach all companies for your insurance needs on a single platform.Online and offline support to never miss on your customers requirements.

                </p>
              </div>
            </div>
            <div className="col-md-3 d-flex justify-content-center position-relative m-3">
              <div>
                <img
                  src="https://res.cloudinary.com/dvlpuvdrd/image/upload/v1652699453/Posp/6_sp0une.png"
                  alt=""
                />
              </div>
              <div className="position-absolute">
                <p className="joinUs-num-text m-3">
                Manage digital client portfolio.
                </p>
                <p className="m-3 joinus-para-text">
                New way to see your client portfolio, forecast and help them secure their assets.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default JoinUs;
