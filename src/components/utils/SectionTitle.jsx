import ShapeImage from "../../assets/img/icon/subTitleIcon.svg";

const SectionTitle = ({title, subTitle, buttonText='', buttonURL='', desc = ''}) => {
  return (
    <>
        <div className="section-title">
            <span className="subtitle wow fadeInUp">
                <img src={ShapeImage} alt="icon" />
               {subTitle}
            </span>
            <h2 className="wow fadeInUp" data-wow-delay=".3s">{title}</h2>
            {buttonText && buttonURL && (
                <a href={buttonURL} className="theme-btn wow fadeInUp" data-wow-delay=".5s">
                    {buttonText}
                    <i className="fa-solid fa-arrow-up-right"></i>
                </a>
            )}
            {desc && (
                <p className="wow fadeInUp" data-wow-delay=".5s">
                    {desc}
                </p>
            )}
        </div>
    </>
  )
}

export default SectionTitle