import React from 'react'
import '../../layout-styles/about-styles/aboutHero.css'

export default function AboutHero() {
    return (
        <div className='about mt-5 mt-lg-0'>
            <div className='container'>
                <div className="title">
                    <h2 className='atb-title'>About Us</h2>
                    <p className='atb-ti-desc'>KNOW US BETTER</p>
                    <p className='mainAtb'>What we do is what make us <br />Who we are</p>
                    <p className='contentAtb'>Policy Era Insurance Brokers is an Insurance Broking firm licensed by IRDAI in 2022. Our services revolve 360 degree around insurance products catering to individuals & large corporations, be it private, government or associations. While we manage your complete insurance portfolio, It start’s with consulting to understand your risk better before recommending any suitable insurance portfolio.</p>
                    <img className='sign' src="https://res.cloudinary.com/dvlpuvdrd/image/upload/v1652605543/home-page/Vector_17_hsxj8b.png" alt="cofounder sign" />
                    <p className='org'>CO-FOUNDER</p>
                    <p className='co-fou'>Soman Soni</p>
                </div>
            </div>
        </div>
    )
}
