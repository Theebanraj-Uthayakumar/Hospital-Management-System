import React, { useState, useRef, useEffect } from "react"
import MetaTags from 'react-meta-tags';
import {
  Card,
  CardBody,
  Col,
  Row,
  Container,
  CardTitle
} from "reactstrap"
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table"
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css"
import Breadcrumbs from "../../../components/Common/Breadcrumb"
import html2canvas from 'html2canvas';
import { Button } from "reactstrap"
import { jsPDF } from "jspdf";
import moment from "moment";
import logoImg from "../../../assets/images/logo-sm.png"


const CampingReport = () => {

    const ref = useRef(null);

    const printRef = useRef();

    const [qrDownload, setQrDownload] = useState(false);

    const handleDownloadImage = async () => {
        setQrDownload(true);
        const element = printRef.current;
        const canvas = await html2canvas(element, {
          backgroundColor: 'white',
          logging: true,
          useCORS: true //to enable cross origin perms
        });
    
        const data = canvas.toDataURL('image/jpg');
        // const link = document.createElement('a');
        var doc = new jsPDF('l', 'mm', [615, 310]);
          
        doc.addImage(data, 'PNG', 10, 10);
        doc.save('sample-file.pdf');
      };

      const [getCamping, setGetCamping] = useState();

      const getRequest = () => {
        fetch("http://localhost:4000/api/v1/camping")
          .then(response => response.json())
          .then(data => setGetCamping(data))
          .then(data => console.log(data))
      }

      useEffect(() => {
        getRequest()
      }, [])

  return (
    <React.Fragment>
      <div className="page-content">
        <MetaTags>
          <title>Get all Camping details as Report | Veltrix - Responsive Bootstrap 5 Admin Dashboard</title>
        </MetaTags>
        <Container fluid={true} style={{marginTop:"20px"}}>

          <Row>
            <Col>
              <Card>
                <CardBody>

                <Row className="align-items-center">
                    <Col sm={6}>
                      <CardTitle className="h4">Camping Report</CardTitle>
                      <p className="card-title-desc">
                        Get all camping details as report
                      </p>
                    </Col>
                    <Col sm={6}>
                      <div className="float-end d-none d-md-block">
                      <Button
                        block
                        color="primary"
                        outline
                        onClick={handleDownloadImage}
                        >
                        Download Report
                        </Button>
                      </div>
                    </Col>
                  </Row>

                    <div ref={printRef}>

                    <Row className="align-items-center">
                    <Col sm={6}>
                      <CardTitle className="h4">MEDWIN Hospital</CardTitle>
                      <p className="card-title-desc">
                        Date - {moment().format("MMM Do YY")} <br></br>
                        Time - {moment().format('LTS')}
                      </p>
                    </Col>
                    <Col sm={6}>
                      <div className="float-end d-none d-md-block">
                        <img src={logoImg} alt="image" />
                      </div>
                    </Col>
                  </Row>

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
                                <Th>Camping Name</Th>
                            <Th data-priority="1">Time</Th>
                            <Th data-priority="3">Venue</Th>
                            <Th data-priority="1">CNumber</Th>
                            <Th data-priority="3">Date</Th>
                            <Th data-priority="3">Description</Th>
                                </Tr>
                                </Thead>
                                <Tbody>
                                {getCamping?.map(item => (
                                    <Tr>
                                    <Td>{item.HName}</Td>
                                    <Td>{item.Time}</Td>
                                    <Td>{item.Venue}</Td>
                                    <Td>{item.CNumber}</Td>
                                    <Td>{item.Date.substring(0, 10)}</Td>
                                    <Td>{item.Description}</Td>
                                    </Tr>
                                ))}
                                </Tbody>
                            </Table>
                            </div>
                        </div>
                    </div>
                </CardBody>
                
              </Card>
            </Col>
          </Row>

        </Container>
      </div>
    </React.Fragment>
  )
}

export default CampingReport
