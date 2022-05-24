import React from 'react'
import '../layout-styles/adviceRotation.css'

export default function AdviceRotation() {
  return (
    <div className='container-fluid advice-rot'>
        {/* <p className="marquee">
            <span className='gry_txt'>Just Ask For Advice
            <span className='orange_circle'></span>
            <span className='blu_txt'>It’s Free</span></span>
        </p> */}
        {/* <div class="m-scroll">
          <div class="m-scroll__title">
            <div>
              <h1 style={{display: 'flex'}}>
                <p>Just Ask For Advice</p> 
                <p className='orange_circle'></p> &amp; 
                <p className='blu_txt'>It’s Free</p>&nbsp;
              </h1>
              <h1>
                <p>Just Ask For Advice</p> 
                <p className='orange_circle'></p> &amp; 
                <p className='blu_txt'>It’s Free</p>&nbsp;
              </h1>
            </div>
          </div>
        </div> */}
        <div class="m-scroll">
          <div class="m-scroll__title">
            <div>
              <h1>
                <a className='gry_txt' href="">Just Ask For Advice</a> <a href=""><img className='orange_circle' src="https://res.cloudinary.com/dvlpuvdrd/image/upload/v1652657287/home-page/Ellipse_149_rksrj2.png" alt="" /> </a> <a className='blu_txt' href="">It’s Free </a> <a href=""><img className='orange_circle' src="https://res.cloudinary.com/dvlpuvdrd/image/upload/v1652657287/home-page/Ellipse_149_rksrj2.png" alt="" /> </a>&nbsp;
              </h1>
              <h1>
              <a className='gry_txt' href="">Just Ask For Advice</a> <a href=""><img className='orange_circle' src="https://res.cloudinary.com/dvlpuvdrd/image/upload/v1652657287/home-page/Ellipse_149_rksrj2.png" alt="" /> </a> <a className='blu_txt' href="">It’s Free </a><a href=""><img className='orange_circle' src="https://res.cloudinary.com/dvlpuvdrd/image/upload/v1652657287/home-page/Ellipse_149_rksrj2.png" alt="" /> </a>&nbsp;
              </h1>
            </div>
          </div>
        </div>
    </div>
  )
}
