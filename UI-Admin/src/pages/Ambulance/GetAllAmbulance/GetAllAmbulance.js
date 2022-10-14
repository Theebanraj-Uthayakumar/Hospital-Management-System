import React, { useEffect, useState } from "react"
import MetaTags from 'react-meta-tags';

import { Row, Col, Card, CardBody, CardTitle, CardSubtitle } from "reactstrap"
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table"
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css"
//Import Breadcrumb
import Breadcrumbs from "../../../components/Common/Breadcrumb"
import { Button } from "reactstrap"
import { useHistory } from "react-router-dom";

const GetAllAmbulance = () => {

    const [getAmbulance, setGetAmbulance] = useState();

    const history = useHistory();

    const getRequest = () => {
        fetch('http://localhost:4000/api/v1/ambulance')
        .then(response => response.json())
        .then(data => setGetAmbulance(data))
        .then(data => console.log(data))
    };
    
    useEffect(() => {
        getRequest();
    }, []);

    const deleteAmbulance = (ID) =>{
      swal({
        title: "Are you sure?",
        text: "Once deleted, you will not be able to recover this imaginary file!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
          fetch(`http://localhost:4000/api/v1/ambulance/${ID}`, { method: 'DELETE' })
          .then(() => 
            swal("Poof! Your Data has been deleted!", {
              icon: "success",
            })
          )
          .then(()=> window.location.reload());
        }
      });
    }

    const updateAmbulance = (ID) =>{
        window.sessionStorage.setItem("AmbulanceID", ID);
        history.push("/updateAmbulance");
    }

  return (
    <React.Fragment>
      <div className="page-content">
        <MetaTags>
          <title>All Doctors List</title>
        </MetaTags>
        <div className="container-fluid">
          <Breadcrumbs maintitle="Veltrix" title="Tables" breadcrumbItem="Responsive Table" />

          <Row>
            <Col>
              <Card>
                <CardBody>
                  <CardTitle className="h4">Get All Ambulance </CardTitle>
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
                            <Th>Vehicle No</Th>
                            <Th data-priority="1">Vehicle Chassis No</Th>
                            <Th data-priority="3">Driver Name</Th>
                            <Th data-priority="1">Driver Licence</Th>
                            <Th data-priority="3">Driver Contact No</Th>
                            <Th data-priority="3">Description</Th>
                            <Th data-priority="6" colspan="2">
                                <center>
                                Action
                                </center>
                            </Th>
                          </Tr>
                        </Thead>
                        <Tbody>
                            {getAmbulance?.map((item)=>(
                                <Tr>
                                    <Th>
                                        {item.VNo}
                                    </Th>
                                    <Td>{item.VChassisno}</Td>
                                    <Td>{item.DName}</Td>
                                    <Td>{item.DLicence}</Td>
                                    <Td>{item.DContactno}</Td>
                                    <Td>{item.Description}</Td>
                                    <Td>
                                        <Button
                                            block
                                            color="danger"
                                            outline
                                            onClick={() => deleteAmbulance(item._id)}
                                            >
                                            Delete
                                        </Button>
                                    </Td>
                                    <Td>
                                        <Button
                                            block
                                            color="primary"
                                            outline
                                            onClick={()=>updateAmbulance(item._id)}
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

export default GetAllAmbulance
