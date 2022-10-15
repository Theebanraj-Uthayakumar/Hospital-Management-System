import React, { useState } from "react"
import MetaTags from "react-meta-tags"
import { Card, CardBody, Col, Row, Container } from "reactstrap"
import { Button } from "reactstrap"
import Breadcrumbs from "../../../components/Common/Breadcrumb"

const AddDoctors = () => {
  const [name, setName] = useState("")
  const [specialization, setSpecialization] = useState("")
  const [slnc, setSlnc] = useState("")
  const [experiance, setExperiance] = useState("")
  const [gender, setGender] = useState("")
  const [cposistion, setCposistion] = useState("")
  const [whospital, setWhospital] = useState("")
  const [whistory, setWhistory] = useState("")

  const [error_Name, setErrorName] = useState("")
  const [error_Specialization, setErroSpecialization] = useState("")
  const [error_SLMC, setErrorSLMC] = useState("")
  const [error_Experience, setErrorExperience] = useState("")
  const [error_Current_Position, setErrorCurrentPosition] = useState("")
  const [error_Working_Hospital, setErrorWorkingHospital] = useState("")
  const [error_Working_History, setErrorWorkingHistory] = useState("")
  const [error_Gender, setErrorGender] = useState("")

  const CreateDoctor = () => {
    if (
      name === "" ||
      slnc === "" ||
      specialization === "" ||
      experiance === "" ||
      gender === "" ||
      cposistion === "" ||
      whospital === "" ||
      whistory === ""
    ) {
      // setLoading(false);
      swal("Warning!", "Please fill all required field...!", "warning")
    } else {
      if (
        error_Name === "" &&
        error_Specialization === "" &&
        error_SLMC === "" &&
        error_Experience === "" &&
        error_Current_Position === "" &&
        error_Working_History === "" &&
        error_Working_Hospital === "" &&
        error_Gender === ""
      ) {
        const requestOptions = {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            DName: name,
            Speci: specialization,
            SLNC: slnc,
            Exper: experiance,
            Gender: gender,
            CPosistion: cposistion,
            WHospital: whospital,
            WHistory: whistory,
          }),
        }

        fetch("http://localhost:4000/api/v1/doctor", requestOptions)
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

  const textSpecilationInput = e => {
    var letters = /^[A-Za-z ]+$/
    if (e.match(letters)) {
      setSpecialization(e)
      setErroSpecialization("")
    } else if (e === "") {
      setErroSpecialization("Please Enter a Specialization")
    } else {
      setErroSpecialization("Please Enter a valid Input")
    }
  }

  const textSLMCInput = e => {
    var letters = /^[0-9]+$/
    if (e.match(letters)) {
      setSlnc(e)
      setErrorSLMC("")
    } else if (e === "") {
      setErrorSLMC("Please Enter a SLMC")
    } else {
      setErrorSLMC("Please Enter a valid Input")
    }
  }

  const textGenderInput = e => {
    if (e === "Select Gender") {
      setErrorGender("Please Select a Gender")
    } else {
      setGender(e)
      setErrorGender("")
    }
  }

  const textExperienceInput = e => {
    var letters = /^[A-Za-z0-9 ]+$/
    if (e.match(letters)) {
      setExperiance(e)
      setErrorExperience("")
    } else if (e === "") {
      setErrorExperience("Please Enter a Experience")
    } else {
      setErrorExperience("Please Enter a valid Input")
    }
  }

  const textCurrentPositionInput = e => {
    var letters = /^[A-Za-z ]+$/
    if (e.match(letters)) {
      setCposistion(e)
      setErrorCurrentPosition("")
    } else if (e === "") {
      setErrorCurrentPosition("Please Enter a Current Position")
    } else {
      setErrorCurrentPosition("Please Enter a valid Input")
    }
  }

  const textWorkingHospitalInput = e => {
    var letters = /^[A-Za-z0-9 ]+$/
    if (e.match(letters)) {
      setWhospital(e)
      setErrorWorkingHospital("")
    } else if (e === "") {
      setErrorWorkingHospital("Please Enter a Working Hospital")
    } else {
      setErrorWorkingHospital("Please Enter a valid Input")
    }
  }

  const textWorkingHistoryInput = e => {
    var letters = /^[A-Za-z0-9 ]+$/
    if (e.match(letters)) {
      setWhistory(e)
      setErrorWorkingHistory("")
    } else if (e === "") {
      setErrorWorkingHistory("Please Enter a Working History")
    } else {
      setErrorWorkingHistory("Please Enter a valid Input")
    }
  }

  return (
    <React.Fragment>
      <div className="page-content">
        <MetaTags>
          <title>
            Add New Doctor | Veltrix - Responsive Bootstrap 5 Admin Dashboard
          </title>
        </MetaTags>
        <Container fluid={true}>
          <Breadcrumbs
            maintitle="Veltrix"
            title="Form"
            breadcrumbItem="Add New Doctor"
          />

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
                      Specializations
                    </label>
                    <div className="col-md-10">
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Specializations"
                        // value={specialization}
                        onChange={e => textSpecilationInput(e.target.value)}
                      />
                      {error_Specialization ? (
                        <span style={{ color: "red", fontSize: 12 }}>
                          {error_Specialization}
                        </span>
                      ) : null}
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
                        // value={slnc}
                        onChange={e => textSLMCInput(e.target.value)}
                      />
                      {error_SLMC ? (
                        <span style={{ color: "red", fontSize: 12 }}>
                          {error_SLMC}
                        </span>
                      ) : null}
                    </div>
                  </Row>
                  <Row className="mb-3">
                    <label className="col-md-2 col-form-label">Gender</label>
                    <div className="col-md-10">
                      <select
                        className="form-control"
                        // value={gender}
                        onChange={e => textGenderInput(e.target.value)}
                      >
                        <option value="Select Gender">Select Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                      </select>
                      {error_Gender ? (
                        <span style={{ color: "red", fontSize: 12 }}>
                          {error_Gender}
                        </span>
                      ) : null}
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
                        // value={experiance}
                        onChange={e => textExperienceInput(e.target.value)}
                      />
                      {error_Experience ? (
                        <span style={{ color: "red", fontSize: 12 }}>
                          {error_Experience}
                        </span>
                      ) : null}
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
                        // value={cposistion}
                        onChange={e => textCurrentPositionInput(e.target.value)}
                      />
                      {error_Current_Position ? (
                        <span style={{ color: "red", fontSize: 12 }}>
                          {error_Current_Position}
                        </span>
                      ) : null}
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
                        // value={whospital}
                        onChange={e => textWorkingHospitalInput(e.target.value)}
                      />
                      {error_Working_Hospital ? (
                        <span style={{ color: "red", fontSize: 12 }}>
                          {error_Working_Hospital}
                        </span>
                      ) : null}
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
                        // value={whistory}
                        onChange={e => textWorkingHistoryInput(e.target.value)}
                      />
                      {error_Working_History ? (
                        <span style={{ color: "red", fontSize: 12 }}>
                          {error_Working_History}
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
                          onClick={CreateDoctor}
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

export default AddDoctors
