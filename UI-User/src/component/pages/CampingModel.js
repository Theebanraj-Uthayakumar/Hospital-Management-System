import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React, { useState, useEffect } from "react"

function CampingModal(props) {
    const CampingID = window.sessionStorage.getItem("CampingID");

    const [Camping, setCamping] = useState([]);

    const getRequest = () => {
        fetch(`http://localhost:4000/api/v1/camping/${CampingID}`)
        .then(response => response.json())
        .then(data => setCamping(data))
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
                Camping Details
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h3>{Camping.HName}</h3>
                <h4>{Camping.Venue}</h4>
                <h4>{Camping.Time}</h4>
                <h4>{Camping.Date}</h4>
                <h4>{Camping.CNumber}</h4>
                <h4>{Camping.Description}</h4>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
            </Modal>     
  );
}

export default CampingModal