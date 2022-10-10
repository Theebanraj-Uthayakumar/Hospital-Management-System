/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import logo from "../Healistry.png";

function Dashbord() {
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
              {/* <ul class="header-menu nav">
                      <li class="nav-item">
                          <a href="javascript:void(0);" class="nav-link">
                              <i class="nav-link-icon fa fa-database"> </i>
                              Statistics
                          </a>
                      </li>
                      <li class="btn-group nav-item">
                          <a href="javascript:void(0);" class="nav-link">
                              <i class="nav-link-icon fa fa-edit"></i>
                              Projects
                          </a>
                      </li>
                      <li class="dropdown nav-item">
                          <a href="javascript:void(0);" class="nav-link">
                              <i class="nav-link-icon fa fa-cog"></i>
                              Settings
                          </a>
                      </li>
                  </ul> */}
            </div>
            <div className="app-header-right">
              <div className="header-btn-lg pr-0">
                <div className="widget-content p-0">
                  <div className="widget-content-wrapper">
                    <div className="widget-content-left  ml-3 header-user-info">
                      <div className="widget-heading">Theebanraj U.</div>
                      <div className="widget-subheading">
                        Full-Stack Developer
                      </div>
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
                    <a href="/" className="mm-active">
                      <i className="metismenu-icon pe-7s-rocket" />
                      Dashboard
                    </a>
                  </li>
                  <li className="app-sidebar__heading">Components</li>
                  <li>
                    <a href="/#">
                      <i className="metismenu-icon pe-7s-diamond" />
                      Doctors' Details
                      <i className="metismenu-state-icon pe-7s-angle-down caret-left" />
                    </a>
                    <ul>
                      <li>
                        <a href="/Doctors_Add">
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
                      Operation Details
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
                          <i className="metismenu-icon"></i> Camping |
                          Edit,Delete
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
                    <div>
                      Analytics Dashboard
                      <div className="page-title-subheading">
                        This is an example dashboard created using build-in
                        elements and components.
                      </div>
                    </div>
                  </div>
                </div>
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
                          Copyright 2022-2023 Healistry.io. All rights reserved
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

export default Dashbord;
