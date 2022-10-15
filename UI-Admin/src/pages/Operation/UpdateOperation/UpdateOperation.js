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

//UpdateOperation

const UpdateOperation = () => {

  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [description, setDescription] = useState("");
  const [dname, setDname] = useState("");

  const OperationID = window.sessionStorage.getItem("OperationID");


  const [operation, setOperation] = useState([]);

  const getRequest = () => {
    fetch(`http://localhost:4000/api/v1/operation/${OperationID}`)
    .then(response => response.json())
    .then(data => setOperation(data))
    .then(data => console.log(data))
  };

  useEffect(() => {
    getRequest();
  });

  const history = useHistory();

  const UpdateOperation =()=>{
      const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          OName: name ? name : operation.OName,
          Date: date ? date : operation.Date,
          Time: time ? time : operation.Time,
          Description: description ? description : operation.Description,
          DName: dname ? dname : operation.DName
        })
      };

      fetch(`http://localhost:4000/api/v1/operation/${OperationID}`, requestOptions)
      .then(async response => {
        alert("Your data has been successfully updated...")
        history.push("/getAllOperation");
      }).catch((err)=>{
        console.log(err);
        alert("Sorry, Something Error...")
      })
  }

  return (
    <React.Fragment>
      <div className="page-content">
        <MetaTags>
          <title>Add Operation | MEDWIN Hospital -  Admin Dashboard</title>
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
                      Operation Name
                    </label>
                    <div className="col-md-10">
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Operation Name"
                        defaultValue={operation.OName}
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
                        defaultValue={operation.Date}
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
                        defaultValue={operation.Time}
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
                        defaultValue={operation.Description}
                        onChange={(e) => setDescription(e.target.value)}
                      />
                    </div>
                  </Row>
                  {/* <Row className="mb-3">
                    <label className="col-md-2 col-form-label">Gende</label>
                    <div className="col-md-10">
                      <select className="form-control" 
                        value={operation.DName}
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
                      Current Position
                    </label>
                    <div className="col-md-10">
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Current Position"
                        defaultValue={operation.DName}
                        onChange={(e) => setDname(e.target.value)}
                      />
                    </div>
                  </Row>
                  {/* <Row className="mb-3">
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
                        defaultValue={operation.WHospital}
                        onChange={(e) => setWhospital(e.target.value)}
                      />
                    </div>
                  </Row> */}
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
                        defaultValue={operation.WHistory}
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
                      onClick={UpdateOperation}
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

export default UpdateOperation
