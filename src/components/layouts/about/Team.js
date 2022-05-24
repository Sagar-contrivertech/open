import React, { useEffect } from 'react'
import '../../layout-styles/about-styles/team.css'
import Slider from "react-slick";
// import $ from 'jquery';
// import jquery from 'jquery';

export default function Team() {
  useEffect(() => {
    const script = document.createElement('script');

        script.src = "assets/js/slick.js";
        script.async = true;
        document.body.appendChild(script);
        return () => {
            document.body.removeChild(script);
        }
    },[])
  return (
    <div className='team'>
      <div className="container-fluid teamMain">
        <div>
          <p className='theTeam'>The team</p>
          <p className='teamTxt'>Meet The <span className='redAwe'>Awesome</span> and <span className='blu'>Creative</span> members of Our Team </p>
        </div>
        {/* <div className='personBox'>
          <div className="person">
            <img className='personImg' src="https://res.cloudinary.com/dvlpuvdrd/image/upload/v1652618959/home-page/Rectangle_27_qqzwyg.png" alt="person" />
            <p className='pName'>Ankush Jamudhe</p>
            <p className='designation'>Co-Founder</p>
          </div>
        </div> */}
        <div className='personBox responsive-slider'>
          <div>
            <img className='personImg' src="https://res.cloudinary.com/dvlpuvdrd/image/upload/v1652618959/home-page/Rectangle_27_qqzwyg.png" alt="person" />
            <p className='pName'>Ankush Jamudhe</p>
            <p className='designation'>Co-Founder</p>
          </div>
          <div>
            <img className='personImg' src="https://res.cloudinary.com/dvlpuvdrd/image/upload/v1652618959/home-page/Rectangle_27_qqzwyg.png" alt="person" />
            <p className='pName'>Soman Soni</p>
            <p className='designation'>Director</p>
          </div>
          <div>
            <img className='personImg' src="https://res.cloudinary.com/dvlpuvdrd/image/upload/v1652618959/home-page/Rectangle_27_qqzwyg.png" alt="person" />
            <p className='pName'>John Doe</p>
            <p className='designation'>Advisor</p>
          </div>
          <div>
            <img className='personImg' src="https://res.cloudinary.com/dvlpuvdrd/image/upload/v1652618959/home-page/Rectangle_27_qqzwyg.png" alt="person" />
            <p className='pName'>yash prajapati</p>
            <p className='designation'>UI/UX and product Designer</p>
          </div>
        </div>
      </div>
    </div>
  )
}
