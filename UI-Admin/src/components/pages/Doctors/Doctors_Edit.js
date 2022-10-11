import React, { useState, useEffect } from "react";
import axios from "axios";
import logo from "../../../Healistry.png";
import Form from "react-bootstrap/Form";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Radio from "@material-ui/core/Radio";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import "bootstrap/dist/css/bootstrap.min.css";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
// import Base64 from 'react-file-base64';

const Doctors_add = (props, errors) => {
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

  const [DName, setName] = useState("");
  const [Speci, setSpecialization] = useState("");
  const [SLNC, setSlnc] = useState("");
  const [Exper, setExperiance] = useState("");
  const [Gender, setGender] = useState("");
  const [CPosistion, setCposistion] = useState("");
  const [WHospital, setWhospital] = useState("");
  const [WHistory, setWhistory] = useState("");

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const id = window.sessionStorage.getItem("ID");
  console.log("ID from update page", id);

  const [doctors, setDoctors] = useState([]);

  const getRequest = () => {
    axios.get(`http://localhost:4000/api/v1/doctor/${id}`)
    .then((response) => {
      // console.log(response.data)
      // console.log(response.data.name)
      // console.log(data.name)
      setDoctors(response.data);
    });
  };

  useEffect(() => {
    getRequest();
  });

  // console.log(doctors.DName);
  // CreateDoctor();

  function CreateDoctor() {
    setError(null);
    setLoading(true);

    // let item = { name, specialization, slnc, experiance, gender, cposistion, whospital, whistory, image }
    // console.log(item);

    axios
      .put(`http://localhost:4000/doctors/${id}`, {
        DName: DName,
        Speci: Speci,
        SLNC: SLNC,
        Exper: Exper,
        Gender: Gender,
        CPosistion: CPosistion,
        WHospital: WHospital,
        WHistory: WHistory,
        // selectedFile: fromDate
        // selectedFile: image
      })
      .then((response) => {
        setLoading(false);
        alert("Your data has been successfully added...");
        window.location.reload();
      })
      .catch((error) => {
        setLoading(false);
        alert("Sorry, Something Error...");
      });
  }

  return (
    <div>
      <div className="app-container app-theme-white body-tabs-shadow fixed-sidebar fixed-header">
        <div className="app-header header-shadow">
          <div className="app-header__logo">
            {/* <div className="logo-src" /> */}
            <img src={logo} style={{ width: 110 }} alt="logo"/>
            {/* <div style={{ fontFamily: "lyncer", fontSize: "10" }}>Healistry</div> */}
            <div className="header__pane ml-auto">
              <div>
                <button
                  type="button"
                  className="hamburger close-sidebar-btn hamburger--elastic"
                  data-class="closed-sidebar"
                >
                  <span className="hamburger-box">
                    <span className="hamburger-inner" />
                  </span>
                </button>
              </div>
            </div>
          </div>
          <div className="app-header__mobile-menu">
            <div>
              <button
                type="button"
                className="hamburger hamburger--elastic mobile-toggle-nav"
              >
                <span className="hamburger-box">
                  <span className="hamburger-inner" />
                </span>
              </button>
            </div>
          </div>
          <div className="app-header__menu">
            <span>
              <button
                type="button"
                className="btn-icon btn-icon-only btn btn-primary btn-sm mobile-toggle-header-nav"
              >
                <span className="btn-icon-wrapper">
                  <i className="fa fa-ellipsis-v fa-w-6" />
                </span>
              </button>
            </span>
          </div>
          <div className="app-header__content">
            <div className="app-header-left">
              <div className="search-wrapper">
                <div className="input-holder">
                  <input
                    type="text"
                    className="search-input"
                    placeholder="Type to search"
                  />
                  <button className="search-icon">
                    <span />
                  </button>
                </div>
                <button className="close" />
              </div>
            </div>
            <div className="app-header-right">
              <div className="header-btn-lg pr-0">
                <div className="widget-content p-0">
                  <div className="widget-content-wrapper">
                    <div className="widget-content-left">
                      <div className="btn-group">
                        {/* <a
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                          className="p-0 btn"
                        >
                          <i className="fa fa-angle-down ml-2 opacity-8" />
                        </a> */}
                        <div
                          tabIndex={-1}
                          role="menu"
                          aria-hidden="true"
                          className="dropdown-menu dropdown-menu-right"
                        >
                          <button
                            type="button"
                            tabIndex={0}
                            className="dropdown-item"
                          >
                            User Account
                          </button>
                          <button
                            type="button"
                            tabIndex={0}
                            className="dropdown-item"
                          >
                            Settings
                          </button>
                          <h6 tabIndex={-1} className="dropdown-header">
                            Header
                          </h6>
                          <button
                            type="button"
                            tabIndex={0}
                            className="dropdown-item"
                          >
                            Actions
                          </button>
                          <div tabIndex={-1} className="dropdown-divider" />
                          <button
                            type="button"
                            tabIndex={0}
                            className="dropdown-item"
                          >
                            Dividers
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="widget-content-left  ml-3 header-user-info">
                      <div className="widget-heading">Theebanraj U.</div>
                      <div className="widget-subheading">
                        Full-Stack Developer
                      </div>
                    </div>
                    <div className="widget-content-right header-user-info ml-3">
                      <button
                        type="button"
                        className="btn-shadow p-1 btn btn-primary btn-sm show-toastr-example"
                      >
                        <i className="fa text-white fa-calendar pr-1 pl-1" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="app-main">
          <div className="app-sidebar sidebar-shadow">
            <div className="app-header__logo">
              <div className="logo-src" />
              <div className="header__pane ml-auto">
                <div>
                  <button
                    type="button"
                    className="hamburger close-sidebar-btn hamburger--elastic"
                    data-class="closed-sidebar"
                  >
                    <span className="hamburger-box">
                      <span className="hamburger-inner" />
                    </span>
                  </button>
                </div>
              </div>
            </div>
            <div className="app-header__mobile-menu">
              <div>
                <button
                  type="button"
                  className="hamburger hamburger--elastic mobile-toggle-nav"
                >
                  <span className="hamburger-box">
                    <span className="hamburger-inner" />
                  </span>
                </button>
              </div>
            </div>
            <div className="app-header__menu">
              <span>
                <button
                  type="button"
                  className="btn-icon btn-icon-only btn btn-primary btn-sm mobile-toggle-header-nav"
                >
                  <span className="btn-icon-wrapper">
                    <i className="fa fa-ellipsis-v fa-w-6" />
                  </span>
                </button>
              </span>
            </div>
            <div className="scrollbar-sidebar">
              <div className="app-sidebar__inner">
              <ul className="vertical-nav-menu">
                  <li className="app-sidebar__heading">Dashboards</li>
                  <li>
                    <a href="/">
                      <i className="metismenu-icon pe-7s-rocket" />
                      Dashboard
                    </a>
                  </li>
                  <li className="app-sidebar__heading">Components</li>
                  <li>
                    <a href="/#" className="mm-active">
                      <i className="metismenu-icon pe-7s-diamond" />
                      Doctors' Details
                      <i className="metismenu-state-icon pe-7s-angle-down caret-left" />
                    </a>
                    <ul>
                      <li>
                        <a href="/Doctors_Add" className="mm-active">
                          <i className="metismenu-icon" />
                          Doctors | Add
                        </a>
                      </li>
                      <li>
                        <a href="/Doctors_update">
                          <i className="metismenu-icon"></i> Doctors |
                          Edit,Delete
                        </a>
                      </li>
                    </ul>
                  </li>
                  
                  <li>
                    <a href="/#">
                      <i className="metismenu-icon pe-7s-diamond" />
                      Ambulance Details
                      <i className="metismenu-state-icon pe-7s-angle-down caret-left" />
                    </a>
                    <ul>
                      <li>
                        <a href="/Ambulance_Add">
                          <i className="metismenu-icon" />
                          Ambulance | Add
                        </a>
                      </li>
                      <li>
                        <a href="/Ambulance_update">
                          <i className="metismenu-icon"></i> Ambulance |
                          Edit,Delete
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="/#">
                      <i className="metismenu-icon pe-7s-diamond" />
                      Camping Details
                      <i className="metismenu-state-icon pe-7s-angle-down caret-left" />
                    </a>
                    <ul>
                      <li>
                        <a href="/Camping_Add">
                          <i className="metismenu-icon" />
                          Camping | Add
                        </a>
                      </li>
                      <li>
                        <a href="/Camping_update">
                          <i className="metismenu-icon"></i> Camping |
                          Edit,Delete
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="/#">
                      <i className="metismenu-icon pe-7s-diamond" />
                      Operation History Details
                      <i className="metismenu-state-icon pe-7s-angle-down caret-left" />
                    </a>
                    <ul>
                      <li>
                        <a href="/Operationadd">
                          <i className="metismenu-icon" />
                          Operation | Add
                        </a>
                      </li>
                      <li>
                        <a href="/Operationupdate">
                          <i className="metismenu-icon"></i> Operation | Update
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="app-main__outer">
            <div className="app-main__inner">
              <div className="app-page-title">
                <div className="page-title-wrapper">
                  <div className="page-title-heading">
                    <div className="page-title-icon">
                      <i className="pe-7s-car icon-gradient bg-mean-fruit"></i>
                    </div>
                    <div>
                      Add Doctors Details
                      <div className="page-title-subheading">
                        This is an example dashboard created using build-in
                        elements and components.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Add Form Here */}
              <div className={classes.root}>
                <Paper className={classes.paper}>
                  <h2 className="Login_heading">Add Details</h2>
                  <Form encType="multipart/form-data">
                    <Form.Group as={Row} className="mb-3" controlId="">
                      <Form.Label column sm={3}>
                        Full Name
                      </Form.Label>
                      <Col sm={9}>
                        <Form.Control
                          type="text"
                          value={doctors.DName}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Full Name"
                        />
                      </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="">
                      <Form.Label column sm={3}>
                        SLNC Registation Number
                      </Form.Label>
                      <Col sm={9}>
                        <Form.Control
                          type="number"
                          value={doctors.SLNC}
                          onChange={(e) => setSlnc(e.target.value)}
                          placeholder="SLNC Registation Number"
                        />
                      </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="">
                      <Form.Label column sm={3}>
                        Specialization
                      </Form.Label>
                      <Col sm={9}>
                        <Form.Control
                          type="text"
                          value={doctors.Speci}
                          onChange={(e) => setSpecialization(e.target.value)}
                          placeholder="Specialization"
                        />
                      </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="">
                      <Form.Label column sm={3}>
                        Current Position
                      </Form.Label>
                      <Col sm={9}>
                        <Form.Control
                          type="text"
                          value={doctors.CPosistion}
                          onChange={(e) => setCposistion(e.target.value)}
                          placeholder="Current Position"
                        />
                      </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="">
                      <Form.Label column sm={3}>
                        Working Hospital
                      </Form.Label>
                      <Col sm={9}>
                        <Form.Control
                          type="text"
                          value={doctors.WHospital}
                          onChange={(e) => setWhospital(e.target.value)}
                          placeholder="Working Hospital"
                        />
                      </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="">
                      <Form.Label column sm={3}>
                        Gender
                      </Form.Label>
                      <Col sm={9}>
                        <RadioGroup
                          row
                          aria-label="position"
                          value={doctors.Gender}
                          onChange={(e) => setGender(e.target.value)}
                          name="position"
                          defaultValue="top"
                        >
                          <FormControlLabel
                            value="Male"
                            control={<Radio color="primary" />}
                            label="Male"
                          />
                          <FormControlLabel
                            value="Female"
                            control={<Radio color="primary" />}
                            label="Female"
                          />
                        </RadioGroup>
                      </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="">
                      <Form.Label column sm={3}>
                        Working History
                      </Form.Label>
                      <Col sm={9}>
                        <Form.Control
                          type="text"
                          value={doctors.WHistory}
                          onChange={(e) => setWhistory(e.target.value)}
                          placeholder="Working History"
                        />
                      </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="">
                      <Form.Label column sm={3}>
                        Experience
                      </Form.Label>
                      <Col sm={9}>
                        <Form.Control
                          type="text"
                          value={doctors.Exper}
                          onChange={(e) => setExperiance(e.target.value)}
                          placeholder="Experience"
                        />
                      </Col>
                    </Form.Group>
                    {/* <Form.Group as={Row} className="mb-3" controlId="">
                      <Form.Label column sm={3}>
                        Image
                      </Form.Label>
                      <Col sm={9}> */}
                        {/* <Form.Control type="file" value={doctors.selectedFile} onChange={(e) => setImage(e.target.value)} /> */}
                      {/* </Col> */}
                      {/* <Col sm={9}>
                                                <Form.Control type="file" name="upload" onChange={onFileChange} />
                                            </Col> */}
                    {/* </Form.Group> */}
                    <center>
                      <div className="button">
                        {/* <input type="button" className="Login-Button" onClick={CreateDoctor} value={loading ? "Loading... Please Wait!" : "SUBMIT"} disabled={loading} className="btn btn-block app-sidebar__heading" /> */}
                        <input
                          type="button"
                          className="Login-Button"
                          onClick={CreateDoctor}
                          value={loading ? "Loading... Please Wait!" : "SUBMIT"}
                          disabled={loading}
                        />
                      </div>
                    </center>
                  </Form>
                </Paper>
              </div>
            </div>
            <div className="app-wrapper-footer">
              <div className="app-footer">
                <div className="app-footer__inner">
                  <div className="app-footer-left">
                    <ul className="nav">
                      <li className="nav-item">
                        <a href="/#" className="nav-link">
                          Footer Link 1
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="/#" className="nav-link">
                          Footer Link 2
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="app-footer-right">
                    <ul className="nav">
                      <li className="nav-item">
                        <a href="/#" className="nav-link">
                          Footer Link 3
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="/#" className="nav-link">
                          <div className="badge badge-success mr-1 ml-0">
                            <small>NEW</small>
                          </div>
                          Footer Link 4
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Doctors_add;