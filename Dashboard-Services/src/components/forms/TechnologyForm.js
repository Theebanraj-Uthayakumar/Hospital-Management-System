import React from "react";
import ImageUpload from "./ImageUpload";
import Form from "react-bootstrap/Form";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";

import "bootstrap/dist/css/bootstrap.min.css";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";

const TechnologyForm = (props) => {
  const { submitHandler, technology, handleChange, setTechnology, validated } =
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

  const {
    machineName,
    machineId,
    precaution,
    eta,
    purpose,
    procedure,
    price,
    image,
  } = technology;

  return (
    <div>
      {/* <form onSubmit={submitHandler}>
        <div className="form-group">
          <label>Name of the machine :</label>
          <input
            name="machineName"
            value={machineName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Machine Id :</label>
          <input
            name="machineId"
            type="text"
            value={machineId}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>purpose of the machine :</label>
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
          <label>estimated time :</label>
          <input name="eta" required value={eta} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>procedure:</label>
          <input
            name="procedure"
            required
            value={procedure}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>precaution:</label>
          <input
            name="precaution"
            required
            value={precaution}
            onChange={handleChange}
          />
        </div>

        <ImageUpload
          name="image"
          value={image}
          setfile={setTechnology}
          file={technology}
        />
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
                Machine Name
              </Form.Label>
              <Col sm={9}>
                <Form.Control
                  type="text"
                  placeholder="Machine Name"
                  name="machineName"
                  value={machineName}
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
                Machine Id
              </Form.Label>
              <Col sm={9}>
                <Form.Control
                  type="number"
                  placeholder=" Machine Id"
                  name="machineId"
                  type="text"
                  value={machineId}
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
                Estimated time
              </Form.Label>
              <Col sm={9}>
                <Form.Control
                  type="number"
                  placeholder="Estimated time"
                  name="eta"
                  required
                  value={eta}
                  onChange={handleChange}
                />
                <Form.Control.Feedback type="invalid">
                  required
                </Form.Control.Feedback>
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="">
              <Form.Label column sm={3}>
                Procedure
              </Form.Label>
              <Col sm={9}>
                <Form.Control
                  value={procedure}
                  name="procedure"
                  as="textarea"
                  placeholder=" Procedure"
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
                Precation
              </Form.Label>
              <Col sm={9}>
                <Form.Control
                  as="textarea"
                  placeholder="Precation"
                  name="precaution"
                  required
                  value={precaution}
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
                  setfile={setTechnology}
                  file={technology}
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

export default TechnologyForm;
