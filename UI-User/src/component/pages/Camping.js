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
import CampingModel from "./CampingModel";

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

function Camping() {
    const classes = useStyles();
    const [searchTerm, setSearchTerm] = useState("");
    const [camping, setCamping] = useState([]);
    const [modalShow, setModalShow] = React.useState(false);

    const history = useHistory();

    const getAllCampingData = (ID) =>{
        setModalShow(true)
        window.sessionStorage.setItem("CampingID", ID);
    }

    const getRequest = () => {
        axios
            .get('http://localhost:4000/api/v1/camping/')
            .then(response => {
                setCamping(response.data);

            });
    }

    useEffect(() => {
        getRequest()
    }, [camping]);

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
                                    Camping Details
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
                               
                                {camping.filter((val) => {
                                        if (searchTerm == "") {
                                            return val;
                                        } else if (val.HName.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())) {
                                            return val;
                                        }
                                    }).map((item) => (
                                        

                                        <div className="col-3 mt-5">
                                            <div className="ui link cards">
                                            <div className="card"  onClick={() => getAllCampingData(item._id)}>
                                                <div className="image">
                                                <img src="https://ichef.bbci.co.uk/news/976/mcs/media/images/78181000/jpg/_78181308_dsc_0151.jpg" />
                                                </div>
                                                <div className="content">
                                                <div className="header">Camping Name :{item.HName}</div>

                                                <div className="meta font-weight-bold">
                                                    <p>Time</p>
                                                </div>
                                                <div className="description">
                                                    {item.Time}
                                                </div>
                                                
                                                <div className="meta font-weight-bold">
                                                    <p>Venue</p>
                                                </div>
                                                <div className="description">
                                                    {item.Venue}
                                                </div>

                                                </div>
                                                <div className="extra content">
                                                <span className="right floated">Date {item.Date}</span>
                                                </div>
                                            </div>
                                            </div>   
                                            </div>                   
                        ))}                                        
                        
                        <CampingModel
                            show={modalShow}
                            onHide={() => setModalShow(false)}
                        />

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
                                    </div>
                                    

                                </div>
                            </div>
                        </div>
                    {/* shop-area-end */}
                </main>
            </Container>
        </div>
    )
}

export default Camping