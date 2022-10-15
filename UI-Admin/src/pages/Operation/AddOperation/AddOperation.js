import React, { useState } from "react"
import MetaTags from "react-meta-tags"

import { Card, CardBody, Col, Row, Container } from "reactstrap"

import { Button } from "reactstrap"
import swal from "sweetalert"

//Import Breadcrumb
import Breadcrumbs from "../../../components/Common/Breadcrumb"

//Add Operation

const AddOperation = () => {
  const [name, setName] = useState("")
  const [date, setDate] = useState("")
  const [time, setTime] = useState("")
  const [description, setDescription] = useState("")
  const [dname, setDname] = useState("")

  const [error_Name, setErrorName] = useState("")
  const [error_Description, setErrorDescription] = useState("")
  const [error_Dname, setErrorDname] = useState("")

  const CreateOperation = () => {
    if (
      name === "" ||
      date === "" ||
      time === "" ||
      description === "" ||
      dname === ""
    ) {
      // setLoading(false);
      swal("Please fill all required field...!")
    } else {
      if (error_Name === "" && error_Description === "" && error_Dname === "") {
        const requestOptions = {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            OName: name,
            Date: date,
            Time: time,
            Description: description,
            DName: dname,
          }),
        }

        fetch("http://localhost:4000/api/v1/operation", requestOptions)
          .then(async response => {
            swal("Good job!", "You clicked the button!", "success").then(() => {
              window.location.reload()
            })
          })
          .catch(err => {
            console.log(err)
            swal(
              "Warning!",
              "Something went wrong, Pleace try again!",
              "warning"
            )
          })
      } else {
        swal("Warning!", "Please Enter a valid Input...!", "warning")
      }
    }
  }

  const textNameInput = e => {
    var letters = /^[A-Za-z ]+$/
    console.log("error_Name : ", error_Name)
    if (e.match(letters)) {
      setName(e)
      setErrorName("")
    } else if (e === "") {
      setErrorName("Please Enter a Name")
    } else {
      setErrorName("Please Enter a valid Input")
    }
  }

  const textDescriptionInput = e => {
    var letters = /^[A-Za-z ]+$/
    if (e.match(letters)) {
      setDescription(e)
      setErrorDescription("")
    } else if (e === "") {
      setErrorDescription("Please Enter a Description")
    } else {
      setErrorDescription("Please Enter a valid Input")
    }
  }

  const textDnameInput = e => {
    var letters = /^[A-Za-z ]+$/
    console.log("error_Name : ", error_Dname)
    if (e.match(letters)) {
      setDname(e)
      setErrorDname("")
    } else if (e === "") {
      setErrorDname("Please Enter a Doctor Name")
    } else {
      setErrorDname("Please Enter a valid Input")
    }
  }

  return (
    <React.Fragment>
      <div className="page-content">
        <MetaTags>
          <title>Add New Operation | Admin Dashboard</title>
        </MetaTags>
        <Container fluid={true}>
          <Breadcrumbs
            maintitle="Veltrix"
            title="Form"
            breadcrumbItem="Add New Operation"
          />

          <Row>
            <Col>
              <Card>
                <CardBody className="">
                  <form className="needs-validation" novalidate>
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
                          // value={name}
                          onChange={e => textNameInput(e.target.value)}
                        />
                        {error_Name ? (
                          <span style={{ color: "red", fontSize: 12 }}>
                            {error_Name}
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
                          onChange={e => setDate(e.target.value)}
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
                          onChange={e => setTime(e.target.value)}
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
                          // value={description}
                          onChange={e => textDescriptionInput(e.target.value)}
                        />
                        {error_Description ? (
                          <span style={{ color: "red", fontSize: 12 }}>
                            {error_Description}
                          </span>
                        ) : null}
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
                          // value={dname}
                          onChange={e => textDnameInput(e.target.value)}
                        />
                        {error_Dname ? (
                          <span style={{ color: "red", fontSize: 12 }}>
                            {error_Dname}
                          </span>
                        ) : null}
                      </div>
                    </Row>
                  </form>
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
