import React, { useState, useEffect, MovingComponent } from "react";
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

function Operation() {
  const classes = useStyles();
  const [operation, setOperations] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const getRequest = () => {
    axios.get("http://localhost:4000/api/v1/operation").then((response) => {
      setOperations(response.data);
    });
  };

  useEffect(() => {
    getRequest();
  }, [operation]);
  return (
    <div>
      <body>
        <center>
          <div className="heading">
            <h1>
              <marquee>OPERATION HISTORY DETAILS</marquee>
            </h1>
          </div>
          <div>
            <Container>
              <main>
                {/* shop-area */}
                <div className="shop-area gray-bg pt-10 pb-100">
                  <div className="custom-container-two">
                    <Breadcrumbs
                      aria-label="breadcrumb"
                      className="Breadcrumbs"
                    >
                      <Link color="inherit" href="./" className={classes.link}>
                        <HomeIcon className={classes.icon} />
                        Home
                      </Link>
                      <Typography color="textPrimary" className={classes.link}>
                        <GrainIcon className={classes.icon} />
                        Operation Details
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
                                <button
                                  className="btn btn-secondary"
                                  type="button"
                                >
                                  <SearchIcon />
                                </button>
                              </div>
                            </div>
                          </div>
                          <div
                            className="widget"
                            style={{ paddingBlock: "20px" }}
                          >
                            <div className="shop-widget-banner special-offer-banner">
                              {/* <a href="/#">
                          <img src="images/News01.png" alt="ImageImg" />
                        </a> */}
                            </div>
                          </div>
                          <div
                            className="widget"
                            style={{ paddingBlock: "20px" }}
                          >
                            <div className="shop-widget-banner special-offer-banner">
                              {/* <a href="/#">
                          <img src="images/News02.png" alt="ImageImg" />
                        </a> */}
                            </div>
                          </div>
                          <div
                            className="widget"
                            style={{ paddingBlock: "20px" }}
                          >
                            <div className="shop-widget-banner special-offer-banner">
                              {/* <a href="/#">
                          <img src="images/News03.png" alt="ImageImg" />
                        </a> */}
                            </div>
                          </div>
                          <div
                            className="widget"
                            style={{ paddingBlock: "20px" }}
                          >
                            <div className="shop-widget-banner special-offer-banner">
                              {/* <a href="/#">
                          <img src="images/News04.png" alt="ImageImg" />
                        </a> */}
                            </div>
                          </div>
                        </aside>
                      </div>
                      <div className="col-xl-9 col-lg-8">
                        {operation
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
                              {/* <div className="pagination-wrap_column1">
                                <img
                                  // src={DoctorImg}
                                  src={item.selectedFile}
                                  alt="Profile01"
                                  className="pagination-wrap_image"
                                  height="350px"
                                  width="200px"
                                />
                              </div> */}

                              {/* //Testing */}

                              <div className="ui link cards">
                                <div className="card">
                                  <div className="image">
                                    <img src="/images/avatar2/large/matthew.png" />
                                  </div>
                                  <div className="content">
                                    <div className="header">
                                      Matt Giampietro
                                    </div>
                                    <div className="meta">
                                      <a>Friends</a>
                                    </div>
                                    <div className="description">
                                      Matthew is an interior designer living in
                                      New York.
                                    </div>
                                  </div>
                                  <div className="extra content">
                                    <span className="right floated">
                                      Joined in 2013
                                    </span>
                                    <span>
                                      <i className="user icon" />
                                      75 Friends
                                    </span>
                                  </div>
                                </div>
                                <div className="card">
                                  <div className="image">
                                    <img src="/images/avatar2/large/molly.png" />
                                  </div>
                                  <div className="content">
                                    <div className="header">Molly</div>
                                    <div className="meta">
                                      <span className="date">Coworker</span>
                                    </div>
                                    <div className="description">
                                      Molly is a personal assistant living in
                                      Paris.
                                    </div>
                                  </div>
                                  <div className="extra content">
                                    <span className="right floated">
                                      Joined in 2011
                                    </span>
                                    <span>
                                      <i className="user icon" />
                                      35 Friends
                                    </span>
                                  </div>
                                </div>
                                <div className="card">
                                  <div className="image">
                                    <img src="/images/avatar2/large/elyse.png" />
                                  </div>
                                  <div className="content">
                                    <div className="header">Elyse</div>
                                    <div className="meta">
                                      <a>Coworker</a>
                                    </div>
                                    <div className="description">
                                      Elyse is a copywriter working in New York.
                                    </div>
                                  </div>
                                  <div className="extra content">
                                    <span className="right floated">
                                      Joined in 2014
                                    </span>
                                    <span>
                                      <i className="user icon" />
                                      151 Friends
                                    </span>
                                  </div>
                                </div>
                              </div>

                              {/* <div className="ui cards">
                                <div className="card">
                                  <div className="content">
                                    <div className="header">Doctor name :- {item.DName}</div>
                                    <div className="meta"> {item.OName}</div>
                                    <div className="meta"> {item.Date}</div>
                                    <div className="meta"> {item.Time}</div>
                                    <div className="description">
                                      Description{item.Description}
                                    </div>
                                  </div>
                                </div>
                                

                              </div> */}

                              {/* <div className="pagination-wrap_column2">
                          <h2>{item.DName}</h2>
                          <h5>{item.OName}</h5>
                          <table>
                            <tr>
                              <th>Date</th>
                              <td>{item.Date}</td>
                            
                            </tr>

                            <tr>
                              <th>Time</th>
                              <td>{item.Time}</td>
                            </tr>

                            <tr>
                              <th>Description </th>
                              <td colspan="3">{item.Description}</td>
                            </tr>
                            
                          </table>
                        </div> */}
                            </div>
                          ))}
                        {/* <div className="pagination-wrap">
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
                  </div> */}
                      </div>
                    </div>
                  </div>
                </div>
                {/* shop-area-end */}
              </main>
            </Container>
          </div>

          <div className="backround">
            <div className="searchpic">
              <div className="searchbar"></div>

              {/* <div className="pic">
                <img src="./images/sp1.PNG" />
              </div> */}
            </div>
          </div>
        </center>
      </body>
    </div>
  );
}

export default Operation;
