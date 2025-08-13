import React from 'react'
import SectionTitleTwo from '../utils/SectionTitleTwo'
import teams from '../../data/teams'

const Team = () => {
  return (
    <>
        <section className="team-member-section section-padding fix">
            <div className="container">
                <div className="team-member-wrapper style3">
                    <SectionTitleTwo title="Dedicated Expert Team" subTitle="Our Experts" mainClass='text-center mx-auto' />
                    <div className="row g-4">
                        {teams.map((singleTeam, index) =>
                            <div key={index} className="col-xl-4 col-md-6">
                                <div className="team-card style3 wow fadeInUp" data-wow-delay=".3s">
                                    <div className="team-thumb">
                                        <img src={singleTeam.image} alt="thumb" />
                                    </div>
                                    <div className="team-content">
                                        <div className="social-links">
                                            <div className="social-media">
                                                <a href="#"><i className="fa-brands fa-twitter"></i></a>
                                                <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                                                <a href="#"><i className="fa-brands fa-instagram"></i></a>
                                                <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
                                            </div>
                                            <div className="plus-btn">
                                                <i className="fa-solid fa-plus"></i>
                                            </div>
                                        </div>
                                        <h3><a href={singleTeam.profile_url}>{singleTeam.name}</a></h3>
                                        <p className="text">{singleTeam.designation}</p>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Team