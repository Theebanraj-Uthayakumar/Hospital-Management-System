import React, { useEffect, useState } from "react"
import MetaTags from "react-meta-tags"

import { Row, Col, Card, CardBody, CardTitle, CardSubtitle } from "reactstrap"
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table"
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css"
//Import Breadcrumb
import Breadcrumbs from "../../../components/Common/Breadcrumb"
import { Button } from "reactstrap"
import { useHistory } from "react-router-dom"

//GetAllOperation

const GetAllOperation = () => {
  const [getOperation, setGetOperation] = useState()

  const history = useHistory()

  const getRequest = () => {
    fetch("http://localhost:4000/api/v1/operation")
      .then(response => response.json())
      .then(data => setGetOperation(data))
      .then(data => console.log(data))
  }

  useEffect(() => {
    getRequest()
  }, [])

  const deleteOperation = ID => {
    fetch(`http://localhost:4000/api/v1/operation/${ID}`, { method: "DELETE" })
      .then(() => alert("Successfully removed...!"))
      .then(() => window.location.reload())
  }

  const updateOperation = ID => {
    window.sessionStorage.setItem("OperationID", ID)
    history.push("/updateOperation")
  }

  return (
    <React.Fragment>
      <div className="page-content">
        <MetaTags>
          <title>Operation | Admin Dashboard</title>
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
                  <CardTitle className="h4">Get All Operation </CardTitle>
                  <p className="card-title-desc"></p>

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
                            <Th>Operation Name</Th>
                            <Th data-priority="1">Date</Th>
                            <Th data-priority="3">Time</Th>
                            <Th data-priority="1">Description</Th>
                            <Th data-priority="3">Doctor Name</Th>
                            <Th data-priority="6" colspan="2">
                              <center>Action</center>
                            </Th>
                          </Tr>
                        </Thead>
                        <Tbody>
                          {getOperation?.map(item => (
                            <Tr>
                              <Th>{item.OName}</Th>
                              <Td>{item.Date}</Td>
                              <Td>{item.Time}</Td>
                              <Td>{item.Description}</Td>
                              <Td>{item.DName}</Td>
                              <Td>
                                <Button
                                  block
                                  color="danger"
                                  outline
                                  onClick={() => deleteOperation(item._id)}
                                >
                                  Delete
                                </Button>
                              </Td>
                              <Td>
                                <Button
                                  block
                                  color="primary"
                                  outline
                                  onClick={() => updateOperation(item._id)}
                                >
                                  Edit
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

export default GetAllOperation
