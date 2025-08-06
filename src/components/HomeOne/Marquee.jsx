import React from 'react'
import marquee from '../../data/marquee'

const Marquee = () => {
  return (
    <>
        <div className="marquee-section section-padding pt-0 fix">
            <div className="mycustom-marque">
                <div className="scrolling-wrap">
                    <div className="comm style1">
                        {marquee.map((singleMarquee, index) => 
                            <React.Fragment key={index}>
                                <div className={`cmn-textslide ${singleMarquee.style}`}>
                                {singleMarquee.text}
                                </div>
                                <div className={singleMarquee.iconType}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="54" viewBox="0 0 50 54" fill="none">
                                    <path
                                    d="M29.703 54H19.802V37.5L5.44554 45L0 36L14.8515 26.5L0 17.5L5.44554 8.5L19.802 17.5V0H29.703V17.5L44.5545 8.5L50 17.5L35.6436 27.5L50 37.5L44.5545 45L29.703 36V54Z"
                                    fill="#AEC0C9"
                                    />
                                </svg>
                                </div>
                            </React.Fragment>
                        )}                        
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Marquee