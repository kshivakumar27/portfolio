import React from "react";
import url from './images/url.jpg';
import bms from './images/bookmyshow.jpg';
import swipe from './images/swipe.png';
import hire from './images/hiring.jpg';
import smartcity from './images/smartcity.jpg';
import spid1 from './images/spid1.jpg';

function Projects() {
    return (
        <>
            <div>
                <section className="colorlib-work" data-section="projects">
                    <div className="colorlib-narrow-content">
                        <div className="row">
                            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                                <span className="heading-meta">My Work</span>
                                <h2 className="colorlib-heading animate-box">Recent Projects</h2>
                            </div>
                        </div>
                        






                            <div className="row">
                            <div className="col-md-4 animate-box" data-animate-effect="fadeInLeft">
                                <div className="project" style={{ backgroundImage: `url(${bms})` }}>
                                    <div className="desc">
                                        <div className="con">
                                            <h3><a>BookMyTrain tickets</a></h3>
                                            <span>A Full Stack Website for booking a Train ticket.<br/>Here the user will book a movie train after logging into his account and he can view his tickets.</span>
                                            <h3 className="mt-2"><a>Tech used</a></h3>
                                            <span>Spring boot/Java<br/>Angular<br/>Mysql</span>
                                            <p className="icon">
                                                <span><a href="" target="_blank">Website</a></span>
                                                <span className="float-right"><a href="" target="_blank">View Code</a></span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                           

                            <div className="col-md-4 animate-box" data-animate-effect="fadeInRight">
                                <div className="project" style={{ backgroundImage: `url(${smartcity})`}}>
                                    <div className="desc">
                                        <div className="con">
                                            <h3><a>Smart City</a></h3>
                                            <span>A Full Stack Website for Smart City (Django web app).<br/>Here i have done Django(python) full stack web app with postgresql.<br/></span>
                                            <h3 className="mt-2"><a>Tech used</a></h3>
                                            <span>Django<br/>Postgresql<br/>Pgadmin</span>
                                            <p className="icon">
                                                <span><a href="" target="_blank">Website</a></span>
                                                <span className="float-right"><a href="" target="_blank">View Code</a></span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 animate-box" data-animate-effect="fadeInRight">
                                <div className="project" style={{ backgroundImage: `url(${spid1})`}}>
                                    <div className="desc">
                                        <div className="con">
                                            <h3><a>Smart City</a></h3>
                                            <span>Random password Generator<br/>Here i have done random project generating using python and javascript<br/></span>
                                            <h3 className="mt-2"><a>Tech used</a></h3>
                                            <span>Python<br/>Javascript</span>
                                            <p className="icon">
                                                <span><a href="" target="_blank">Website</a></span>
                                                <span className="float-right"><a href="" target="_blank">View Code</a></span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4 animate-box" data-animate-effect="fadeInRight">
                                <div className="project" style={{ backgroundImage: `url(${url})`}}>
                                    <div className="desc">
                                        <div className="con">
                                            <h3><a>Smart City</a></h3>
                                            <span>A Full Stack Website for Smart City (Django web app).<br/>Here i have done Django(python) full stack web app with postgresql.<br/></span>
                                            <h3 className="mt-2"><a>Tech used</a></h3>
                                            <span>Django<br/>Postgresql<br/>Pgadmin</span>
                                            <p className="icon">
                                                <span><a href="" target="_blank">Website</a></span>
                                                <span className="float-right"><a href="" target="_blank">View Code</a></span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 animate-box" data-animate-effect="fadeInLeft">
                                <div className="project" style={{ backgroundImage: `url(${hire})` }}>
                                    <div className="desc">
                                        <div className="con">
                                            <h3><a>Student Placements</a></h3>
                                            <span>A Full Stack Website for Student placement management.<br/>Web app will manage student placement activities.</span>
                                            <h3 className="mt-2"><a>Tech used</a></h3>
                                            <span>Angular<br/>Spring boot<br/>Mysql</span>
                                            <p className="icon">
                                                <span><a href="" target="_blank">Website</a></span>
                                                <span className="float-right"><a href="" target="_blank">View Code</a></span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 animate-box"  data-animate-effect="fadeInRight">
                                <div className="project" style={{ backgroundImage: `url(${swipe})` }}>
                                    <div className="desc">
                                        <div className="con">
                                            <h3><a>Employee Management</a></h3>
                                            <span>A Full Stack Website for Employee management.<br/>Here the user will finds the Details.<br/>Manager will post the tasks and he can see the list of tasks assigned.</span>
                                            <h3 className="mt-2"><a>Tech used</a></h3>
                                            <span>Javascript<br/>PHP<br/>JQuery<br/>Bootstrap<br/>CSS<br/>Html</span>
                                            <p className="icon">
                                                <span><a href="" target="_blank">Website</a></span>
                                                <span className="float-right"><a href="" target="_blank">View Code</a></span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Projects;