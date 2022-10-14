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

const UpdateAmbulance = () => {

  const [VNo, setVNo] = useState("");
  const [VChassisno, setVChassisno] = useState("");
  const [DName, setDName] = useState("");
  const [DLicence, setDLicence] = useState("");
  const [DContactno, setDContactno] = useState("");
  const [Description, setDescription] = useState("");

  const AmbulanceID = window.sessionStorage.getItem("AmbulanceID");


  const [Ambulance, setAmbulance] = useState([]);

  const getRequest = () => {
    fetch(`http://localhost:4000/api/v1/ambulance/${AmbulanceID}`)
    .then(response => response.json())
    .then(data => setAmbulance(data))
    .then(data => console.log(data))
  };

  useEffect(() => {
    getRequest();
  });

  const history = useHistory();

  const UpdateAmbulance =()=>{
      const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          VNo: VNo ? VNo : Ambulance.VNo,
          VChassisno: VChassisno ? VChassisno : Ambulance.VChassisno,
          DName: DName ? DName : Ambulance.DName,
          DLicence: DLicence ? DLicence : Ambulance.DLicence,
          DContactno: DContactno ? DContactno : Ambulance.DContactno,
          Description: Description ? Description : Ambulance.Description
        })
      };

      fetch(`http://localhost:4000/api/v1/ambulance/${AmbulanceID}`, requestOptions)
      .then(async response => {
        alert("Your data has been successfully updated...")
        history.push("/getAllAmbulance");
      }).catch((err)=>{
        console.log(err);
        alert("Sorry, Something Error...")
      })
  }

  return (
    <React.Fragment>
      <div className="page-content">
        <MetaTags>
          <title>Update Ambulance</title>
        </MetaTags>
        <Container fluid={true}>
          <Breadcrumbs maintitle="Veltrix" title="Form" breadcrumbItem="Update Ambulance Details" />

          <Row>
            <Col>
              <Card>
                <CardBody>

                  <Row className="mb-3">
                    <label
                      htmlFor="example-text-input"
                      className="col-md-2 col-form-label"
                    >
                      Vehicle No
                    </label>
                    <div className="col-md-10">
                      <input
                        className="form-control"
                        type="text"
                        defaultValue={Ambulance.VNo}
                        onChange={(e) => setVNo(e.target.value)}
                        placeholder="Vehicle No: ex - PA-7890"
                      />
                    </div>
                  </Row>
                  <Row className="mb-3">
                    <label
                      htmlFor="example-text-input"
                      className="col-md-2 col-form-label"
                    >
                      Vehicle Chassis No
                    </label>
                    <div className="col-md-10">
                      <input
                        className="form-control"
                        type="text"
                        defaultValue={Ambulance.VChassisno}
                        onChange={(e) => setVChassisno(e.target.value)}
                        placeholder="Vehicle Chassis No"
                      />
                    </div>
                  </Row>
                  <Row className="mb-3">
                    <label
                      htmlFor="example-text-input"
                      className="col-md-2 col-form-label"
                    >
                      Driver Name
                    </label>
                    <div className="col-md-10">
                      <input
                        className="form-control"
                        type="text"
                        defaultValue={Ambulance.DName}
                        onChange={(e) => setDName(e.target.value)}
                        placeholder="Driver Name"
                      />
                    </div>
                  </Row>
                  <Row className="mb-3">
                    <label
                      htmlFor="example-text-input"
                      className="col-md-2 col-form-label"
                    >
                      Driver's Licence No
                    </label>
                    <div className="col-md-10">
                      <input
                        className="form-control"
                        type="text"
                        defaultValue={Ambulance.DLicence}
                        onChange={(e) => setDLicence(e.target.value)}
                        placeholder="Driver's Licence No"
                      />
                    </div>
                  </Row>
                  <Row className="mb-3">
                    <label
                      htmlFor="example-text-input"
                      className="col-md-2 col-form-label"
                    >
                      Driver Contact No
                    </label>
                    <div className="col-md-10">
                      <input
                        className="form-control"
                        type="text"
                        defaultValue={Ambulance.DContactno}
                        onChange={(e) => setDContactno(e.target.value)}
                        placeholder="Driver Contact No"
                      />
                    </div>
                  </Row>
                  <Row className="mb-3">
                    <label
                      htmlFor="example-text-input"
                      className="col-md-2 col-form-label"
                    >
                      Description
                    </label>
                    <div className="col-md-10">
                      <input
                        className="form-control"
                        type="text"
                        defaultValue={Ambulance.Description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Description"
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
                      color="info"
                      outline
                      onClick={UpdateAmbulance}
                    >
                      Update Ambulance
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

export default UpdateAmbulance
