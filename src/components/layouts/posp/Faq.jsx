import React from "react";
import "../../layout-styles/posp-styles/faq.css"

const Faq = () => {
  return (
    <>
      {/* code paste  */}
      <div className="container-fluid position-relative faq-section">
        <div className="container">
        <img
          src="https://res.cloudinary.com/dvlpuvdrd/image/upload/v1652703722/Posp/dots_teg8kd.png"
          className="position-absolute top-0 start-0 ms-5 w-auto faq-bg-img-1"
        />
        <div className=" row mb-3">
          <div className="col-12">
            <p className="faq-main-text">Frequently Asked Questions</p>

          </div>
        </div>
        <div className=" row mb-3">
          <div className=" col-12">
            <p className="faq-small-text">
              Need help? Here are the top questions asked by our Subscribers
            </p>
          </div>
        </div>
        <div className="row faq-content-box ">


          <div className="accordion accordion-flush my-5" id="accordionFlushExample">
            <div className="accordion-item">
              <div id="flush-headingOne">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                 <p className="faq-content-box-text"  > Is there any minimum qualification requirement? </p>
                </button>
              </div>
              <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body">The minimum educational qualification is 10th (Secondary school, Matriculation or any other equivalent degree) as given by the IRDAI also it requires to undergo a training & certification to become a POSP.
 </div>
              </div>
            </div>
            <div className="accordion-item">
              <p className="faq-content-box-text " id="flush-headingTwo">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                 <p className="faq-content-box-text" > Do I have to visit the office daily?</p> 
                </button>
              </p>
              <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body">One can use online processes to sell policies and work from home or even anywhere else, without having to step out.
You are free to source multiple lines of plans from life insurance to general Insurance & Health Insurance within specified limits. </div>
              </div>
            </div>
            <div className="accordion-item">
              <div id="flush-headingThree">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                 <p className="faq-content-box-text">Who all can become a POSP?</p> 
                </button>
              </div>
              <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body">Anyone can become a POSP like college students, home makers, businessmen, retired individuals.
 </div>
              </div>
            </div>
            <div className="accordion-item">
              <div id="flush-heading4">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse4" aria-expanded="false" aria-controls="flush-collapse4">
                 <p className="faq-content-box-text">When Can I start my business as POSP?</p> 
                </button>
              </div>
              <div id="flush-collapse4" className="accordion-collapse collapse" aria-labelledby="flush-heading4" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body">Immediately after getting your certificate online which is just a 3 step journey.
Enrol, Training & Certification. </div>
              </div>
            </div>
            <div className="accordion-item">
              <div id="flush-heading5">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse5" aria-expanded="false" aria-controls="flush-collapse5">
                <p className="faq-content-box-text">  Is there any limit on the number of plans that I can give to my clients? </p>
                </button>
              </div>
              <div id="flush-collapse5" className="accordion-collapse collapse" aria-labelledby="flush-heading5" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body">Here sky's the limit, you are free to spread as much insurance awareness and penetration to full of your capacity. </div>
              </div>
            </div>
          </div>



          {/* <p className="faq-content-box-text my-3">Is there any minimum qualification requirement?</p> <span></span>
          <p className="faq-content-box-text mb-3">Do I have to visit the office daily?</p> <span></span>
          <p className="faq-content-box-text mb-3">Who all can become a POSP?</p> <span></span>
          <p className="faq-content-box-text mb-3">When Can I start my business as POSP?</p> <span></span>
          <p className="faq-content-box-text mb-3">Is there any limit on the number of plans that I can give to my clients?</p> <span></span> */}



        </div>
        <img
          src="https://res.cloudinary.com/dvlpuvdrd/image/upload/v1652703722/Posp/dots_teg8kd.png"
          className="position-absolute bottom-0 end-0 w-auto me-5 faq-bg-img-2"
        />

        </div>

      </div>

      {/* code paste  */}


      {/* <div className=" container-fluid ">
        {/* <img
          src="https://res.cloudinary.com/dvlpuvdrd/image/upload/v1652703722/Posp/dots_teg8kd.png"
          className="position-absolute top-0 start-0 ms-5 w-auto"
        /> 
        <div className=" row mb-3">
          <div className="col-12">
            <p className="faq-main-text">Frequently Asked Questions</p>

          </div>
        </div>
        <div className=" row mb-3">
          <div className=" col-12">
            <p className="faq-small-text">
              Need help? Here are the top questions asked by our Subscribers
            </p>
          </div>
        </div>
        <div className="row faq-content-box my-5">


          <div class="accordion accordion-flush" id="accordionFlushExample">
            <div class="accordion-item">
              <p class="faq-content-box-text my-3" id="flush-headingOne">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                Is there any minimum qualification requirement?
                </button>
              </p>
              <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
              </div>
            </div>
            <div class="accordion-item">
              <p class="faq-content-box-text my-3" id="flush-headingTwo">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                Do I have to visit the office daily?
                </button>
              </p>
              <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
              </div>
            </div>
            <div class="accordion-item">
              <p class="faq-content-box-text my-3" id="flush-headingThree">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                Who all can become a POSP?
                </button>
              </p>
              <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
              </div>
            </div>
            <div class="accordion-item">
              <p class="faq-content-box-text my-3" id="flush-heading4">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse4" aria-expanded="false" aria-controls="flush-collapse4">
                When Can I start my business as POSP?
                </button>
              </p>
              <div id="flush-collapse4" class="accordion-collapse collapse" aria-labelledby="flush-heading4" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
              </div>
            </div>
            <div class="accordion-item">
              <p class="faq-content-box-text my-3" id="flush-heading5">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse5" aria-expanded="false" aria-controls="flush-collapse5">
                Is there any limit on the number of plans that I can give to my clients?
                </button>
              </p>
              <div id="flush-collapse5" class="accordion-collapse collapse" aria-labelledby="flush-heading5" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
              </div>
            </div>
          </div>


          {/* <p className="faq-content-box-text my-3">Is there any minimum qualification requirement?</p> <span></span>
          <p className="faq-content-box-text mb-3">Do I have to visit the office daily?</p> <span></span>
          <p className="faq-content-box-text mb-3">Who all can become a POSP?</p> <span></span>
          <p className="faq-content-box-text mb-3">When Can I start my business as POSP?</p> <span></span>
          <p className="faq-content-box-text mb-3">Is there any limit on the number of plans that I can give to my clients?</p> <span></span> 



        </div>



      </div> */}


    </>
  );
};

export default Faq;
