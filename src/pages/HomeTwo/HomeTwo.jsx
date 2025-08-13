import React from 'react'
import HeroTwo from '../../components/HomeTwo/HeroTwo'
import Marquee from '../../components/HomeOne/Marquee'
import ServiceTwo from '../../components/HomeTwo/ServiceTwo'
import AboutTwo from '../../components/HomeTwo/AboutTwo'
import CoreFeature from '../../components/HomeTwo/CoreFeature'
import Brands from '../../components/HomeOne/Brands'
import WhyChooseUsTwo from '../../components/HomeTwo/WhyChooseUsTwo'

const HomeTwo = () => {
  return (
    <>
      <HeroTwo />
      <Marquee mainClass="pb-0" />
      <ServiceTwo />
      <AboutTwo />
      <CoreFeature />
      <Brands />
      <WhyChooseUsTwo />
    </>
  )
}

export default HomeTwo