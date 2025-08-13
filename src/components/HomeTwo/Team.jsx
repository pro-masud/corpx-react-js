import React from 'react'
import SectionTitleTwo from '../utils/SectionTitleTwo'
import teams from '../../data/teams'

const Team = () => {
  return (
    <>
        <section class="team-member-section section-padding fix">
            <div class="container">
                <div class="team-member-wrapper style3">
                    <SectionTitleTwo title="Dedicated Expert Team" subTitle="Our Experts" mainClass='text-center mx-auto' />
                    <div class="row g-4">
                        {teams.map((singleTeam, index) =>
                            <div key={index} class="col-xl-4 col-md-6">
                                <div class="team-card style3 wow fadeInUp" data-wow-delay=".3s">
                                    <div class="team-thumb">
                                        <img src={singleTeam.image} alt="thumb" />
                                    </div>
                                    <div class="team-content">
                                        <div class="social-links">
                                            <div class="social-media">
                                                <a href="#"><i class="fa-brands fa-twitter"></i></a>
                                                <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
                                                <a href="#"><i class="fa-brands fa-instagram"></i></a>
                                                <a href="#"><i class="fa-brands fa-linkedin-in"></i></a>
                                            </div>
                                            <div class="plus-btn">
                                                <i class="fa-solid fa-plus"></i>
                                            </div>
                                        </div>
                                        <h3><a href={singleTeam.profile_url}>{singleTeam.name}</a></h3>
                                        <p class="text">{singleTeam.designation}</p>
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