import PropTypes from "prop-types"
import React, { useState, useEffect } from "react"
import { Row, Col, Collapse } from "reactstrap"
import { Link, withRouter } from "react-router-dom"
import classname from "classnames"

//i18n
import { withTranslation } from "react-i18next"

import { connect } from "react-redux"

const Navbar = props => {
  const [ui, setui] = useState(false)

  const [email, setemail] = useState(false)

  const [component, setcomponent] = useState(false)
  const [form, setform] = useState(false)
  const [table, settable] = useState(false)
  const [chart, setchart] = useState(false)
  const [icon, seticon] = useState(false)
  const [map, setmap] = useState(false)
  const [extra, setextra] = useState(false)
  const [auth, setauth] = useState(false)

  useEffect(() => {
    var matchingMenuItem = null
    var ul = document.getElementById("navigation")
    var items = ul.getElementsByTagName("a")
    for (var i = 0; i < items.length; ++i) {
      if (props.location.pathname === items[i].pathname) {
        matchingMenuItem = items[i]
        break
      }
    }
    if (matchingMenuItem) {
      activateParentDropdown(matchingMenuItem)
    }
  })
  function activateParentDropdown(item) {
    item.classList.add("active")
    const parent = item.parentElement
    if (parent) {
      parent.classList.add("active") // li
      const parent2 = parent.parentElement
      parent2.classList.add("active") // li
      const parent3 = parent2.parentElement
      if (parent3) {
        parent3.classList.add("active") // li
        const parent4 = parent3.parentElement
        if (parent4) {
          parent4.classList.add("active") // li
          const parent5 = parent4.parentElement
          if (parent5) {
            parent5.classList.add("active") // li
            const parent6 = parent5.parentElement
            if (parent6) {
              parent6.classList.add("active") // li
            }
          }
        }
      }
    }
    return false
  }

  return (
    <React.Fragment>
      <div className="topnav">
        <div className="container-fluid">
          <nav
            className="navbar navbar-light navbar-expand-lg topnav-menu"
            id="navigation"
          >
            <Collapse
              isOpen={props.leftMenu}
              className="navbar-collapse"
              id="topnav-menu-content"
            >
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="dashboard"
                  >
                    <i className="ti-home me-2" />
                    {props.t("Dashboard")} {props.menuOpen}
                  </Link>

                </li>

                <li className="nav-item dropdown mega-dropdown">
                  <Link
                    to="/#"
                    onClick={e => {
                      e.preventDefault()
                      setui(!ui)
                    }}
                    className="nav-link dropdown-toggle arrow-none"
                  >
                    <i className="ti-package me-2"></i>
                    {props.t("UI Elements")}
                  </Link>
                  <div
                    className={classname(
                      "dropdown-menu mega-dropdown-menu px-2 dropdown-menu-start dropdown-mega-menu-xl",
                      { show: ui }
                    )}
                  >
                    <Row>
                      <Col lg={4}>
                        <div>
                          <Link to="ui-alerts" className="dropdown-item">
                            {props.t("Alerts")}
                          </Link>
                          <Link to="ui-buttons" className="dropdown-item">
                            {props.t("Buttons")}
                          </Link>
                          <Link to="ui-cards" className="dropdown-item">
                            {props.t("Cards")}
                          </Link>
                          <Link to="ui-carousel" className="dropdown-item">
                            {props.t("Carousel")}
                          </Link>
                          <Link to="ui-dropdowns" className="dropdown-item">
                            {props.t("Dropdowns")}
                          </Link>
                          <Link to="ui-grid" className="dropdown-item">
                            {props.t("Grid")}
                          </Link>
                          <Link to="ui-images" className="dropdown-item">
                            {props.t("Images")}
                          </Link>
                        </div>
                      </Col>
                      <Col lg={4}>
                        <div>
                          <Link to="ui-lightbox" className="dropdown-item">
                            {props.t("Lightbox")}
                          </Link>
                          <Link to="ui-modals" className="dropdown-item">
                            {props.t("Modals")}
                          </Link>
                          <Link to="ui-rangeslider" className="dropdown-item">
                            {props.t("Range Slider")}
                          </Link>
                          <Link
                            to="ui-session-timeout"
                            className="dropdown-item"
                          >
                            {props.t("Session Timeout")}
                          </Link>
                          <Link to="ui-progressbars" className="dropdown-item">
                            {props.t("Progress Bars")}
                          </Link>
                          <Link to="ui-sweet-alert" className="dropdown-item">
                            {props.t("Sweet-Alert")}
                          </Link>
                          <Link
                            to="ui-tabs-accordions"
                            className="dropdown-item"
                          >
                            {props.t("Tabs & Accordions")}
                          </Link>
                        </div>
                      </Col>
                      <Col lg={4}>
                        <div>
                          <Link to="ui-typography" className="dropdown-item">
                            {props.t("Typography")}
                          </Link>
                          <Link to="ui-video" className="dropdown-item">
                            {props.t("Video")}
                          </Link>
                          <Link to="ui-general" className="dropdown-item">
                            {props.t("General")}
                          </Link>
                          <Link to="ui-colors" className="dropdown-item">
                            {props.t("Colors")}
                          </Link>
                          <Link to="ui-rating" className="dropdown-item">
                            {props.t("Rating")}
                          </Link>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </li>

                <li className="nav-item dropdown">
                  <Link
                    to="/#"
                    className="nav-link dropdown-toggle arrow-none"
                    onClick={e => {
                      e.preventDefault()
                      setcomponent(!component)
                    }}
                  >
                    <i className="ti-harddrives me-2"></i>
                    {props.t("Components")}
                  </Link>
                  <div
                    className={classname("dropdown-menu", { show: component })}
                  >
                    <div className="dropdown">
                      <Link
                        to="/#"
                        className="dropdown-item dropdown-toggle arrow-none"
                        onClick={e => {
                          e.preventDefault()
                          setemail(!email)
                        }}
                      >
                        {props.t("Email")} <div className="arrow-down"></div>
                      </Link>
                      <div
                        className={classname("dropdown-menu", { show: email })}
                      >
                        <Link to="email-inbox" className="dropdown-item">
                          {props.t("Inbox")}
                        </Link>
                        <Link to="email-read" className="dropdown-item">
                          {props.t("Read Email")}
                        </Link>
                        <Link to="/email-compose" className="dropdown-item">{props.t("Email Compose")} </Link>
                      </div>
                    </div>
                    <Link to="calendar" className="dropdown-item">
                      {props.t("Calendar")}
                    </Link>
                    <div className="dropdown">
                      <Link
                        to="/#"
                        className="dropdown-item dropdown-toggle arrow-none"
                        onClick={e => {
                          e.preventDefault()
                          setform(!form)
                        }}
                      >
                        {props.t("Forms")} <div className="arrow-down"></div>
                      </Link>
                      <div
                        className={classname("dropdown-menu", { show: form })}
                      >
                        <Link to="form-elements" className="dropdown-item">
                          {props.t("Form Elements")}
                        </Link>
                        <Link to="form-layouts" className="dropdown-item">
                          {props.t("Form Layouts")}
                        </Link>
                        <Link to="form-validation" className="dropdown-item">
                          {props.t("Form Validation")}
                        </Link>
                        <Link to="form-advanced" className="dropdown-item">
                          {props.t("Form Advanced")}
                        </Link>
                        <Link to="form-editors" className="dropdown-item">
                          {props.t("Form Editors")}
                        </Link>
                        <Link to="form-uploads" className="dropdown-item">
                          {props.t("Form File Upload")}{" "}
                        </Link>
                        <Link to="form-xeditable" className="dropdown-item">
                          {props.t("Form Xeditable")}
                        </Link>
                        <Link to="form-repeater" className="dropdown-item">
                          {props.t("Form Repeater")}
                        </Link>
                        <Link to="form-wizard" className="dropdown-item">
                          {props.t("Form Wizard")}
                        </Link>
                        <Link to="form-mask" className="dropdown-item">
                          {props.t("Form Mask")}
                        </Link>
                      </div>
                    </div>
                    <div className="dropdown">
                      <Link
                        to="/#"
                        className="dropdown-item dropdown-toggle arrow-none"
                        onClick={e => {
                          e.preventDefault()
                          setchart(!chart)
                        }}
                      >
                        {props.t("Charts")} <div className="arrow-down"></div>
                      </Link>
                      <div
                        className={classname("dropdown-menu", { show: chart })}
                      >
                        <Link to="chartist-charts" className="dropdown-item">
                          {" "}
                          {props.t("Chartjs Chart")}
                        </Link>

                        <Link to="e-charts" className="dropdown-item">
                          {" "}
                          {props.t("E Chart")}
                        </Link>

                        <Link to="/chartjs-charts" className="dropdown-item">
                          {" "}{props.t("Chartjs Chart")}</Link>

                        <Link to="apex-charts" className="dropdown-item">
                          {" "}
                          {props.t("Apex charts")}
                        </Link>


                        <Link to="sparkline-charts" className="dropdown-item">
                          {" "}
                          {props.t("Sparkline Chart")}
                        </Link>
                      </div>
                    </div>

                    <div className="dropdown">
                      <Link
                        to="/#"
                        className="dropdown-item dropdown-toggle arrow-none"
                        onClick={e => {
                          e.preventDefault()
                          settable(!table)
                        }}
                      >
                        {props.t("Tables")} <div className="arrow-down"></div>
                      </Link>
                      <div
                        className={classname("dropdown-menu", { show: table })}
                      >
                        <Link to="tables-basic" className="dropdown-item">
                          {props.t("Basic Tables")}
                        </Link>
                        <Link to="tables-datatable" className="dropdown-item">
                          {props.t("Data Tables")}
                        </Link>
                        <Link to="tables-responsive" className="dropdown-item">
                          {props.t("Responsive Table")}
                        </Link>
                        <Link to="tables-editable" className="dropdown-item">
                          {props.t("Editable Table")}
                        </Link>
                      </div>
                    </div>
                    <div className="dropdown">
                      <Link
                        to="/#"
                        className="dropdown-item dropdown-toggle arrow-none"
                        onClick={e => {
                          e.preventDefault()
                          seticon(!icon)
                        }}
                      >
                        {props.t("Icons")} <div className="arrow-down"></div>
                      </Link>
                      <div
                        className={classname("dropdown-menu", { show: icon })}
                      >
                        <Link
                          to="icons-materialdesign"
                          className="dropdown-item"
                        >
                          {props.t("Material Design")}
                        </Link>
                        <Link to="icons-fontawesome" className="dropdown-item">
                          {props.t("Font awesome")}{" "}
                        </Link>

                        <Link to="/icons-ion" className="dropdown-item">Ion Icons</Link>

                        <Link to="/icons-themify" className="dropdown-item">Themify Icons</Link>

                        <Link to="icons-dripicons" className="dropdown-item">
                          {props.t("Dripicons")}
                        </Link>

                        <Link to="/icons-typicons" className="dropdown-item">Typicons Icons</Link>

                      </div>
                    </div>
                    <div className="dropdown">
                      <Link
                        to="/#"
                        className="dropdown-item dropdown-toggle arrow-none"
                        onClick={e => {
                          e.preventDefault()
                          setmap(!map)
                        }}
                      >
                        {props.t("Maps")} <div className="arrow-down"></div>
                      </Link>
                      <div
                        className={classname("dropdown-menu", { show: map })}
                      >
                        <Link to="maps-google" className="dropdown-item">
                          {props.t("Google Maps")}{" "}
                        </Link>
                        <Link to="maps-vector" className="dropdown-item">
                          {props.t("Vector Maps")}{" "}
                        </Link>
                        <Link to="maps-leaflet" className="dropdown-item">
                          {props.t("Leaflet Maps")}{" "}
                        </Link>
                      </div>
                    </div>
                  </div>
                </li>

                <li className="nav-item dropdown mega-dropdown">
                  <Link
                    to="/#"
                    className="nav-link dropdown-toggle arrow-none"
                    onClick={e => {
                      e.preventDefault()
                      setauth(!auth)
                    }}
                  >
                    <i className="ti-archive me-2"></i>{" "}
                    {props.t("Authentication")}
                  </Link>
                  <div
                    className={classname("dropdown-menu mega-dropdown-menu px-2 dropdown-mega-menu-lg", { show: auth })}
                  >
                    <div className="row">
                      <div className="col-lg-6">
                        <div>
                          <Link to="pages-login" className="dropdown-item">
                            {props.t("Login")}
                          </Link>
                          <Link to="pages-register" className="dropdown-item">
                            {props.t("Register")}
                          </Link>
                          <Link to="page-recoverpw" className="dropdown-item">
                            {props.t("Recover Password")}
                          </Link>
                          <Link to="auth-lock-screen" className="dropdown-item">
                            {props.t("Lock Screen")}
                          </Link>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div>
                          <Link to="pages-login-2" className="dropdown-item">
                            {props.t("Login 2")}
                          </Link>
                          <Link to="pages-register-2" className="dropdown-item">
                            {props.t("Register 2")}
                          </Link>
                          <Link to="page-recoverpw-2" className="dropdown-item">
                            {props.t("Recover Password 2")}
                          </Link>
                          <Link to="auth-lock-screen-2" className="dropdown-item">
                            {props.t("Lock Screen 2")}
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>

                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle arrow-none"
                    to="#"
                    onClick={e => {
                      e.preventDefault()
                      setextra(!extra)
                    }}
                  >
                    <i className="ti-support me-2"></i>{" "}
                    {props.t("Extra pages")}
                  </Link>

                  <div
                    className={classname("dropdown-menu mega-dropdown-menu px-2 dropdown-mega-menu-lg", {
                      show: extra,
                    })}
                  >
                    <div className="row">
                      <div className="col-lg-6">
                        <div>
                          <Link to="pages-timeline" className="dropdown-item">
                            {props.t("Timeline")}
                          </Link>
                          <Link to="pages-starter" className="dropdown-item">
                            {props.t("Starter Page")}
                          </Link>
                          <Link to="pages-directory" className="dropdown-item">{props.t("Directory")}</Link>
                          <Link to="pages-404" className="dropdown-item">{props.t("Error 404")}</Link>
                          <Link to="pages-500" className="dropdown-item">{props.t("Error 500")}</Link>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div>
                          <Link to="pages-pricing" className="dropdown-item">{props.t("Pricing")}</Link>
                          <Link to="pages-gallery" className="dropdown-item">{props.t("Gallery")}</Link>
                          <Link to="pages-maintenance" className="dropdown-item">{props.t("Maintenance")}</Link>
                          <Link to="pages-comingsoon" className="dropdown-item">{props.t("Coming Soon")}</Link>
                          <Link to="pages-faqs" className="dropdown-item">{props.t("FAQs")}</Link>
                        </div>
                      </div>
                    </div>

                  </div>

                </li>

                <li className="nav-item dropdown">
                  <Link className="nav-link dropdown-toggle arrow-none" to="#" id="topnav-emailtemplates" role="button"
                    onClick={e => {
                      e.preventDefault()
                      setemail(!email)
                    }}
                  >
                    <i className="ti-bookmark-alt me-2"></i>Email Templates
                  </Link>
                  <div className={classname("dropdown-menu", {
                    show: email,
                  })} aria-labelledby="topnav-emailtemplates">
                    <Link
                      to="email-template-basic"
                      className="dropdown-item"
                    >
                      {props.t("Basic Action")}
                    </Link>
                    <Link
                      to="email-template-alert"
                      className="dropdown-item"
                    >
                      {props.t("Alert Email")}
                    </Link>
                    <Link
                      to="email-template-billing"
                      className="dropdown-item"
                    >
                      {props.t("Billing Email")}
                    </Link>
                  </div>
                </li>

              </ul>
            </Collapse>
          </nav>
        </div>
      </div>
    </React.Fragment>
  )
}

Navbar.propTypes = {
  leftMenu: PropTypes.any,
  location: PropTypes.any,
  menuOpen: PropTypes.any,
  t: PropTypes.any,
}

const mapStatetoProps = state => {
  const { leftMenu } = state.Layout
  return { leftMenu }
}

export default withRouter(
  connect(mapStatetoProps, {})(withTranslation()(Navbar))
)
