import React from 'react'
import Container from '@material-ui/core/Container';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { makeStyles } from '@material-ui/core/styles';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";

function home() {
    var settings = {
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    const styles_home = makeStyles((theme) => ({
        root: {
            flexGrow: 1,
        },
        paper: {
            padding: theme.spacing(2),
            textAlign: 'center',
            color: theme.palette.text.secondary,
        },
    }));
    const classes = styles_home();
    return (
        <div>
            <Container>
                <table className="Home_1">
                    <tr>
                        <td><img src="/images/Home1.png" alt="Home 1"></img></td>
                        <td className="home1_link">
                            <h3 className="home1">
                                <sapn>The Groundwork Of All Happiness</sapn><br />
                                <sapn> Is Good Health</sapn>
                            </h3>
                            <p className="home1_link"><b>The best Investment You can Ever Make is in Your Own Health</b></p>
                        </td>
                    </tr>
                </table>
            </Container>
            <div className="home_slider">
                <Container>
                    <div>
                        <h1 className="home2_heading">Our Focus</h1>
                    </div>
                    {/* <Slider {...settings}>

                        <a href="Doctors" className="home_slider_link">
                            <div className="contact-info-box text-center mb-30 slider_height">
                                <div className="contact-box-icon">
                                    <center>
                                        <img src="img/icon/doctor.png" width="45px" style={{ paddingTop: "10px" }}></img>
                                    </center>
                                </div>
                                <div className="contact-info-content">
                                    <h5 className="home_slider_link_h5">Doctors Details</h5>
                                    <p>
                                        A doctor is tasked with interacting with patients, diagnosing medical problems and successfully treating illness or injury.
                                    </p>
                                </div>
                            </div>
                        </a>
                        <a href="Hospital" className="home_slider_link">
                            <div className="contact-info-box text-center mb-30 slider_height">
                                <div className="contact-box-icon">
                                    <center>
                                        <img src="img/icon/hospital.png" width="45px" style={{ paddingTop: "10px" }}></img>
                                    </center>
                                </div>
                                <div className="contact-info-content">
                                    <h5 className="home_slider_link_h5">Hospital Details</h5>
                                    <p>
                                        A hospital is a health care institution providing patient treatment with specialized medical and nursing staff and medical equipment.
                                    </p>
                                </div>
                            </div>
                        </a>
                        <a href="Ambulance_Details" className="home_slider_link">
                            <div className="contact-info-box text-center mb-30 slider_height">
                                <div className="contact-box-icon">
                                    <center>
                                        <img src="img/icon/ambulance.png" width="45px" style={{ paddingTop: "10px" }}></img>
                                    </center>
                                </div>
                                <div className="contact-info-content">
                                    <h5 className="home_slider_link_h5">Ambulance Details</h5>
                                    <p>
                                        They can provide first aid, emergency care, various medicines and life support, and carry patients to hospital.
                                    </p>
                                </div>
                            </div>
                        </a>
                        <a href="Camping_Details" className="home_slider_link">
                            <div className="contact-info-box text-center mb-30 slider_height">
                                <div className="contact-box-icon">
                                    <center>
                                        <img src="img/icon/Camping.png" width="45px" style={{ paddingTop: "10px" }}></img>
                                    </center>
                                </div>
                                <div className="contact-info-content">
                                    <h5 className="home_slider_link_h5">Camping Details</h5>
                                    <p>
                                        Medical camps are conducted by health professionals to carry out a limited health intervention amongst the underprivileged community.
                                    </p>
                                </div>
                            </div>
                        </a>
                        <a href="technology" className="home_slider_link">
                            <div className="contact-info-box text-center mb-30 slider_height">
                                <div className="contact-box-icon">
                                    <center>
                                        <img src="img/icon/nanotechnology.png" width="45px" style={{ paddingTop: "10px" }}></img>
                                    </center>
                                </div>
                                <div className="contact-info-content">
                                    <h5 className="home_slider_link_h5">Technology Details</h5>
                                    <p>
                                        Application of science to develop solutions to health problems or issues
                                    </p>
                                </div>
                            </div>
                        </a>
                        <a href="facility" className="home_slider_link">
                            <div className="contact-info-box text-center mb-30 slider_height">
                                <div className="contact-box-icon">
                                    <center>
                                        <img src="img/icon/amenities.png" width="45px" style={{ paddingTop: "10px" }}></img>
                                    </center>
                                </div>
                                <div className="contact-info-content">
                                    <h5 className="home_slider_link_h5">Facility Details</h5>
                                    <p>
                                        Health facilities play a very significant role in the mitigation of disasters because of their particular function in treating the injured and handling outbreaks of disease.
                                    </p>
                                </div>
                            </div>
                        </a>
                        <a href="#" className="home_slider_link">
                            <div className="contact-info-box text-center mb-30 slider_height">
                                <div className="contact-box-icon">
                                    <center>
                                        <img src="img/icon/surgery-room.png" width="45px" style={{ paddingTop: "10px" }}></img>
                                    </center>
                                </div>
                                <div className="contact-info-content">
                                    <h5 className="home_slider_link_h5">Operation History Details</h5>
                                    <p>
                                        When a patient has an operation, a surgeon cuts open their body in order to remove, replace, or repair a diseased or damaged part.
                                    </p>
                                </div>
                            </div>
                        </a>
                        <a href="cleaning" className="home_slider_link">
                            <div className="contact-info-box text-center mb-30 slider_height">
                                <div className="contact-box-icon">
                                    <center>
                                        <img src="img/icon/technical-support.png" width="45px" style={{ paddingTop: "10px" }}></img>
                                    </center>
                                </div>
                                <div className="contact-info-content">
                                    <h5 className="home_slider_link_h5">Cleaning Company Details</h5>
                                    <p>
                                        Janitorial services aim to keep and maintain any kind of office clean and healthy.
                                    </p>
                                </div>
                            </div>
                        </a>
                        <a href="check1" className="home_slider_link">
                            <div className="contact-info-box text-center mb-30 slider_height">
                                <div className="contact-box-icon">
                                    <center>
                                        <img src="img/icon/pharmacy.png" width="45px" style={{ paddingTop: "10px" }}></img>
                                    </center>
                                </div>
                                <div className="contact-info-content">
                                    <h5 className="home_slider_link_h5">Pharmacy Details</h5>
                                    <p>
                                        Pharmacy is the clinical health science that links medical science with chemistry and it is charged with the discovery, production, disposal, safe and effective use, and control of medications and drugs.
                                    </p>
                                </div>
                            </div>
                        </a>
                        <a href="#" className="home_slider_link">
                            <div className="contact-info-box text-center mb-30 slider_height">
                                <div className="contact-box-icon">
                                    <center>
                                        <img src="img/icon/coronavirus.png" width="45px" style={{ paddingTop: "10px" }}></img>
                                    </center>
                                </div>
                                <div className="contact-info-content">
                                    <h5 className="home_slider_link_h5">Disease spread information & Guidance</h5>
                                    <p>
                                        Provide informations on active diseases and precautions.
                                    </p>
                                </div>
                            </div>
                        </a>
                        <a href="BloodBank_Details" className="home_slider_link">
                            <div className="contact-info-box text-center mb-30 slider_height">
                                <div className="contact-box-icon">
                                    <center>
                                        <img src="img/icon/blood-bank.png" width="45px" style={{ paddingTop: "10px" }}></img>
                                    </center>
                                </div>
                                <div className="contact-info-content">
                                    <h5 className="home_slider_link_h5">Blood Bank Details</h5>
                                    <p>
                                        A place where blood is collected from donors, typed, separated into components, stored, and prepared for transfusion to recipients.
                                    </p>
                                </div>
                            </div>
                        </a>
                        <a href="#" className="home_slider_link">
                            <div className="contact-info-box text-center mb-30 slider_height">
                                <div className="contact-box-icon">
                                    <center>
                                        <img src="img/icon/microscope.png" width="45px" style={{ paddingTop: "10px" }}></img>
                                    </center>
                                </div>
                                <div className="contact-info-content">
                                    <h5 className="home_slider_link_h5">laboratory Details</h5>
                                    <p>
                                        A medical laboratory or clinical laboratory is a laboratory where tests are carried out on clinical specimens to obtain information about the health of a patient to aid in diagnosis, treatment, and prevention of disease.
                                    </p>
                                </div>
                            </div>
                        </a>
                    </Slider> */}
                </Container>
            </div>
            <Container>
                <table className="Home_1">
                    <tr>
                        <td className="home4_link">
                            <h1 className="home4_left">
                                <sapn>The Greatest Wealth Is Health</sapn><br />
                                <sapn> </sapn>
                                <img src="/images/logo.png" className="home4_img"></img>
                            </h1>
                        </td>
                        <td className="home4_link">
                            <p className="home4_right"><b> Health care provider is an individual health professional or a health facility organization licensed to provide health care diagnosis and treatment services including medication, surgery and medical devices. Health care providers often receive payments for their services rendered from health insurance providers.</b></p>
                        </td>
                    </tr>
                </table>
            </Container>

        </div>
    )
}

export default home