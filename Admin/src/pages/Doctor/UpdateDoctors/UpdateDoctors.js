import React, { useState, useEffect } from "react"
import MetaTags from 'react-meta-tags';

import {
  Card,
  CardBody,
  Col,
  Row,
  Container,
} from "reactstrap"

import { Button } from "reactstrap"

//Import Breadcrumb
import Breadcrumbs from "../../../components/Common/Breadcrumb"
import { useHistory } from "react-router-dom";

const UpdateDoctors = () => {

  const [name, setName] = useState("");
  const [specialization, setSpecialization] = useState("");
  const [slnc, setSlnc] = useState("");
  const [experiance, setExperiance] = useState("");
  const [gender, setGender] = useState("");
  const [cposistion, setCposistion] = useState("");
  const [whospital, setWhospital] = useState("");
  const [whistory, setWhistory] = useState("");

  const DoctorID = window.sessionStorage.getItem("DoctorID");


  const [doctors, setDoctors] = useState([]);

  const getRequest = () => {
    fetch(`http://localhost:4000/api/v1/doctor/${DoctorID}`)
    .then(response => response.json())
    .then(data => setDoctors(data))
    .then(data => console.log(data))
  };

  useEffect(() => {
    getRequest();
  });

  const history = useHistory();

  const UpdateDoctor =()=>{
      const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          DName: name ? name : doctors.DName,
          Speci: specialization ? specialization : doctors.Speci,
          SLNC: slnc ? slnc : doctors.SLNC,
          Exper: experiance ? experiance : doctors.Exper,
          Gender: gender ? gender : doctors.Gender,
          CPosistion: cposistion ? cposistion : doctors.CPosistion,
          WHospital: whospital ? whospital : doctors.WHospital,
          WHistory: whistory ? whistory : doctors.WHistory
        })
      };

      fetch(`http://localhost:4000/api/v1/doctor/${DoctorID}`, requestOptions)
      .then(async response => {
        alert("Your data has been successfully updated...")
        history.push("/getAllDoctors");
      }).catch((err)=>{
        console.log(err);
        alert("Sorry, Something Error...")
      })
  }

  return (
    <React.Fragment>
      <div className="page-content">
        <MetaTags>
          <title>Add New Doctor | Veltrix - Responsive Bootstrap 5 Admin Dashboard</title>
        </MetaTags>
        <Container fluid={true}>
          <Breadcrumbs maintitle="Veltrix" title="Form" breadcrumbItem="Add New Doctor" />

          <Row>
            <Col>
              <Card>
                <CardBody>

                  <Row className="mb-3">
                    <label
                      htmlFor="example-text-input"
                      className="col-md-2 col-form-label"
                    >
                      Full Name
                    </label>
                    <div className="col-md-10">
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Full Name"
                        defaultValue={doctors.DName}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                  </Row>
                  <Row className="mb-3">
                    <label
                      htmlFor="example-text-input"
                      className="col-md-2 col-form-label"
                    >
                      Specializations
                    </label>
                    <div className="col-md-10">
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Specializations"
                        defaultValue={doctors.Speci}
                        onChange={(e) => setSpecialization(e.target.value)}
                      />
                    </div>
                  </Row>
                  <Row className="mb-3">
                    <label
                      htmlFor="example-text-input"
                      className="col-md-2 col-form-label"
                    >
                      SLMC
                    </label>
                    <div className="col-md-10">
                      <input
                        className="form-control"
                        type="text"
                        placeholder="SLMC Number"
                        defaultValue={doctors.SLNC}
                        onChange={(e) => setSlnc(e.target.value)}
                      />
                    </div>
                  </Row>
                  <Row className="mb-3">
                    <label className="col-md-2 col-form-label">Gender</label>
                    <div className="col-md-10">
                      <select className="form-control" 
                        value={doctors.Gender}
                        onChange={(e) => setGender(e.target.value)}
                      >
                        {/* <option>Select</option> */}
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                      </select>
                    </div>
                  </Row>
                  <Row className="mb-3">
                    <label
                      htmlFor="example-text-input"
                      className="col-md-2 col-form-label"
                    >
                      Experience
                    </label>
                    <div className="col-md-10">
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Experience"
                        defaultValue={doctors.Exper}
                        onChange={(e) => setExperiance(e.target.value)}
                      />
                    </div>
                  </Row>
                  <Row className="mb-3">
                    <label
                      htmlFor="example-text-input"
                      className="col-md-2 col-form-label"
                    >
                      Current Position
                    </label>
                    <div className="col-md-10">
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Current Position"
                        defaultValue={doctors.CPosistion}
                        onChange={(e) => setCposistion(e.target.value)}
                      />
                    </div>
                  </Row>
                  <Row className="mb-3">
                    <label
                      htmlFor="example-text-input"
                      className="col-md-2 col-form-label"
                    >
                      Working Hospital
                    </label>
                    <div className="col-md-10">
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Working Hospital"
                        defaultValue={doctors.WHospital}
                        onChange={(e) => setWhospital(e.target.value)}
                      />
                    </div>
                  </Row>
                  <Row className="mb-3">
                    <label
                      htmlFor="example-text-input"
                      className="col-md-2 col-form-label"
                    >
                      Working History
                    </label>
                    <div className="col-md-10">
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Working History"
                        defaultValue={doctors.WHistory}
                        onChange={(e) => setWhistory(e.target.value)}
                      />
                    </div>
                  </Row>
                  <Row className="mb-3">
                    <label
                      htmlFor="example-text-input"
                      className="col-md-2 col-form-label"
                    >
                      {" "}
                    </label>
                    <div className="col-md-10">
                      <center>
                    <Button
                      block
                      color="primary"
                      outline
                      onClick={UpdateDoctor}
                    >
                      Update Now
                    </Button>
                    </center>
                    </div>
                  </Row>
                </CardBody>
                
              </Card>
            </Col>
          </Row>

        </Container>
      </div>
    </React.Fragment>
  )
}

export default UpdateDoctors
