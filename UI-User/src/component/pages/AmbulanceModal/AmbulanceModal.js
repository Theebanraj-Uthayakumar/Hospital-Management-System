import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React, { useState, useEffect } from "react"

function AmbulanceModal(props) {
    const AmbulanceID = window.sessionStorage.getItem("AmbulanceID");

    const [Ambulance, setAmbulance] = useState([]);

    const getRequest = () => {
        fetch(`http://localhost:4000/api/v1/ambulance/${AmbulanceID}`)
        .then(response => response.json())
        .then(data => setAmbulance(data))
        .then(data => console.log(data))
      };
    
      useEffect(() => {
        getRequest();
      });

  return (
        <Modal
        {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                {Ambulance.VNo}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="center">

                    <h4>Vehicle Chassis No</h4>
                    <p>{Ambulance.VChassisno}</p>

                    <h4>Driver Licence</h4>
                    <p>{Ambulance.DLicence}</p>

                    <h4>Description</h4>
                    <p>{Ambulance.Description}</p>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
            </Modal>     
  );
}

export default AmbulanceModal