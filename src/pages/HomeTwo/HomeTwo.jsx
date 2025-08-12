import React from 'react'
import HeroTwo from '../../components/HomeTwo/HeroTwo'
import Marquee from '../../components/HomeOne/Marquee'
import ServiceTwo from '../../components/HomeTwo/ServiceTwo'
import AboutTwo from '../../components/HomeTwo/AboutTwo'

const HomeTwo = () => {
  return (
    <>
      <HeroTwo />
      <Marquee mainClass="pb-0" />
      <ServiceTwo />
      <AboutTwo />
    </>
  )
}

export default HomeTwo