import Hero from '../../components/HomeOne/Hero'
import Service from '../../components/HomeOne/Service'
import About from '../../components/HomeOne/About'
import Achievement from '../../components/HomeOne/Achievement'
import WCU from '../../components/HomeOne/WCU'
import Marquee from '../../components/HomeOne/Marquee'
import Project from '../../components/HomeOne/Project'
import WhyChooseUs from '../../components/HomeOne/WhyChooseUs'
import Brands from '../../components/HomeOne/Brands'
import Testimonial from '../../components/HomeOne/Testimonial'
import Blog from '../../components/HomeOne/Blog'

const HeroOne = () => {
  return (
    <>
        <Hero />
        <Service />
        <About />
        <Achievement />
        <WCU />
        <Marquee mainClass="fix pt-0" />
        <Project />
        <WhyChooseUs />
        <Brands mainClass='pt-0 fix' />
        <Testimonial />
        <Blog />
    </>
  )
}

export default HeroOne