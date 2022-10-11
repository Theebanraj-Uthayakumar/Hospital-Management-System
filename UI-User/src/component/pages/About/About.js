import React from 'react';


import './About.css'
import  about1   from './about1.jpg'
import  about2   from './about2.jpg'




const About = () => {
    return (
        <div className=" ">
              <div className="container mt-5 bg-light py-5">
                  <div className="row">
                  <div className="col-md-6 p-3">
                  <img src={about2} height="500px" width="100%" className="" alt="" />
                      </div>

                      <div className="col-md-6">
                          <h2 className="fw-bold">WELLCOME TO <span className="text-info">CARDIAC DENTAL CARE</span> </h2>
                          <p className=" "><span className="fs-5">The Dentistry Department located at CARDIAC DENTAL CARE is a centre for dental care that is committed to quality and excellent patient service. We have highly and experienced dental surgeons to improve your dental health by providing a full range of dental services.</span><br/><br/>Our beliefs and values dictate our professional culture, and thus our professional behaviour.
                            We Believe That our professionalism and dental services will enrich people's lives & health
                            That creativity & quality in our concepts, care and services are of paramount importance
                            The values that guide us are</p>
                          <div className="row">
                              <div className="col-md-4 col-12">
                                  <img src={about1} height="200" className="img-fluid" alt="" />
                              </div>
                              <div className="col-md-4 col-12">
                                  <img src={about2} height="200" className="img-fluid" alt="" />
                              </div>
                             
                          </div>
                          <br/>
                          <button>click this</button>
                      </div>
                     
                  </div>
              </div>

            
              
          </div>

          

    );
};

export default About;