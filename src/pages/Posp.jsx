import React from 'react'
import Footer from '../components/layouts/Footer'
import Header from '../components/layouts/Header'
import Faq from '../components/layouts/posp/Faq'
import JoinUs from '../components/layouts/posp/JoinUs'
import QuickState from '../components/layouts/posp/QuickState'
import Rating from '../components/layouts/posp/Rating'
import Services from '../components/layouts/posp/Services'
import TopSection from '../components/layouts/posp/TopSection'

const Posp = () => {
  return (
    <>
      <Header/>
      <TopSection/>
      <Rating/>
      <JoinUs/>
      <QuickState/>
      <Services/>
      <Faq/>
      <Footer/>
    </>
  )
}

export default Posp