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

  const [error_hname, setErrorhname] = useState("")
  const [error_venue, setErrorvenue] = useState("")
  const [error_cnumber, setErrorcnumber] = useState("")
  const [error_description, setErrordescription] = useState("")

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
    if (
      error_hname === "" &&
      error_venue === "" &&
      error_cnumber === "" &&
      error_description === ""
    ) {

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
        history.push("/getAllCamping");
      }).catch((err)=>{
        console.log(err);
        alert("Sorry, Something Error...")
      })
  }else {
      swal("Warning!", "Please Enter a valid Input...!", "warning")
    }
  }

  const textHNameInput = e => {
    var letters = /^[A-Za-z ]+$/
    console.log("error_hname : ", error_hname)
    if (e.match(letters)) {
      setName(e)
      setErrorhname("")
    } else if (e === "") {
      setErrorhname("Please Enter a Name")
    } else {
      setErrorhname("Please Enter a valid Input")
    }
  }
  
  const textVenueInput = e => {
    var letters = /^[A-Za-z ]+$/
    if (e.match(letters)) {
        setVenue(e)
      setErrorvenue("")
    } else if (e === "") {
      setErrorvenue("Please Enter a Venue")
    } else {
      setErrorvenue("Please Enter a valid Input")
    }
  }
  
  const textCNumberInput = e => {
    var letters = /^(C)[0-9]+$/
    if (e.match(letters)) {
        setCNumber(e)
      setErrorcnumber("")
    } else if (e === "") {
      setErrorcnumber("Please Enter a CNumber")
    } else {
      setErrorcnumber("Please Enter a valid Input")
    }
  }
  
  
  const textDescriptionlInput = e => {
    var letters = /^[A-Za-z ]+$/
    console.log("error_description : ", error_description)
    if (e.match(letters)) {
      setDescription(e)
      setErrordescription("")
    } else if (e === "") {
      setErrordescription("Please Enter a Description")
    } else {
      setErrordescription("Please Enter a valid Input")
    }
  }
  

  return (
    <React.Fragment>
      <div className="page-content">
        <MetaTags>
          <title>Update camping Details| Veltrix - Responsive Bootstrap 5 Admin Dashboard</title>
        </MetaTags>
        <Container fluid={true}>
          <Breadcrumbs maintitle="Veltrix" title="Form" breadcrumbItem="Update camping Details" />

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
                        onChange={e => textHNameInput(e.target.value)}
                        />
                        {error_hname ? (
                          <span style={{ color: "red", fontSize: 12 }}>
                            {error_hname}
                          </span>
                        ) : null}
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
                        onChange={e => textVenueInput(e.target.value)}
                      />
                      {error_venue ? (
                        <span style={{ color: "red", fontSize: 12 }}>
                          {error_venue}
                        </span>
                      ) : null}
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
                        onChange={e => textCNumberInput(e.target.value)}
                      />
                      {error_cnumber ? (
                        <span style={{ color: "red", fontSize: 12 }}>
                          {error_cnumber}
                        </span>
                      ) : null}
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
                        onChange={e => textDescriptionlInput(e.target.value)}
                      />
                      {error_description ? (
                        <span style={{ color: "red", fontSize: 12 }}>
                          {error_description}
                        </span>
                      ) : null}
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
