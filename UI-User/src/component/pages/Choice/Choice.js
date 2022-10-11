import React from 'react';
import './Choice.css'
import { faStethoscope,faAmbulance,faHospital,faServer} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const team =  <FontAwesomeIcon icon={faStethoscope} /> ;
const serviceLogo =  <FontAwesomeIcon icon={faAmbulance} /> ;
const appoinDate =  <FontAwesomeIcon icon={faServer} /> ;
const hospital =  <FontAwesomeIcon icon={faHospital} /> ;

const Choice = () => {
    return (
        <div className="choice-us">
        <div className=" d-flex justify-content-center container ">
             <div className="col-md-8 col-12   px-3 bg-light m-4">
                  <h2 className="home-service-texts fw-bold text-center my-3 ">Why <span>Choice Us</span></h2>

                  <div className="row pt-5">

                      <div className="col-md-6 col-12 d-flex py-3">
                          <h1 className="fx-1">{hospital}</h1>
                          <div className="ps-3">
                              <h5 className="fw-bold">Best Hospital</h5>
                              <p className="text">Our service center are best of all Other service center.Our dental care No 1 of the city</p>
                          </div>
                      </div>
                      <div className="col-md-6 col-12 d-flex py-3">
                          <h1 className="fx-1">{serviceLogo}</h1>
                          <div className="ps-3">
                              <h5 className="fw-bold">Best Transport</h5>
                              <p className="text">Our transport system is the best of all. We provide care to one and a half patients with care. </p>
                          </div>
                      </div>
                      <div className="col-md-6 col-12 d-flex py-3">
                          <h1 className="fx-1">{team}</h1>
                          <div className="ps-3">
                              <h5 className="fw-bold">Best Professtional</h5>
                              <p className="text">Professional services generally describe businesses that offer services and expertise instead of a manufactured good. PS firms often provide vital services</p>
                          </div>
                      </div>
                      <div className="col-md-6 col-12 d-flex py-3">
                          <h1 className="fx-1">{appoinDate}</h1>
                          <div className="ps-3">
                              <h5 className="fw-bold">Low Cost Service</h5>
                              <p className="text">We provide good service at low cost</p>
                          </div>
                      </div>

                  </div>
             </div>
        </div>
        </div>
    );
};

export default Choice;