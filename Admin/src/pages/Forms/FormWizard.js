import React, { useState } from "react"
import MetaTags from 'react-meta-tags';

import {
  Card,
  CardBody,
  Col,
  Container,
  Form,
  Input,
  NavItem,
  NavLink,
  Row,
  TabContent,
  TabPane
} from "reactstrap"

import classnames from "classnames"
import { Link } from "react-router-dom"

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"

const FormWizard = () => {
  const [activeTab, setactiveTab] = useState(1)
  const [activeTabProgress, setactiveTabProgress] = useState(1)
  const [progressValue, setprogressValue] = useState(25)
  const [activeTabVartical, setoggleTabVertical] = useState(1)

  function toggleTab(tab) {
    if (activeTab !== tab) {
      if (tab >= 1 && tab <= 4) {
        setactiveTab(tab)
      }
    }
  }

  function toggleTabVertical(tab) {
    if (activeTabVartical !== tab) {
      if (tab >= 1 && tab <= 4) {
        setoggleTabVertical(tab)
      }
    }
  }

  function toggleTabProgress(tab) {
    if (activeTabProgress !== tab) {
      if (tab >= 1 && tab <= 4) {
        setactiveTabProgress(tab)

        if (tab === 1) {
          setprogressValue(25)
        }
        if (tab === 2) {
          setprogressValue(50)
        }
        if (tab === 3) {
          setprogressValue(75)
        }
        if (tab === 4) {
          setprogressValue(100)
        }
      }
    }
  }

  return (
    <React.Fragment>
      <div className="page-content">
        <MetaTags>
          <title>Form Wizard | Veltrix - Responsive Bootstrap 5 Admin Dashboard</title>
        </MetaTags>
        <Container fluid={true}>
          <Breadcrumbs maintitle="Veltrix" title="Forms" breadcrumbItem="Form Wizard" />

          <Row>
            <Col sm="12">
              <Card>
                <CardBody>
                  <h4 className="card-title mb-4">Basic Wizard</h4>
                  <div className="form-horizontal form-wizard-wrapper wizard clearfix">
                    <div className="steps clearfix">
                      <ul>
                        <NavItem
                          className={classnames({ current: activeTab === 1 })}>
                          <NavLink
                            className={classnames({ current: activeTab === 1 })}
                            onClick={() => {
                              setactiveTab(1)
                            }}
                          >
                            <span className="number">1.</span>{" "}
                            Seller Details
                          </NavLink>
                        </NavItem>
                        <NavItem className={classnames({ current: activeTab === 2 })}>
                          <NavLink
                            className={classnames({ active: activeTab === 2 })}
                            onClick={() => {
                              setactiveTab(2)
                            }}
                          >
                            <span className="number">2.</span>{" "}
                            Company Document
                          </NavLink>
                        </NavItem>
                        <NavItem className={classnames({ current: activeTab === 3 })}>
                          <NavLink
                            className={classnames({ active: activeTab === 3 })}
                            onClick={() => {
                              setactiveTab(3)
                            }}
                          >
                            <span className="number">3.</span>
                          Bank Details
                        </NavLink>
                        </NavItem>
                        <NavItem className={classnames({ current: activeTab === 4 })}>
                          <NavLink
                            className={classnames({ active: activeTab === 4 })}
                            onClick={() => {
                              setactiveTab(4)
                            }}
                          >
                            <span className="number">4.</span>
                          Confirm Detail
                        </NavLink>
                        </NavItem>
                      </ul>
                    </div>
                    <div className="content clearfix">
                      <TabContent
                        activeTab={activeTab}
                        className="body"
                      >
                        <TabPane tabId={1}>
                          <Form>

                            <Row>
                              <Col md={6}>
                                <Row className="mb-3">
                                  <label htmlFor="txtFirstNameBilling"
                                    className="col-lg-3 col-form-label">Contact Person</label>
                                  <div className="col-lg-9">
                                    <Input id="txtFirstNameBilling" name="txtFirstNameBilling"
                                      type="text" className="form-control" />
                                  </div>
                                </Row>
                              </Col>
                              <Col md={6}>
                                <Row className="mb-3">
                                  <label htmlFor="txtLastNameBilling"
                                    className="col-lg-3 col-form-label">Mobile No.</label>
                                  <div className="col-lg-9">
                                    <Input id="txtLastNameBilling" name="txtLastNameBilling"
                                      type="text" className="form-control" />
                                  </div>
                                </Row>
                              </Col>
                            </Row>
                            <Row>
                              <Col md={6}>
                                <Row className="mb-3">
                                  <label htmlFor="txtCompanyBilling"
                                    className="col-lg-3 col-form-label">Landline No.</label>
                                  <div className="col-lg-9">
                                    <Input id="txtCompanyBilling" name="txtCompanyBilling"
                                      type="text" className="form-control" />
                                  </div>
                                </Row>
                              </Col>
                              <Col md={6}>
                                <Row className="mb-3">
                                  <label htmlFor="txtEmailAddressBilling"
                                    className="col-lg-3 col-form-label">Email Address</label>
                                  <div className="col-lg-9">
                                    <Input id="txtEmailAddressBilling" name="txtEmailAddressBilling"
                                      type="text" className="form-control" />
                                  </div>
                                </Row>
                              </Col>
                            </Row>
                            <Row>
                              <Col md={6}>
                                <Row className="mb-3">
                                  <label htmlFor="txtAddress1Billing"
                                    className="col-lg-3 col-form-label">Address 1</label>
                                  <div className="col-lg-9">
                                    <textarea id="txtAddress1Billing" name="txtAddress1Billing"
                                      rows="4" className="form-control"></textarea>
                                  </div>
                                </Row>
                              </Col>
                              <Col md={6}>
                                <Row className="mb-3">
                                  <label htmlFor="txtAddress2Billing"
                                    className="col-lg-3 col-form-label">Warehouse Address</label>
                                  <div className="col-lg-9">
                                    <textarea id="txtAddress2Billing" name="txtAddress2Billing"
                                      rows="4" className="form-control"></textarea>
                                  </div>
                                </Row>
                              </Col>
                            </Row>
                            <Row>
                              <Col md={6}>
                                <Row className="mb-3">
                                  <label htmlFor="txtCityBilling" className="col-lg-3 col-form-label">Company
                                                        Type</label>
                                  <div className="col-lg-9">
                                    <Input id="txtCityBilling" name="txtCityBilling" type="text"
                                      className="form-control" />
                                  </div>
                                </Row>
                              </Col>
                              <Col md={6}>
                                <Row className="mb-3">
                                  <label htmlFor="txtStateProvinceBilling"
                                    className="col-lg-3 col-form-label">Live Market A/C</label>
                                  <div className="col-lg-9">
                                    <Input id="txtStateProvinceBilling"
                                      name="txtStateProvinceBilling" type="text"
                                      className="form-control" />
                                  </div>
                                </Row>
                              </Col>
                            </Row>

                            <Row>
                              <Col md={6}>
                                <Row className="mb-3">
                                  <label htmlFor="txtTelephoneBilling"
                                    className="col-lg-3 col-form-label">Product Category</label>
                                  <div className="col-lg-9">
                                    <Input id="txtTelephoneBilling" name="txtTelephoneBilling"
                                      type="text" className="form-control" />
                                  </div>
                                </Row>
                              </Col>
                              <Col md={6}>
                                <Row className="mb-3">
                                  <label htmlFor="txtFaxBilling" className="col-lg-3 col-form-label">Product
                                                        Sub Category</label>
                                  <div className="col-lg-9">
                                    <Input id="txtFaxBilling" name="txtFaxBilling" type="text"
                                      className="form-control" />
                                  </div>
                                </Row>
                              </Col>
                            </Row>
                          </Form>
                        </TabPane>
                        <TabPane tabId={2}>

                          <Form>
                            <Row>
                              <Col md={6}>
                                <Row className="mb-3">
                                  <label htmlFor="txtFirstNameShipping"
                                    className="col-lg-3 col-form-label">PAN Card</label>
                                  <div className="col-lg-9">
                                    <Input id="txtFirstNameShipping" name="txtFirstNameShipping"
                                      type="text" className="form-control" />
                                  </div>
                                </Row>
                              </Col>
                              <Col md={6}>
                                <Row className="mb-3">
                                  <label htmlFor="txtLastNameShipping"
                                    className="col-lg-3 col-form-label">VAT/TIN No.</label>
                                  <div className="col-lg-9">
                                    <Input id="txtLastNameShipping" name="txtLastNameShipping"
                                      type="text" className="form-control" />
                                  </div>
                                </Row>
                              </Col>
                            </Row>
                            <Row>
                              <Col md={6}>
                                <Row className="mb-3">
                                  <label htmlFor="txtCompanyShipping" className="col-lg-3 col-form-label">CST
                                                        No.</label>
                                  <div className="col-lg-9">
                                    <Input id="txtCompanyShipping" name="txtCompanyShipping"
                                      type="text" className="form-control" />
                                  </div>
                                </Row>
                              </Col>
                              <Col md={6}>
                                <Row className="mb-3">
                                  <label htmlFor="txtEmailAddressShipping"
                                    className="col-lg-3 col-form-label">Service Tax No.</label>
                                  <div className="col-lg-9">
                                    <Input id="txtEmailAddressShipping"
                                      name="txtEmailAddressShipping" type="text"
                                      className="form-control" />
                                  </div>
                                </Row>
                              </Col>
                            </Row>

                            <Row>
                              <Col md={6}>
                                <Row className="mb-3">
                                  <label htmlFor="txtCityShipping" className="col-lg-3 col-form-label">Company
                                                        UIN</label>
                                  <div className="col-lg-9">
                                    <Input id="txtCityShipping" name="txtCityShipping" type="text"
                                      className="form-control" />
                                  </div>
                                </Row>
                              </Col>
                              <Col md={6}>
                                <Row className="mb-3">
                                  <label htmlFor="txtStateProvinceShipping"
                                    className="col-lg-3 col-form-label">Declaration</label>
                                  <div className="col-lg-9">
                                    <Input id="txtStateProvinceShipping"
                                      name="txtStateProvinceShipping" type="text"
                                      className="form-control" />
                                  </div>
                                </Row>
                              </Col>
                            </Row>
                          </Form>
                        </TabPane>
                        <TabPane tabId={3}>

                          <Form>
                            <Row>
                              <Col md={6}>
                                <Row className="mb-3">
                                  <label htmlFor="txtNameCard" className="col-lg-3 col-form-label">Name on
                                                        Card</label>
                                  <div className="col-lg-9">
                                    <Input id="txtNameCard" name="txtNameCard" type="text"
                                      className="form-control" />
                                  </div>
                                </Row>
                              </Col>
                              <Col md={6}>
                                <Row className="mb-3">
                                  <label htmlFor="ddlCreditCardType"
                                    className="col-lg-3 col-form-label">Credit Card Type</label>
                                  <div className="col-lg-9">
                                    <Input type="select" id="ddlCreditCardType" name="ddlCreditCardType"
                                      className="form-select">
                                      <option value="">--Please Select--</option>
                                      <option value="AE">American Express</option>
                                      <option value="VI">Visa</option>
                                      <option value="MC">MasterCard</option>
                                      <option value="DI">Discover</option>
                                    </Input>
                                  </div>
                                </Row>
                              </Col>
                            </Row>
                            <Row>
                              <Col md={6}>
                                <Row className="mb-3">
                                  <label htmlFor="txtCreditCardNumber"
                                    className="col-lg-3 col-form-label">Credit Card Number</label>
                                  <div className="col-lg-9">
                                    <Input id="txtCreditCardNumber" name="txtCreditCardNumber"
                                      type="text" className="form-control" />
                                  </div>
                                </Row>
                              </Col>
                              <Col md={6}>
                                <Row className="mb-3">
                                  <label htmlFor="txtCardVerificationNumber"
                                    className="col-lg-3 col-form-label">Card Verification
                                                        Number</label>
                                  <div className="col-lg-9">
                                    <Input id="txtCardVerificationNumber"
                                      name="txtCardVerificationNumber" type="text"
                                      className="form-control" />
                                  </div>
                                </Row>
                              </Col>
                            </Row>
                            <Row>
                              <Col md={6}>
                                <Row className="mb-3">
                                  <label htmlFor="txtExpirationDate"
                                    className="col-lg-3 col-form-label">Expiration Date</label>
                                  <div className="col-lg-9">
                                    <Input id="txtExpirationDate" name="txtExpirationDate"
                                      type="text" className="form-control" />
                                  </div>
                                </Row>
                              </Col>
                            </Row>
                          </Form>

                        </TabPane>
                        <TabPane tabId={4}>
                          <div className="row justify-content-center">
                            <Col lg="6">
                              <div className="text-center">
                                <div className="mb-4">
                                  <i className="mdi mdi-check-circle-outline text-success display-4" />
                                </div>
                                <div>
                                  <h5>Confirm Detail</h5>
                                  <p className="text-muted">
                                    If several languages coalesce, the grammar of
                                    the resulting
                                </p>
                                </div>
                              </div>
                            </Col>
                          </div>
                        </TabPane>
                      </TabContent>
                    </div>
                    <div className="actions clearfix">
                      <ul>
                        <li
                          className={
                            activeTab === 1 ? "previous disabled" : "previous"
                          }
                        >
                          <Link
                            to="#"
                            className="btn btn-primary"
                            onClick={() => {
                              toggleTab(activeTab - 1)
                            }}
                          >
                            Previous
                          </Link>
                        </li>
                        <li
                          className={activeTab === 4 ? "next disabled" : "next"}
                        >
                          <Link
                            to="#"
                            className="btn btn-primary"
                            onClick={() => {
                              toggleTab(activeTab + 1)
                            }}
                          >
                            Next
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  )
}

export default FormWizard