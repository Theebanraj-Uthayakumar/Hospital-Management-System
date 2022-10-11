import React, { useEffect, useState } from 'react';
import './Home.css'
import About from '../About/About';

import { faStethoscope,faAmbulance,faCalendarCheck} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Choice from '../Choice/Choice';
import { Link } from 'react-router-dom';


const team =  <FontAwesomeIcon icon={faStethoscope} /> ;
const serviceLogo =  <FontAwesomeIcon icon={faAmbulance} /> ;
const appoinDate =  <FontAwesomeIcon icon={faCalendarCheck} /> ;



const Home = () => {
    const [service, setService] = useState([]);
    useEffect(() => {
        fetch('./service.JSON')
            .then(res => res.json())
            .then(data => setService(data));
    }, [])

    return (
        <div className="home">
            {/* ----------home-header-img----------- */}
            <div className="home-header-img d-flex justify-content-center align-items-center">
                <div className="col-md-6 col-12 home-head">
                
                <h1 className="fw-bold home-header-text">Cardiac Dental Care</h1>
                <p>Our service center are best of all Other service center.Our dental care No 1 of the city</p>
                </div>
           
            </div>

           {/* ---------------service--------------- */}
           <div className="container ">
               <div className="row ">
                   <div className="col-md-4 col-lg-4 col-12 home-team p-4 text-white">
                      <h3>{team} Our Clinec</h3>
                      <span>Our beliefs and values dictate our professional culture, and thus our professional behaviour.
We Believe That our professionalism and dental services will enrich people's lives & health</span>
                      <br/><br/>
                      <Link to="/about"><button type="button" className="btn btn-outline-light btn-sm">Visit</button></Link>
                   </div>

                   <div className="col-md-4 col-lg-4 col-12 home-service p-4 text-white">
                      <h3>{serviceLogo} Our Service</h3>
                      <span>Comprehensive dental care simplifies maintaining a healthy mouth, which will lead to a healthier body in general.  We can treat your teeth and gums without having to refer you to countless specialists.</span>
                      <br/><br/>
                      <Link to="/service"><button type="button" className="btn btn-outline-light btn-sm">Visit</button></Link>
                   </div>


                   <div className="col-md-4 col-lg-4 col-12 home-team p-4 text-white">
                      <h3>{appoinDate} New Patient</h3>
                      <span>Are you looking for information on comprehensive dental care? This dental term is used to describe an all-inclusive way to take care of someone’s oral health. <br/> </span>
                      <br/><br/>
                      <Link to="/contact"><button type="button" className="btn btn-outline-light btn-sm">Visit</button></Link>
                   </div>

               </div>
           </div>

           {/* ----------about------------- */}
          
          <About></About>

          {/* ----------about------------- */}
         
          {/* --------service section----------- */}
            
            <div className="my-5">
               <div className="container">
                   <h2 className="text-center home-service-texts fw-bold">
                       Our Service
                   </h2>

                <div className="row">
                  
                  {
                      service.map(service => 
                      <div service={service} key={service.id} className="col-md-4 mt-5">
                      <div className="p-2 border ser-img">
                         <img src={service.service_img1} height="250px" width="100%"  alt="" /> 
                      </div> 
                    <h4 className="fw-bold mt-2">{service.id}.{service.serviceName}</h4>
                    </div>
                    )
                  }
                    
                 </div>   
               </div>
            </div>

         {/* ----------------why choice us --------*/}
          <Choice></Choice>
        {/* ---------------------- */}
        </div>

    );
};

export default Home;