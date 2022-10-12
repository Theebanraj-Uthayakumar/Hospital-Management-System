import React, { useState, useEffect } from "react";
import Container from "@material-ui/core/Container";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";
import HomeIcon from "@material-ui/icons/Home";
import GrainIcon from "@material-ui/icons/Grain";
import axios from "axios";
import SearchIcon from "@material-ui/icons/Search";
// import ReactPaginate from "react-paginate";
// import DoctorImg from "./../../../public/images/doctor.jpeg";

const useStyles = makeStyles((theme) => ({
  link: {
    display: "flex",
  },
  icon: {
    marginRight: theme.spacing(0.5),
    width: 20,
    height: 20,
  },
}));

// function handleClick(event) {
//   event.preventDefault();
//   console.info("You clicked a breadcrumb.");
// }

function Doctor() {
  const classes = useStyles();
  const [searchTerm, setSearchTerm] = useState("");
  const [doctors, setDoctors] = useState([]);

  const getRequest = () => {
    axios.get("http://localhost:4000/api/v1/doctor").then((response) => {
      setDoctors(response.data);
    });
  };

  useEffect(() => {
    getRequest();
  }, [doctors]);

  // const [doc, setDoc] = useState(JsonData.slice(0, 50));
  // const [pageNumber, setPageNumber] = useState(0);
  // const doctorsPerPage = 10;
  // const pagesVisited = pageNumber * doctorsPerPage;
  // const displayDoctors = doctors.slice(pagesVisited, pagesVisited + doctorsPerPage).map(doctors) =>{return()};

  // console.log(doctors)
  return (
    <div>
      <Container>
        <main>
          {/* shop-area */}
          <div className="shop-area gray-bg pt-10 pb-100">
            <div className="custom-container-two">
              <Breadcrumbs aria-label="breadcrumb" className="Breadcrumbs">
                <Link color="inherit" href="./" className={classes.link}>
                  <HomeIcon className={classes.icon} />
                  Home
                </Link>
                <Typography color="textPrimary" className={classes.link}>
                  <GrainIcon className={classes.icon} />
                  Doctors Details
                </Typography>
              </Breadcrumbs>
              <div className="row justify-content-center">
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8 order-2 order-lg-0">
                  <aside className="shop-sidebar">
                    <div className="widget shop-widget mb-30">
                      <div className="shop-widget-title">
                        <h6 className="title">Quick Search</h6>
                      </div>
                      <div className="input-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Type to Search here"
                          onChange={(e) => {
                            setSearchTerm(e.target.value);
                          }}
                        />
                        <div className="input-group-append">
                          <button className="btn btn-secondary" type="button">
                            <SearchIcon />
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="widget" style={{ paddingBlock: "20px" }}>
                      <div className="shop-widget-banner special-offer-banner">
                        <a href="/#">
                          <img src="images/News01.png" alt="ImageImg" />
                        </a>
                      </div>
                    </div>
                    <div className="widget" style={{ paddingBlock: "20px" }}>
                      <div className="shop-widget-banner special-offer-banner">
                        <a href="/#">
                          <img src="images/News02.png" alt="ImageImg" />
                        </a>
                      </div>
                    </div>
                    <div className="widget" style={{ paddingBlock: "20px" }}>
                      <div className="shop-widget-banner special-offer-banner">
                        <a href="/#">
                          <img src="images/News03.png" alt="ImageImg" />
                        </a>
                      </div>
                    </div>
                    <div className="widget" style={{ paddingBlock: "20px" }}>
                      <div className="shop-widget-banner special-offer-banner">
                        <a href="/#">
                          <img src="images/News04.png" alt="ImageImg" />
                        </a>
                      </div>
                    </div>
                  </aside>
                </div>
                <div className="col-xl-9 col-lg-8">
                  {doctors
                    .filter((val) => {
                      if (searchTerm === "") {
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
                      <div className="pagination-wrap">
                        <div className="pagination-wrap_column1">
                          <img
                            // src={DoctorImg}
                            src={item.selectedFile}
                            alt="Profile01"
                            className="pagination-wrap_image"
                            height="350px"
                            width="200px"
                          />
                        </div>
                        <div className="pagination-wrap_column2">
                          <h2>{item.DName}</h2>
                          <p>{item.Speci}</p>
                          <table>
                            <tr>
                              <th>SLMC</th>
                              <td>{item.SLNC}</td>
                              <th>Gender</th>
                              <td>{item.Gender}</td>
                            </tr>
                            <tr>
                              <th>Experience</th>
                              <td colspan="3">{item.Exper}</td>
                            </tr>
                            <tr>
                              <th>Current Position</th>
                              <td>{item.CPosistion}</td>
                              <th>Working Hospital</th>
                              <td>{item.WHospital}</td>
                            </tr>
                            <tr>
                              <th>Working History</th>
                              <td colspan="3">{item.WHistory}</td>
                            </tr>
                            {/* <tr>
                              <th colspan="2">
                                <p>{item.createdAt}</p>
                              </th>
                              <td colspan="2">
                                <p className="Like">
                                  <ThumbUpAltIcon /> Like
                                </p>
                              </td>
                            </tr> */}
                          </table>
                        </div>
                      </div>
                    ))}
                  <div className="pagination-wrap">
                    <ul>
                      <li className="prev">
                        <a href="/#">
                          <i className="fas fa-long-arrow-alt-left" /> Prev
                        </a>
                      </li>
                      <li>
                        <a href="/#">1</a>
                      </li>
                      <li className="active">
                        <a href="/#">2</a>
                      </li>
                      <li>
                        <a href="/#">3</a>
                      </li>
                      <li>
                        <a href="/#">4</a>
                      </li>
                      <li>
                        <a href="/#">...</a>
                      </li>
                      <li>
                        <a href="/#">10</a>
                      </li>
                      <li className="next">
                        <a href="/#">
                          Next <i className="fas fa-long-arrow-alt-right" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* shop-area-end */}
        </main>
      </Container>
    </div>
  );
}

export default Doctor;
