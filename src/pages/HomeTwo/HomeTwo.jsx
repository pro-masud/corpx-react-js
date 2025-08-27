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
import TestimonialTwo from '../../components/HomeTwo/TestimonialTwo'
import FAQ from '../../components/HomeTwo/FAQ'
import BlogTwo from '../../components/HomeTwo/BlogTwo'

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
      <TestimonialTwo />
      <FAQ />
      <BlogTwo />
    </>
  )
}

export default HomeTwo