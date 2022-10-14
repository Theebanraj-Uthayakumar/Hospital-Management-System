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
                      <input
                        className="form-control"
                        type="text"
                        value={VNo}
                        onChange={(e) => setVNo(e.target.value)}
                        placeholder="Vehicle No: ex - PA-7890"
                      />
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
                      <input
                        className="form-control"
                        type="text"
                        value={VChassisno}
                        onChange={(e) => setVChassisno(e.target.value)}
                        placeholder="Vehicle Chassis No"
                      />
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
                        value={DName}
                        onChange={(e) => setDName(e.target.value)}
                        placeholder="Driver Name"
                      />
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
                      <input
                        className="form-control"
                        type="text"
                        value={DLicence}
                        onChange={(e) => setDLicence(e.target.value)}
                        placeholder="Driver's Licence No"
                      />
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
                      <input
                        className="form-control"
                        type="text"
                        value={DContactno}
                        onChange={(e) => setDContactno(e.target.value)}
                        placeholder="Driver Contact No"
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
                        value={Description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Description"
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
