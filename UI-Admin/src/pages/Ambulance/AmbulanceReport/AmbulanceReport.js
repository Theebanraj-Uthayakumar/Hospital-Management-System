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


const AmbulanceReport = () => {

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

      const [getAmbulance, setGetAmbulance] = useState();

      const getRequest = () => {
        fetch("http://localhost:4000/api/v1/ambulance")
          .then(response => response.json())
          .then(data => setGetAmbulance(data))
          .then(data => console.log(data))
      }

      useEffect(() => {
        getRequest()
      }, [])

  return (
    <React.Fragment>
      <div className="page-content">
        <MetaTags>
          <title>Generate Ambulance Report</title>
        </MetaTags>
        <Container fluid={true} style={{marginTop:"20px"}}>

          <Row>
            <Col>
              <Card>
                <CardBody>

                <Row className="align-items-center">
                    <Col sm={6}>
                      <CardTitle className="h4">Get Ambulance Report</CardTitle>
                      <p className="card-title-desc">
                        Get All Ambulance Details as a Report 
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
                                    <Th>Vehicle No</Th>
                                    <Th data-priority="1">Vehicle Chassis No</Th>
                                    <Th data-priority="3">Driver Name</Th>
                                    <Th data-priority="1">Driver Licence</Th>
                                    <Th data-priority="3">Driver Contact No</Th>
                                    <Th data-priority="3">Description</Th>
                                </Tr>
                                </Thead>
                                <Tbody>
                                {getAmbulance?.map(item => (
                                    <Tr>
                                    <Th>
                                        {item.VNo}
                                    </Th>
                                    <Td>{item.VChassisno}</Td>
                                    <Td>{item.DName}</Td>
                                    <Td>{item.DLicence}</Td>
                                    <Td>{item.DContactno}</Td>
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

export default AmbulanceReport
