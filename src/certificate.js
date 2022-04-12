import React from "react";
import javascriptcource from './images/javascriptcource.png';
import Devops from './images/Devops.jpg';
import Cisco from './images/Cisco.jpg';
//import sih from './images/SIH.jpg';

function Certificate() {
    return (
        <>
            <div>
            < section className="colorlib-experience" data-section="certificate">
                    <div className="colorlib-narrow-content">
                        <div className="row">
                            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                                <h2 className="colorlib-heading animate-box">Certificates</h2>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 animate-box" data-animate-effect="fadeInLeft" >
                                <div className="certificate" style={{ backgroundImage: `url(${javascriptcource})` }}>
                                </div>
                            </div>
                            <div className="col-md-6 animate-box" data-animate-effect="fadeInLeft" >
                                <div className="certificate" style={{ backgroundImage: `url(${Devops})` }}>
                                </div>
                            </div>
                            <div className="col-md-6 animate-box" data-animate-effect="fadeInLeft" >
                                <div className="certificate" style={{ backgroundImage: `url(${Cisco})` }}>
                                </div>
                            </div>
                           
                           
                        </div>
                    </div>
                </ section>
            </div>
        </>
    );
}

export default Certificate;