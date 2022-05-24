import React from 'react'
import '../../layout-styles/about-styles/weKnow.css'

export default function WeKnow() {
  return (
    <div className='container-fluid '>
        <div className="row weKnow">
            <div className="col-md-6 col-12 align-items-center">
                <h2 className='weTitle'>We Know Insurance <span>Better</span></h2>
                <p className='vision'><span>Our vision</span> is to become the best and the leading insurance broker in India.</p>
                <p className='vision'><span>Our mission</span> is to Remain innovative, reliable and competitive.</p>
                <div className="user">
                  <img src="https://res.cloudinary.com/dvlpuvdrd/image/upload/v1652680092/home-page/userfirst_t4lovr.png" alt="userFirst" />
                  <div className='user-first'>
                    <img className='mobImg' src="https://res.cloudinary.com/dvlpuvdrd/image/upload/v1652680092/home-page/userfirst_t4lovr.png" alt="userFirst" />
                    <p className='ti'>User First</p>
                    <p className='tiDesc'>Policy Era is committed to supporting, guiding and serving our
customers at the highest levels.</p>
                  </div>
                </div>
            </div>
            <div className="col-md-6 text-center col-12">
                <img className='weImg' src="https://res.cloudinary.com/dvlpuvdrd/image/upload/v1652606144/home-page/besy_2_ucgevy.png" alt="weKnow" />
            </div>
        </div>
    </div>
  )
}
