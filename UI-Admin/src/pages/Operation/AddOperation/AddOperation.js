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

const AddOperation = () => {

  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [description, setDescription] = useState("");
  const [dname, setDname] = useState("");

  const CreateOperation =()=>{
    if (
      name === "" ||
      time === "" ||
      date === "" ||
      description === "" ||
      dname === ""
    ) {
      // setLoading(false);
      alert("Please fill all required field...!");
    } else {
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          OName: name,
          Date: date,
          Time: time,
          Description: description,
          DName: dname
        })
      };

      fetch('http://localhost:4000/api/v1/operation', requestOptions)
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
          <title>Add New Operation | Admin Dashboard</title>
        </MetaTags>
        <Container fluid={true}>
          <Breadcrumbs maintitle="Veltrix" title="Form" breadcrumbItem="Add New Operation" />

          <Row>
            <Col>
              <Card>
                <CardBody>

                  <Row className="mb-3">
                    <label
                      htmlFor="example-text-input"
                      className="col-md-2 col-form-label"
                    >
                      Operation Name
                    </label>
                    <div className="col-md-10">
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Operation Name"
                        value={name}
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
                        type="text"
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
                        type="text"
                        placeholder="Time"
                        value={time}
                          onChange={(e) => setTime(e.target.value)}
                      />
                    </div>
                  </Row>
                  {/* <Row className="mb-3">
                    <label className="col-md-2 col-form-label">dname</label>
                    <div className="col-md-10">
                      <select className="form-control" 
                        value={dname}
                        onChange={(e) => setDname(e.target.value)}
                      > */}
                        {/* <option>Select</option> */}
                        {/* <option value="Male">Male</option>
                        <option value="Female">Female</option>
                      </select>
                    </div>
                  </Row> */}
                  
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
                      Doctor Name
                    </label>
                    <div className="col-md-10">
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Doctor's Name"
                        value={dname}
                        onChange={(e) => setDname(e.target.value)}
                      />
                    </div>
                  </Row>
                  {/* <Row className="mb-3">
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
                        value={whistory}
                        onChange={(e) => setWhistory(e.target.value)}
                      />
                    </div>
                  </Row> */}
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
                      onClick={CreateOperation}
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

export default AddOperation