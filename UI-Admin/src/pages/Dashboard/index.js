import PropTypes from 'prop-types'
import React,{useEffect, useState} from "react"
import MetaTags from 'react-meta-tags';
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
} from "reactstrap"
import { Link } from "react-router-dom"

// Custom Scrollbar
import SimpleBar from "simplebar-react";

// import images
import doctor from "../../assets/images/services-icon/doctor.png";
import operation from "../../assets/images/services-icon/operation.png";
import ambulance from "../../assets/images/services-icon/ambulance.png";
import camping from "../../assets/images/services-icon/camping.png";

import "chartist/dist/scss/chartist.scss";

//i18n
import { withTranslation } from "react-i18next"

const Dashboard = props => {
  const [getDoctors, setGetDoctors] = useState(0)
  const [getOperation, setGetOperation] = useState(0)
  const [getAmpulance, setGetAmpulance] = useState(0)
  const [getCamping, setGetCamping] = useState(0)

  const doctorsAPICall = () =>{
    fetch("http://localhost:4000/api/v1/doctor")
    .then(response => response.json())
    .then(data => setGetDoctors(data.length))
    .then(data => console.log(data))
  }

  const operationAPICall = () =>{
    fetch("http://localhost:4000/api/v1/operation")
    .then(response => response.json())
    .then(data => setGetOperation(data.length))
    .then(data => console.log(data))
  }

  const ampulanceAPICall = () =>{
    fetch("http://localhost:4000/api/v1/ambulance")
    .then(response => response.json())
    .then(data => setGetAmpulance(data.length))
    .then(data => console.log(data))
  }

  const campingAPICall = () =>{
    fetch("http://localhost:4000/api/v1/camping")
    .then(response => response.json())
    .then(data => setGetCamping(data.length))
    .then(data => console.log(data))
  }

  useEffect(()=>{
    doctorsAPICall();
    operationAPICall();
    ampulanceAPICall();
    campingAPICall();
  })

  return (
    <React.Fragment>
      <div className="page-content">
        <MetaTags>
          <title>Dashboard | Veltrix - Responsive Bootstrap 5 Admin Dashboard</title>
        </MetaTags>
        <Container fluid>
          <div className="page-title-box">
            <Row className="align-items-center">
              <Col md={8}>
                <h6 className="page-title">Dashboard</h6>
                <ol className="breadcrumb m-0">
                  <li className="breadcrumb-item active">Welcome to Veltrix Dashboard</li>
                </ol>
              </Col>

              {/* <Col md="4">
                <div className="float-end d-none d-md-block">
                  <Dropdown isOpen={menu} toggle={toggle}>
                    <DropdownToggle color="primary" className="btn btn-primary dropdown-toggle waves-effect waves-light">
                      <i className="mdi mdi-cog me-2"></i> Settings
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem tag="a" href="#">Action</DropdownItem>
                      <DropdownItem tag="a" href="#">Another action</DropdownItem>
                      <DropdownItem tag="a" href="#">Something else here</DropdownItem>
                      <DropdownItem divider />
                      <DropdownItem tag="a" href="#">Separated link</DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                </div>
              </Col> */}
            </Row>
          </div>
          <Row>
            <Col xl={3} md={6}>
              <Card className="mini-stat bg-primary text-white">
                <CardBody>
                  <div className="mb-4">
                    <div className="float-start mini-stat-img me-4">
                      <img src={doctor} alt="" />
                    </div>
                    <h5 className="font-size-16 text-uppercase mt-0 text-white-50">
                      Doctors
                    </h5>
                    <h4 className="fw-medium font-size-24">
                      {getDoctors}{" "}
                      <i className="mdi mdi-arrow-up text-success ms-2"></i>
                    </h4>
                  </div>
                  <div className="pt-2">
                    <div className="float-end">
                      <Link to="/getAllDoctors" className="text-white-50">
                        <i className="mdi mdi-arrow-right h5"></i>
                      </Link>
                    </div>
                    <p className="text-white-50 mb-0 mt-1">View Doctors</p>
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col xl={3} md={6}>
              <Card className="mini-stat bg-primary text-white">
                <CardBody>
                  <div className="mb-4">
                    <div className="float-start mini-stat-img me-4">
                      <img src={operation} alt="" />
                    </div>
                    <h5 className="font-size-16 text-uppercase mt-0 text-white-50">
                    Operation
                    </h5>
                    <h4 className="fw-medium font-size-24">
                      {getOperation}{" "}
                      <i className="mdi mdi-arrow-down text-danger ms-2"></i>
                    </h4>
                  </div>
                  <div className="pt-2">
                    <div className="float-end">
                      <Link to="#" className="text-white-50">
                        <i className="mdi mdi-arrow-right h5"></i>
                      </Link>
                    </div>

                    <p className="text-white-50 mb-0 mt-1">Since last month</p>
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col xl={3} md={6}>
              <Card className="mini-stat bg-primary text-white">
                <CardBody>
                  <div className="mb-4">
                    <div className="float-start mini-stat-img me-4">
                      <img src={ambulance} alt="" />
                    </div>
                    <h5 className="font-size-16 text-uppercase mt-0 text-white-50">
                      Ambulance
                    </h5>
                    <h4 className="fw-medium font-size-24">
                      {getAmpulance}{" "}
                      <i className="mdi mdi-arrow-up text-success ms-2"></i>
                    </h4>
                  </div>
                  <div className="pt-2">
                    <div className="float-end">
                      <Link to="#" className="text-white-50">
                        <i className="mdi mdi-arrow-right h5"></i>
                      </Link>
                    </div>

                    <p className="text-white-50 mb-0 mt-1">Since last month</p>
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col xl={3} md={6}>
              <Card className="mini-stat bg-primary text-white">
                <CardBody>
                  <div className="mb-4">
                    <div className="float-start mini-stat-img me-4">
                      <img src={camping} alt="" />
                    </div>
                    <h5 className="font-size-16 text-uppercase mt-0 text-white-50">
                    Camping
                    </h5>
                    <h4 className="fw-medium font-size-24">
                      {getCamping}{" "}
                      <i className="mdi mdi-arrow-up text-success ms-2"></i>
                    </h4>
                  </div>
                  <div className="pt-2">
                    <div className="float-end">
                      <Link to="#" className="text-white-50">
                        <i className="mdi mdi-arrow-right h5"></i>
                      </Link>
                    </div>
                    <p className="text-white-50 mb-0 mt-1">Since last month</p>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>

    </React.Fragment>
  )
}

Dashboard.propTypes = {
  t: PropTypes.any
}

export default withTranslation()(Dashboard)
