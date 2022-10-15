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

const UpdateCamping = () => {

    const [hname, setName] = useState("");
  const [time, setTime] = useState("");
  const [venue, setVenue] = useState("");
  const [cnumber, setCNumber] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");

  const CampingID = window.sessionStorage.getItem("CampingID");


  const [camping, SetOperation] = useState([]);

  const getRequest = () => {
    fetch(`http://localhost:4000/api/v1/camping/${CampingID}`)
    .then(response => response.json())
    .then(data => SetOperation(data))
    .then(data => console.log(data))
  };

  useEffect(() => {
    getRequest();
  });

  const history = useHistory();

  const UpdateCamping =()=>{
      const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            HName: hname ? hname : camping.HName,
          Time: time ? time : camping.Time,
          Venue: venue ? venue : camping.Venue,
          CNumber: cnumber ? cnumber : camping.CNumber,
          Date: date ? date : camping.Date,
          Description: description ? description : camping.Description,
        })
      };

      fetch(`http://localhost:4000/api/v1/camping/${CampingID}`, requestOptions)
      .then(async response => {
        alert("Your data has been successfully updated...")
        history.push("/getAllOperations");
      }).catch((err)=>{
        console.log(err);
        alert("Sorry, Something Error...")
      })
  }

  return (
    <React.Fragment>
      <div className="page-content">
        <MetaTags>
          <title>Add New camping | Veltrix - Responsive Bootstrap 5 Admin Dashboard</title>
        </MetaTags>
        <Container fluid={true}>
          <Breadcrumbs maintitle="Veltrix" title="Form" breadcrumbItem="Add New camping" />

          <Row>
            <Col>
              <Card>
                <CardBody>

                  <Row className="mb-3">
                    <label
                      htmlFor="example-text-input"
                      className="col-md-2 col-form-label"
                    >
                      camping Name
                    </label>
                    <div className="col-md-10">
                      <input
                        className="form-control"
                        type="text"
                        placeholder="camping Name"
                        defaultValue={camping.HName}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                  </Row>

                  <Row className="mb-3">
                    <label
                      htmlFor="example-text-input"
                      className="col-md-2 col-form-label"
                    >
                      Time
                    </label>
                    <div className="col-md-10">
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Time"
                        defaultValue={camping.Time}
                        onChange={(e) => setTime(e.target.value)}
                      />
                    </div>
                  </Row>

                  <Row className="mb-3">
                    <label
                      htmlFor="example-text-input"
                      className="col-md-2 col-form-label"
                    >
                      Venue
                    </label>
                    <div className="col-md-10">
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Venue"
                        defaultValue={camping.Venue}
                        onChange={(e) => setVenue(e.target.value)}
                      />
                    </div>
                  </Row>

                  <Row className="mb-3">
                    <label
                      htmlFor="example-text-input"
                      className="col-md-2 col-form-label"
                    >
                      CNumber
                    </label>
                    <div className="col-md-10">
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Camping Number"
                        defaultValue={camping.CNumber}
                        onChange={(e) => setCNumber(e.target.value)}
                      />
                    </div>
                  </Row>

                  <Row className="mb-3">
                    <label
                      htmlFor="example-text-input"
                      className="col-md-2 col-form-label"
                    >
                      Date
                    </label>
                    <div className="col-md-10">
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Date"
                        defaultValue={camping.Date}
                        onChange={(e) => setDate(e.target.value)}
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
                        placeholder="Description"
                        defaultValue={camping.Description}
                        onChange={(e) => setDescription(e.target.value)}
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
                      onClick={UpdateCamping}
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

export default UpdateCamping;
