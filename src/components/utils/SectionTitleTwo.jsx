import ShapeImage from "../../assets/img/icon/subTitleIcon.svg";

const SectionTitleTwo = ({title, subTitle, buttonText='', buttonURL='', desc = '', descClass ='', mainClass = '', colorClass = ''}) => {
  return (
    <>
        <div className={`section-title ${mainClass}`}>
            <span className={`subtitle wow fadeInUp ${colorClass}`}>
                <img src={ShapeImage} alt="icon" />
               {subTitle}
            </span>
            <h2 className={`wow fadeInUp ${colorClass}`} data-wow-delay=".3s">{title}</h2>
            {buttonText && buttonURL && (
                <a href={buttonURL} className="theme-btn wow fadeInUp" data-wow-delay=".5s">
                    {buttonText}
                    <i className="fa-solid fa-arrow-up-right"></i>
                </a>
            )}
            {desc && (
                <p className={`wow fadeInUp ${descClass}`} data-wow-delay=".5s">
                    {desc}
                </p>
            )}
        </div>
    </>
  )
}

export default SectionTitleTwo;