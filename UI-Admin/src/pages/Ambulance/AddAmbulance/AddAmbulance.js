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

const AddAmbulance = () => {

  const [VNo, setVNo] = useState("");
  const [VChassisno, setVChassisno] = useState("");
  const [DName, setDName] = useState("");
  const [DLicence, setDLicence] = useState("");
  const [DContactno, setDContactno] = useState("");
  const [Description, setDescription] = useState("");

  let [errors_VNo, seterrors_VNo] = useState("");
  let [errors_VChassisno, seterrors_VChassisno] = useState("");
  let [errors_DName, seterrors_DName] = useState("");
  let [errors_DLicence, seterrors_DLicence] = useState("");
  let [errors_DContactno, seterrors_DContactno] = useState("");
  let [errors_Description, seterrors_Description] = useState("");

  const CreateAmbulance =()=>{
    if (
      VNo === "" ||
      VChassisno === "" ||
      DName === "" ||
      DLicence === "" ||
      DContactno === "" ||
      Description === ""
    ) {
      // setLoading(false);
      alert("Please fill all required field...!");
    } else {

      if (
        errors_VNo === "" &&
        errors_VChassisno === "" &&
        errors_DName === "" &&
        errors_DLicence === "" &&
        errors_DContactno === "" &&
        errors_Description === ""
      ) {

      const current = new Date();
      const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          VNo: VNo,
          VChassisno: VChassisno,
          DName: DName,
          DLicence: DLicence,
          DContactno: DLicence,
          Description: Description,          
          CTime: date,
          CDate: date
        })
      };

      fetch('http://localhost:4000/api/v1/ambulance', requestOptions)
      .then(async response => {
        swal("Good job!", "You clicked the button!", "success")
        .then(() => {
          window.location.reload();
        });
      }).catch((err)=>{
        console.log(err);
        swal("Good job!", "You clicked the button!", "warning");
      })

    } else {
      swal("Warning!", "Please Enter a valid Input...!", "warning")
    }
  }
  }
  
  const textVNoInput = e => {    
    var letters = /^[A-Za-z0-9 -]+$/

    if (e.match(letters)) {
      setVNo(e)
      seterrors_VNo("")
    } else if (e === "") {
      seterrors_VNo("Please Enter the Vehicle Number")
    } else {
      seterrors_VNo("Please Enter Valid and Correctly Formated Vehicle Number")
    }
  }

  const textVChassisnoInput = e => {
    var letters = /^[A-Za-z0-9 -]+$/
    if (e.match(letters)) {
      setVChassisno(e)
      seterrors_VChassisno("")
    } else if (e === "") {
      seterrors_VChassisno("Please Enter the Vehicle Chassis Number")
    } else {
      seterrors_VChassisno("Please Enter Valid and Correctly Formated Vehicle Chassis Number")
    }
  }

  const textDNameInput = e => {
    var letters = /^[A-Za-z ]+$/
    if (e.match(letters)) {
      setDName(e)
      seterrors_DName("")
    } else if (e === "") {
      seterrors_DName("Please Enter the Driver Name")
    } else {
      seterrors_DName("Please Enter a valid Input")
    }
  }

  const textDLicenceInput = e => {
    var letters = /^[A-Za-z0-9]+$/
    if (e.match(letters)) {
      setDLicence(e)
      seterrors_DLicence("")
    } else if (e === "") {
      seterrors_DLicence("Please Enter the Driver Licence")
    } else {
      seterrors_DLicence("Please Enter Valid and Correctly Formated Driver Licence")
    }
  }

  const textDContactnoInput = e => {
    var letters = /^[0-9]+$/
    if (e.match(letters)) {
      setDContactno(e)
      seterrors_DContactno("")
    } else if (e === "") {
      seterrors_DContactno("Please Enter the Driver Contact Number")
    }else {
      seterrors_DContactno("Contact No should be less than 10 digits")
    }
  }

  const textDescriptionInput = e => {    
    var letters = /^[A-Za-z0-9 ]+$/

    var arr = e.split(' ');

  
    if (e.match(letters)) {
      setDescription(e)
      seterrors_Description("")
    }  else if(arr.length > 2) {
      seterrors_Description("Exceed the Word Count")
    } else if (e === "") {
      seterrors_Description("Please Enter the Description")
    } else {
      seterrors_Description("Please Enter a valid Input")
    }
  }

  return (
    <React.Fragment>
      <div className="page-content">
        <MetaTags>
          <title>Add New Ambulance</title>
        </MetaTags>
        <Container fluid={true}>
          <Breadcrumbs maintitle="Veltrix" title="Form" breadcrumbItem="Add New Ambulance" />

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
                      <input maxlength="8"
                        className="form-control"
                        type="text"
                        //value={VNo}
                        onChange={(e) => textVNoInput(e.target.value)}
                        placeholder="Vehicle No: ex - PA-7890"
                      />
                      {errors_VNo ? (
                        <span style={{ color: "red", fontSize: 12 }}>
                          {errors_VNo}
                        </span>
                      ) : null}
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
                      <input maxlength="17"
                        className="form-control"
                        type="text"
                        //value={VChassisno}
                        onChange={(e) => textVChassisnoInput(e.target.value)}
                        placeholder="Vehicle Chassis No"
                      />
                      {errors_VChassisno ? (
                        <span style={{ color: "red", fontSize: 12 }}>
                          {errors_VChassisno}
                        </span>
                      ) : null}
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
                        //value={DName}
                        onChange={(e) => textDNameInput(e.target.value)}
                        placeholder="Driver Name"
                      />
                      {errors_DName ? (
                        <span style={{ color: "red", fontSize: 12 }}>
                          {errors_DName}
                        </span>
                      ) : null}
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
                      <input  maxlength="16"
                        className="form-control"
                        type="text"
                        //value={DLicence}
                        onChange={(e) => textDLicenceInput(e.target.value)}
                        placeholder="Driver's Licence No"
                      />
                      {errors_DLicence ? (
                        <span style={{ color: "red", fontSize: 12 }}>
                          {errors_DLicence}
                        </span>
                      ) : null}
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
                      <input  maxlength="10"
                        className="form-control"
                        type="text"
                        //value={DContactno}
                        onChange={(e) => textDContactnoInput(e.target.value)}
                        placeholder="Driver Contact No"
                      />
                      {errors_DContactno ? (
                        <span style={{ color: "red", fontSize: 12 }}>
                          {errors_DContactno}
                        </span>
                      ) : null}
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
                        //value={Description}
                        onChange={(e) => textDescriptionInput(e.target.value)}
                        placeholder="Enter Description"
                      />
                      {errors_Description ? (
                        <span style={{ color: "red", fontSize: 12 }}>
                          {errors_Description}
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
                      onClick={CreateAmbulance}
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

export default AddAmbulance
