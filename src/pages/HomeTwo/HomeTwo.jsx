import React from 'react'
import HeroTwo from '../../components/HomeTwo/HeroTwo'
import Marquee from '../../components/HomeOne/Marquee'
import ServiceTwo from '../../components/HomeTwo/ServiceTwo'

const HomeTwo = () => {
  return (
    <>
      <HeroTwo />
      <Marquee mainClass="fix pb-0" />
      <ServiceTwo />
    </>
  )
}

export default HomeTwo