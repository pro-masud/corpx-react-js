import React from 'react'
import SectionTitle from '../utils/SectionTitle'
import projects from '../../data/projects'

const Project = () => {
  return (
    <>
    <section className="project-section section-padding bg-color3 fix">
        <div className="container">
            <div className="project-wrapper style3">
                <SectionTitle title="Professionals Using Our Business Solutions" subTitle="Our Portfolio" mainClass='mxw-565' colorClass="text-white" />
                {projects.map((singleProject, index) => (
                    <div className="project-item style3" key={index}>
                        <div className="row g-4 d-flex align-items-center flex-wrap">
                            <div className="col-md-6">
                                <h3 className="project-name">{singleProject.title}</h3>
                            </div>
                            <div className="col-md-3">
                                <div className="hover-image position-absolute overflow-hidden rounded-20">
                                    <div className="team-image">
                                        <img src={singleProject.image} className="img-fluid w-100" alt="thumb" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 d-flex justify-content-end">
                                <div className="project-link">
                                    <a href={singleProject.link}>{singleProject.linkText}</a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
    </>
  )
}

export default Project