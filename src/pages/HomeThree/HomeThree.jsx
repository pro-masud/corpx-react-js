import Brands from "../../components/HomeOne/Brands";
import Marquee from "../../components/HomeOne/Marquee";
import AboutThree from "../../components/HomeThree/AboutThree";
import CompanyBenefits from "../../components/HomeThree/CompanyBenefits";
import ContactForm from "../../components/HomeThree/ContactForm";
import HeroThree from "../../components/HomeThree/HeroThree";
import PopularPost from "../../components/HomeThree/PopularPost";
import ProjectThree from "../../components/HomeThree/projectThree";
import ServiceThree from "../../components/HomeThree/ServiceThree";
import TeamThree from "../../components/HomeThree/TeamThree";
import TestimonialThree from "../../components/HomeThree/TestimonialThree";

const HomeThree = () => {
  return (
    <>
      <HeroThree />
      <AboutThree />
      <PopularPost />
      <CompanyBenefits />
      <ProjectThree />
      <Marquee mainClass="pt-0" />
      <ServiceThree />
      <Brands />
      <TeamThree />
      <TestimonialThree />
      <ContactForm />
    </>
  );
};

export default HomeThree;
