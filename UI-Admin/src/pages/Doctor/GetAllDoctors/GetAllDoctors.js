import React, { useEffect, useState } from "react"
import MetaTags from "react-meta-tags"

import { Row, Col, Card, CardBody, CardTitle, CardSubtitle } from "reactstrap"
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table"
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css"
//Import Breadcrumb
import Breadcrumbs from "../../../components/Common/Breadcrumb"
import { Button } from "reactstrap"
import { useHistory } from "react-router-dom"

const GetAllDoctors = () => {
  const [getDoctors, setGetDoctors] = useState()

  const history = useHistory()

  const getRequest = () => {
    fetch("http://localhost:4000/api/v1/doctor")
      .then(response => response.json())
      .then(data => setGetDoctors(data))
      .then(data => console.log(data))
  }

  useEffect(() => {
    getRequest()
  }, [])

  const deleteDoctor = ID => {
    fetch(`http://localhost:4000/api/v1/doctor/${ID}`, { method: "DELETE" })
      .then(() => alert("Successfully removed...!"))
      .then(() => window.location.reload())
  }

  const updateDoctor = ID => {
    window.sessionStorage.setItem("DoctorID", ID)
    history.push("/updateDoctors")
  }

  return (
    <React.Fragment>
      <div className="page-content">
        <MetaTags>
          <title>
            Doctors | Veltrix - Responsive Bootstrap 5 Admin Dashboard
          </title>
        </MetaTags>
        <div className="container-fluid">
          <Breadcrumbs
            maintitle="Veltrix"
            title="Tables"
            breadcrumbItem="Responsive Table"
          />

          <Row>
            <Col>
              <Card>
                <CardBody>
                  <CardTitle className="h4">Get All Doctors </CardTitle>
                  <p className="card-title-desc">
                    This is an experimental awesome solution for responsive
                    tables with complex data.
                  </p>

                  <div className="table-rep-plugin">
                    <div
                      className="table-responsive mb-0"
                      data-pattern="priority-columns"
                    >
                      <Table
                        id="tech-companies-1"
                        className="table table-striped table-bordered"
                      >
                        <Thead>
                          <Tr>
                            <Th>Name</Th>
                            <Th data-priority="1">Specilation</Th>
                            <Th data-priority="3">SLMC</Th>
                            <Th data-priority="1">Gender</Th>
                            <Th data-priority="3">Experience</Th>
                            <Th data-priority="3">Current Position</Th>
                            <Th data-priority="6">Working Hospital</Th>
                            <Th data-priority="6">Working History</Th>
                            <Th data-priority="6" colspan="2">
                              <center>Action</center>
                            </Th>
                          </Tr>
                        </Thead>
                        <Tbody>
                          {getDoctors?.map(item => (
                            <Tr>
                              <Th>{item.DName}</Th>
                              <Td>{item.Speci}</Td>
                              <Td>{item.SLNC}</Td>
                              <Td>{item.Exper}</Td>
                              <Td>{item.Gender}</Td>
                              <Td>{item.CPosistion}</Td>
                              <Td>{item.WHospital}</Td>
                              <Td>{item.WHistory}</Td>
                              <Td>
                                <Button
                                  block
                                  color="danger"
                                  outline
                                  onClick={() => deleteDoctor(item._id)}
                                >
                                  D
                                </Button>
                              </Td>
                              <Td>
                                <Button
                                  block
                                  color="primary"
                                  outline
                                  onClick={() => updateDoctor(item._id)}
                                >
                                  E
                                </Button>
                              </Td>
                            </Tr>
                          ))}
                        </Tbody>
                      </Table>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    </React.Fragment>
  )
}

export default GetAllDoctors
