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

  const [error_hname, setErrorhname] = useState("")
  const [error_venue, setErrorvenue] = useState("")
  const [error_cnumber, setErrorcnumber] = useState("")
  const [error_description, setErrordescription] = useState("")

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
      if (
        error_hname === "" &&
        error_venue === "" &&
        error_cnumber === "" &&
        error_description === ""
      ) {

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
    } else {
      swal("Warning!", "Please Enter a valid Input...!", "warning")
    }
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
                        //value={hname}
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
                        //value={description}
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
                      CNumber
                    </label>
                    <div className="col-md-10">
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Camping Number"
                        //value={cnumber}
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
                      Venue
                    </label>
                    <div className="col-md-10">
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Venue"
                        //value={venue}
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
