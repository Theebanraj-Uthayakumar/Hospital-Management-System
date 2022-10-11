import React from "react";
import logo from "../../Healistry.png";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="app-container app-theme-white body-tabs-shadow fixed-sidebar fixed-header">
      <div className="app-header header-shadow">
        <div className="app-header__logo">
          {/* <div className="logo-src" /> */}
          <img src={logo} style={{ width: 110 }} alt="img"/>
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
                  <a href="http://localhost:3001/">
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
                        <i className="metismenu-icon"></i> Doctors | Edit,Delete
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="/#">
                    <i className="metismenu-icon pe-7s-diamond" />
                    Hospitals Details
                    <i className="metismenu-state-icon pe-7s-angle-down caret-left" />
                  </a>
                  <ul>
                    <li>
                      <a href="/#">
                        <i className="metismenu-icon" />
                        Hospitals | Add
                      </a>
                    </li>
                    <li>
                      <a href="/#">
                        <i className="metismenu-icon"></i> Hospitals |
                        Edit,Delete
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="/#">
                    <i className="metismenu-icon pe-7s-diamond" />
                    Cleaning Company
                    <i className="metismenu-state-icon pe-7s-angle-down caret-left" />
                  </a>
                  <ul>
                    <li>
                      <a href="cleaning_add">
                        <i className="metismenu-icon" />
                        Cleaning Company | Add
                      </a>
                    </li>
                    <li>
                      <a href="cleaning_update">
                        <i className="metismenu-icon"></i> Cleaning Co... |
                        Update
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to="#">
                    <i className="metismenu-icon pe-7s-diamond" />
                    Technology Details
                    <i className="metismenu-state-icon pe-7s-angle-down caret-left" />
                  </Link>
                  <ul>
                    <li>
                      <Link to="/technology/add">
                        <i className="metismenu-icon" />
                        Technology | Add
                      </Link>
                    </li>
                    <li>
                      <Link to="/technology/update">
                        <i className="metismenu-icon"></i> Technology |
                        Edit,Delete
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to="#">
                    <i className="metismenu-icon pe-7s-diamond" />
                    Facilty Details
                    <i className="metismenu-state-icon pe-7s-angle-down caret-left" />
                  </Link>
                  <ul>
                    <li>
                      <Link to="/facility/add">
                        <i className="metismenu-icon" />
                        Facility | Add
                      </Link>
                    </li>
                    <li>
                      <Link to="/facility/update">
                        <i className="metismenu-icon"></i> Facility |
                        Edit,Delete
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to="#">
                    <i className="metismenu-icon pe-7s-display2" />
                    Tables
                  </Link>
                </li>
                <li>
                  <a href="/#">
                    <i className="metismenu-icon pe-7s-display2" />
                    Tables
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
