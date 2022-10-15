import React, { useState, useEffect } from "react";
import Container from '@material-ui/core/Container';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import GrainIcon from '@material-ui/icons/Grain';
import Col from 'react-bootstrap/esm/Col';
import Form from 'react-bootstrap/Form';
import Button from '@restart/ui/esm/Button';
import Row from 'react-bootstrap/esm/Row';
import Pagination from 'react-bootstrap/Pagination'
import axios from "axios";
import { useHistory } from "react-router-dom";
import Modal from 'react-bootstrap/Modal';
import AmbulanceModal from "./AmbulanceModal/AmbulanceModal";

const useStyles = makeStyles((theme) => ({
    link: {
        display: 'flex',
    },
    icon: {
        marginRight: theme.spacing(0.5),
        width: 20,
        height: 20,
    },
}));

function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
}

function AmbulanceList() {
    const classes = useStyles();
    const [searchTerm, setSearchTerm] = useState("");
    const [ambulance, setAmbulance] = useState([]);
    const [modalShow, setModalShow] = React.useState(false);

    const history = useHistory();

    const getAllAmbulanceData = (ID) =>{
        setModalShow(true)
        window.sessionStorage.setItem("AmbulanceID", ID);
    }

    const getRequest = () => {
        axios
            .get('http://localhost:4000/api/v1/ambulance/')
            .then(response => {
                setAmbulance(response.data);

            });
    }

    useEffect(() => {
        getRequest()
    }, [ambulance]);

    return (
        <div>
            <Container>
                <main>                    
                    <div></div>
                    <div className="shop-area gray-bg pt-10 pb-100">
                        <div className="custom-container-two">
                            <Breadcrumbs aria-label="breadcrumb" className="Breadcrumbs">
                                <Link color="inherit" href="/" onClick={handleClick} className={classes.link}>
                                    <HomeIcon className={classes.icon} />
                                    Home
                                </Link>
                                <Typography color="textPrimary" className={classes.link}>
                                    <GrainIcon className={classes.icon} />
                                    Ambulance Details
                                </Typography>
                            </Breadcrumbs>
                           
                            <div>
                            <form >
                                  
                                  <Form.Group as={Row} className="mb-3"controlId="" >
                                  <Col sm={2} className="ambform">
                                          <Form.Control type="text" onChange={(e) => { setSearchTerm(e.target.value) }} />
                                          </Col>
                                      <Col sm={1}>
                                      <Button className="searchbtn">Search</Button>
                                       </Col>
                                   </Form.Group>
                                 
                                  </form>
                            </div>
                                
                            <div className="row"> 
                               
                                {ambulance.filter((val) => {
                                        if (searchTerm == "") {
                                            return val;
                                        } else if (val.VNo.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())) {
                                            return val;
                                        }
                                    }).map((item) => (
                                        

                                        <div className="col-3 mt-5">
                                            <div className="ui link cards">
                                            <div className="card"  onClick={() => getAllAmbulanceData(item._id)}>
                                                <div className="image m-5">
                                                <img src="https://img.freepik.com/free-vector/emergency-ambulance-white-background_1308-101723.jpg?t=st=1662725835~exp=1662726435~hmac=a88d1ef18fb0f02d3b9f6b2ab6f910969b7fb9e728bccd9fa80271b5ac8f49af" />
                                                </div>
                                                <div className="content">
                                                <div className="header">Vehicle No :  {item.VNo}</div>


                                                <div className="meta font-weight-bold">
                                                    <br></br>
                                                    <h5>Driver Name</h5>
                                                </div>
                                                <div className="description">
                                                    {item.DName}
                                                </div>

                                                <div className="meta font-weight-bold">
                                                    <br></br>
                                                    <h5>Driver Contact No</h5>
                                                </div>
                                                <div className="description">
                                                    {item.DContactno}
                                                </div>

                                                </div>
                                                <div className="extra content">
                                                <span className="right floated">Registered on {item.CDate}</span>
                                                </div>
                                            </div>
                                            </div>   
                                            </div>                   
                        ))}                                        
                        
                        <AmbulanceModal
                            show={modalShow}
                            onHide={() => setModalShow(false)}
                        />
{/* 
                        <div className="pagination-wrap" style={{width:'90%', margin:'auto'}}>
                                        <ul>
                                            <li className="prev">
                                                <a href="#">
                                                    <i className="fas fa-long-arrow-alt-left" /> Prev
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">1</a>
                                            </li>
                                            <li className="active">
                                                <a href="#">2</a>
                                            </li>
                                            <li>
                                                <a href="#">3</a>
                                            </li>
                                            <li>
                                                <a href="#">4</a>
                                            </li>
                                            <li>
                                                <a href="#">...</a>
                                            </li>
                                            <li>
                                                <a href="#">10</a>
                                            </li>
                                            <li className="next">
                                                <a href="#">
                                                    Next <i className="fas fa-long-arrow-alt-right" />
                                                </a>
                                            </li>
                                        </ul>
                                    </div> */}
                                    

                                </div>
                            </div>
                        </div>
                    {/* shop-area-end */}
                </main>
            </Container>
        </div>
    )
}

export default AmbulanceList
