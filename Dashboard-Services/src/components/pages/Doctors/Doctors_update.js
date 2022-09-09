import React, { useState, useEffect } from "react";
import logo from "../../../Healistry.png";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Button from "@material-ui/core/Button";
import axios from "axios";
import swal from "sweetalert";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

function Doctors_update(props) {
  const classes = useStyles();
  const [doctorsid, setDoctorsID] = useState([]);
  const [doctors, setDoctors] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const getRequest = () => {
    axios.get("http://localhost:4000/doctors").then((response) => {
      setDoctors(response.data);
    });
  };

  useEffect(() => {
    getRequest();
  }, [doctors]);

  function deleteDoctor(_id) {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this data!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        swal("Poof! Your data has been successfully Deleted!", {
          icon: "success",
        });
        fetch(`http://localhost:4000/doctors/${_id}`, {
          method: "DELETE",
        })
          .then((response) => {
            response.json();
            swal(
              "Good job!",
              "Your data has been successfully Deleted",
              "success"
            );
          })
          .catch((error) => {
            swal("Sorry!", "Something Error...", "error");
          });
      }
    });
  }

  const history = useHistory();
  const [e_dname, setEDName] = useState([]);
  function editDoctor(_id) {
    console.log(_id);
    window.sessionStorage.setItem("ID", _id);
    axios.patch(`http://localhost:4000/doctors/${_id}`, {
      // setEDName(DName)
    });
    history.push("/Doctors_Edit");
  }

  return (
    <div>
      <div className="app-container app-theme-white body-tabs-shadow fixed-sidebar fixed-header">
        <div className="app-header header-shadow">
          <div className="app-header__logo">
            {/* <div className="logo-src" /> */}
            <img src={logo} style={{ width: 110 }} />
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
                    onChange={(e) => {
                      setSearchTerm(e.target.value);
                    }}
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
                        <a
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                          className="p-0 btn"
                        >
                          <i className="fa fa-angle-down ml-2 opacity-8" />
                        </a>
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
                    <a href="#" className="mm-active">
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
                    <a href="#">
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
                    <a href="#">
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
                    <a href="#">
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
                      Update Doctors Details
                      <div className="page-title-subheading">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Duis risus massa, tempor a imperdiet vel, faucibus sit
                        amet arcu.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Add Form Here */}
              <div className={classes.root}>
                {doctors
                  .filter((val) => {
                    if (searchTerm == "") {
                      return val;
                    } else if (
                      val.DName.toLocaleLowerCase().includes(
                        searchTerm.toLocaleLowerCase()
                      )
                    ) {
                      return val;
                    }
                  })
                  .map((item) => (
                    <Accordion>
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                      >
                        <Typography className={classes.heading}>
                          {item.DName}
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <table>
                          <tr>
                            <th>Full Name </th>
                            <td> - {item.DName}</td>
                          </tr>
                          <tr>
                            <th>Specialization </th>
                            <td> - {item.Speci}</td>
                          </tr>
                          <tr>
                            <th>SLMC </th>
                            <td> - {item.SLNC}</td>
                          </tr>
                          <tr>
                            <th>Experience </th>
                            <td> - {item.Exper}</td>
                          </tr>
                          <tr>
                            <th>Gender </th>
                            <td> - {item.Gender}</td>
                          </tr>
                          <tr>
                            <th>Current Position </th>
                            <td> - {item.CPosistion}</td>
                          </tr>
                          <tr>
                            <th>Working Hospital </th>
                            <td> - {item.WHospital}</td>
                          </tr>
                          <tr>
                            <th>Working History </th>
                            <td> - {item.WHistory}</td>
                          </tr>
                          <tr>
                            <th>Image </th>
                            <td> - {item.selectedFile}</td>
                          </tr>
                          {/* <tr>
                                                    <th>Likes </th>
                                                    <td> - {item.DName}</td>
                                                </tr> */}
                          <tr>
                            <th>Created At </th>
                            <td> - {item.createdAt}</td>
                          </tr>
                          {/* <tr>
                                                    <th>Created At </th>
                                                    <td> - {item._id}</td>
                                                </tr> */}
                          <tr>
                            <td>
                              <Button
                                variant="outlined"
                                onClick={() => editDoctor(item._id)}
                                color="primary"
                              >
                                Edit
                              </Button>
                            </td>
                            <td>
                              &nbsp;
                              <Button
                                variant="outlined"
                                onClick={() => deleteDoctor(item._id)}
                                color="secondary"
                              >
                                Delete
                              </Button>
                            </td>
                          </tr>
                        </table>
                      </AccordionDetails>
                    </Accordion>
                  ))}
              </div>
            </div>
            <div className="app-wrapper-footer">
              <div className="app-footer">
                <div className="app-footer__inner">
                  <div className="app-footer-left">
                    {/* <ul className="nav">
                      <li className="nav-item">
                        <a href="javascript:void(0);" className="nav-link">
                          Copyright 2019-2021 Healistry.io. All rights reserved
                        </a>
                      </li>
                    </ul> */}
                  </div>
                  <div className="app-footer-right">
                    <ul className="nav">
                      <li className="nav-item">
                        <a href="javascript:void(0);" className="nav-link">
                          Copyright 2019-2021 Healistry.io. All rights reserved
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
}

export default Doctors_update;