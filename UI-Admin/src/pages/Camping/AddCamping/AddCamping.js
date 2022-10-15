import React, { useState } from "react"
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

const AddCamping = () => {

  const [hname, setName] = useState("");
  const [time, setTime] = useState("");
  const [venue, setVenue] = useState("");
  const [cnumber, setCNumber] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");

  const CreateCamping =()=>{
    if (
      hname === "" ||
      time === "" ||
      venue === "" ||
      cnumber === "" ||
      date === "" ||
      description === ""
    ) {
      // setLoading(false);
      alert("Please fill all required field...!");
    } else {
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          HName: hname,
          Time: time,
          Venue: venue,
          CNumber: cnumber,
          Date: date,
          Description:description
        })
      };

      fetch('http://localhost:4000/api/v1/camping', requestOptions)
      .then(async response => {
        alert("Your data has been successfully added...")
        window.location.reload();
      }).catch((err)=>{
        console.log(err);
        alert("Sorry, Something Error...")
      })
    }
  }

  return (
    <React.Fragment>
      <div className="page-content">
        <MetaTags>
          <title>Add New Camping | Admin Dashboard</title>
        </MetaTags>
        <Container fluid={true}>
          <Breadcrumbs maintitle="Veltrix" title="Form" breadcrumbItem="Add New Camping" />

          <Row>
            <Col>
              <Card>
                <CardBody>

                  <Row className="mb-3">
                    <label
                      htmlFor="example-text-input"
                      className="col-md-2 col-form-label"
                    >
                      Camping Name
                    </label>
                    <div className="col-md-10">
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Camping Name"
                        value={hname}
                        onChange={(e) => setName(e.target.value)}
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
                        type="date"
                        placeholder="Date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
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
                        type="time"
                        placeholder="Time"
                        value={time}
                          onChange={(e) => setTime(e.target.value)}
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
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
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
                        value={cnumber}
                        onChange={(e) => setCNumber(e.target.value)}
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
                        value={venue}
                        onChange={(e) => setVenue(e.target.value)}
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
                      onClick={CreateCamping}
                    >
                      Submit Now
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

export default AddCamping
