import React from 'react'
import HeroTwo from '../../components/HomeTwo/HeroTwo'
import Marquee from '../../components/HomeOne/Marquee'
import ServiceTwo from '../../components/HomeTwo/ServiceTwo'
import AboutTwo from '../../components/HomeTwo/AboutTwo'
import CoreFeature from '../../components/HomeTwo/CoreFeature'
import Brands from '../../components/HomeOne/Brands'
import WhyChooseUsTwo from '../../components/HomeTwo/WhyChooseUsTwo'
import WorkProcess from '../../components/HomeTwo/WorkProcess'
import Team from '../../components/HomeTwo/Team'

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
      <WorkProcess />
      <Team />
    </>
  )
}

export default HomeTwo