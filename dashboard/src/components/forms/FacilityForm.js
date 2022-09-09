import React from "react";
import ImageUpload from "./ImageUpload";
import Form from "react-bootstrap/Form";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";

import "bootstrap/dist/css/bootstrap.min.css";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
const FacilityForm = (props) => {
  const { submitHandler, facility, handleChange, setFacility, validated } =
    props;

  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      margin: 50,
    },
    paper: {
      padding: theme.spacing(5),
      margin: "auto",
      maxWidth: 1000,
    },
  }));

  const classes = useStyles();

  const { facilityName, facilityId, purpose, price, image, features } =
    facility;

  return (
    <div>
      {/* <form onSubmit={submitHandler}>
        <div className="form-group">
          <label>Name of the facility :</label>
          <input
            name="facilityName"
            value={facilityName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>facility id :</label>
          <input
            type="text"
            name="facilityId"
            value={facilityId}
            required
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>purpose :</label>
          <input
            name="purpose"
            required
            value={purpose}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>price :</label>
          <input name="price" required value={price} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>features :</label>
          <input
            name="features"
            required
            value={features}
            onChange={handleChange}
          />
        </div>

        <ImageUpload name="image" setfile={setFacility} file={facility} />
        <div className="form-group">
          <button type="submit"> save </button>
        </div>
      </form> */}

      <div className={classes.root}>
        <Paper className={classes.paper}>
          <h2 className="Login_heading">Add Details</h2>
          <Form noValidate validated={validated} onSubmit={submitHandler}>
            <Form.Group as={Row} className="mb-3" controlId="">
              <Form.Label column sm={3}>
                Facility Name
              </Form.Label>
              <Col sm={9}>
                <Form.Control
                  type="text"
                  placeholder="Facility Name"
                  name="facilityName"
                  value={facilityName}
                  onChange={handleChange}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  required
                </Form.Control.Feedback>
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="">
              <Form.Label column sm={3}>
                Facility Id
              </Form.Label>
              <Col sm={9}>
                <Form.Control
                  type="number"
                  placeholder=" Facility Id"
                  name="facilityId"
                  value={facilityId}
                  required
                  onChange={handleChange}
                />
                <Form.Control.Feedback type="invalid">
                  required
                </Form.Control.Feedback>
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="">
              <Form.Label column sm={3}>
                Purpose
              </Form.Label>
              <Col sm={9}>
                <Form.Control
                  as="textarea"
                  placeholder=" Purpose"
                  name="purpose"
                  required
                  value={purpose}
                  onChange={handleChange}
                />
                <Form.Control.Feedback type="invalid">
                  required
                </Form.Control.Feedback>
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="">
              <Form.Label column sm={3}>
                Price
              </Form.Label>
              <Col sm={9}>
                <Form.Control
                  type="number"
                  placeholder=" Price"
                  name="price"
                  required
                  value={price}
                  onChange={handleChange}
                />
                <Form.Control.Feedback type="invalid">
                  required
                </Form.Control.Feedback>
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="">
              <Form.Label column sm={3}>
                Features
              </Form.Label>
              <Col sm={9}>
                <Form.Control
                  as="textarea"
                  placeholder="Features"
                  name="features"
                  required
                  value={features}
                  onChange={handleChange}
                />
                <Form.Control.Feedback type="invalid">
                  required
                </Form.Control.Feedback>
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="">
              <Form.Label column sm={3}>
                Image
              </Form.Label>
              <Col sm={9}>
                <ImageUpload
                  name="image"
                  value={image}
                  setfile={setFacility}
                  file={facility}
                />
              </Col>
            </Form.Group>
            <center>
              <div className="button">
                <input
                  disabled={image.length === 0}
                  type="submit"
                  className="Login-Button"
                  value="Submit"
                  className="btn btn-block app-sidebar__heading"
                />
              </div>
            </center>
          </Form>
        </Paper>
      </div>
    </div>
  );
};

export default FacilityForm;
