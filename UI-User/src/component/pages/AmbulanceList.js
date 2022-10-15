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
    const [ambulance1, setAmbulance] = useState([]);

    
    const ambulance = 
    [
        {
            "_id": "6349a1d6283af13989d67f49",
            "VNo": "PA-8970",
            "VChassisno": "2098-8956-7845",
            "DName": "Kasun Perera",
            "DLicence": "200014578956",
            "DContactno": "200014578956",
            "Description": "Van tyed vehicle with all the argent facilities sdsdsd",
            "CDate": "15/10/2022",
            "CTime": "15/10/2022"
        },
        {
            "_id": "6349a64a283af13989d67f54",
            "VNo": "SA-9080",
            "VChassisno": "789-789-456",
            "DName": "Saman Perera",
            "DLicence": "789456123",
            "DContactno": "789456123",
            "Description": "All in One. All with All All aasasd"
        },
        {
            "_id": "6349bd6c2b40e1747543d036",
            "VNo": "Chanul Gunathilake",
            "VChassisno": "chanuldeeraka@gmail.com",
            "DName": "$2b$10$V8dyNqnPnmSbuFBTeJEIye4f6/F2WYoKADHedhRZpsLRDm6JzCUaO",
            "DLicence": "Student",
            "DContactno": "Year 3 Semester 2",
            "Description": "Year 3 Semester 2",
            "CTime": "Tue May 12 2020 01:44:14 GMT+0530 (India Standard Time)",
            "CDate": "Tue May 12 2020 01:44:14 GMT+0530 (India Standard Time)"
        }
    ];

    // const getRequest = () => {
    //     axios
    //         .get('http://localhost:4000/ambulance')
    //         .then(response => {
    //             setAmbulance(response.data);

    //         });
    // }

    // useEffect(() => {
    //     getRequest()
    // }, [ambulance]);

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
                                
                            <div className="row justify-content-center"> 
                               
                                {ambulance.filter((val) => {
                                        if (searchTerm == "") {
                                            return val;
                                        } else if (val.VNo.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())) {
                                            return val;
                                        }
                                    }).map((item) => (
                                        

                                        <div className="col-3">
                                            <div className="ui link cards">
                                            <div className="card">
                                                <div className="image m-5">
                                                <img src="https://img.freepik.com/free-vector/emergency-ambulance-white-background_1308-101723.jpg?t=st=1662725835~exp=1662726435~hmac=a88d1ef18fb0f02d3b9f6b2ab6f910969b7fb9e728bccd9fa80271b5ac8f49af" />
                                                </div>
                                                <div className="content">
                                                <div className="header">Vehicle No :{item.VNo}</div>

                                                <div className="meta font-weight-bold">
                                                    <p>Vehicle Chassis No</p>
                                                </div>
                                                <div className="description">
                                                    {item.VChassisno}
                                                </div>

                                                <div className="meta font-weight-bold">
                                                    <p>Driver Name</p>
                                                </div>
                                                <div className="description">
                                                    {item.DName}
                                                </div>

                                                </div>
                                                <div className="extra content">
                                                <span className="right floated">Registered on {item.CDate}</span>
                                                </div>
                                            </div>
                                            </div>   
                                            </div>                   
                        ))}                                        
                        
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

export default AmbulanceList
