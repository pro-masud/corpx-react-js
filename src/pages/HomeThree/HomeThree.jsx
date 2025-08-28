import React from 'react'
import HeroThree from '../../components/HomeThree/HeroThree'
import AboutThree from '../../components/HomeThree/AboutThree'
import PopularPost from '../../components/HomeThree/PopularPost'
import CompanyBenefits from '../../components/HomeThree/CompanyBenefits'
import ProjectThree from '../../components/HomeThree/projectThree'
import Marquee from '../../components/HomeOne/Marquee'
import ServiceThree from '../../components/HomeThree/ServiceThree'
import Brands from '../../components/HomeOne/Brands'

const HomeThree = () => {
  return (
    <>
      <HeroThree />
      <AboutThree />
      <PopularPost />
      <CompanyBenefits />
      <ProjectThree />
      <Marquee mainClass='pt-0' />
      <ServiceThree />
      <Brands/>
    </>
  )
}

export default HomeThree