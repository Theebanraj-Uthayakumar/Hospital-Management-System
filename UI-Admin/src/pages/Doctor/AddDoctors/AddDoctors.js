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
import Breadcrumbs from "../../../components/Common/Breadcrumb"

const AddDoctors = () => {

  const [name, setName] = useState("");
  const [specialization, setSpecialization] = useState("");
  const [slnc, setSlnc] = useState("");
  const [experiance, setExperiance] = useState("");
  const [gender, setGender] = useState("");
  const [cposistion, setCposistion] = useState("");
  const [whospital, setWhospital] = useState("");
  const [whistory, setWhistory] = useState("");

  const CreateDoctor =()=>{
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
      alert("Please fill all required field...!");
    } else {
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          DName: name,
          Speci: specialization,
          SLNC: slnc,
          Exper: experiance,
          Gender: gender,
          CPosistion: cposistion,
          WHospital: whospital,
          WHistory: whistory
        })
      };

      fetch('http://localhost:4000/api/v1/doctor', requestOptions)
      .then(async response => {
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
                      Specializations
                    </label>
                    <div className="col-md-10">
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Specializations"
                        value={specialization}
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
                        value={slnc}
                          onChange={(e) => setSlnc(e.target.value)}
                      />
                    </div>
                  </Row>
                  <Row className="mb-3">
                    <label className="col-md-2 col-form-label">Gender</label>
                    <div className="col-md-10">
                      <select className="form-control" 
                        value={gender}
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
                        value={experiance}
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
                        value={cposistion}
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
                        value={whospital}
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
                        value={whistory}
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
