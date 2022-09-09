import React from 'react'
import logo from "../../../Healistry.png"



function Operationupdate() {
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
                                data-class="closed-sidebar">
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
                            className="hamburger hamburger--elastic mobile-toggle-nav">
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
                                        <div className="widget-heading">V.Shothripragash.</div>
                                        <div className="widget-subheading">Full-Stack Developer</div>
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
                                    <a href="#" >
                                        <i className="metismenu-icon pe-7s-diamond" />
                                        Doctors' Details
                                        <i className="metismenu-state-icon pe-7s-angle-down caret-left" />
                                    </a>
                                    <ul>
                                        <li>
                                            <a href="#">
                                                <i className="metismenu-icon" />
                                                Doctors | Add
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="metismenu-icon"></i> Doctors | Edit,Delete
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="metismenu-icon pe-7s-diamond" />
                                        Hospitals Details
                                        <i className="metismenu-state-icon pe-7s-angle-down caret-left" />
                                    </a>
                                    <ul>
                                        <li>
                                            <a href="#">
                                                <i className="metismenu-icon" />
                                                Hospitals | Add
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="metismenu-icon"></i> Hospitals | Edit,Delete
                                            </a>
                                        </li>
                                    </ul>
                                </li>

                                <li>
                                    <a href="#" className="mm-active">
                                        <i className="metismenu-icon pe-7s-diamond" />
                                        Operation History Details
                                        <i className="metismenu-state-icon pe-7s-angle-down caret-left" />
                                    </a>
                                    <ul>
                                        <li>
                                            <a href="/Operationadd" className="mm-active">
                                                <i className="metismenu-icon" />
                                                Operation | Add
                                            </a>
                                        </li>
                                        <li>
                                            <a href="Operationupdate">
                                                <i className="metismenu-icon"></i> Operation | Update
                                            </a>
                                        </li>
                                    </ul>
                                </li>

                                <li>
                                    <a href="#">
                                        <i className="metismenu-icon pe-7s-display2" />
                                        Tables
                                    </a>
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
                                        Add Operation Details
                                        <div className="page-title-subheading">
                                            This is an example dashboard created using build-in elements
                                            and components.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Add Form Here */}
                        <h1>Operation History Details Update Form</h1>
                        <div>
    <center>
      <div className="heading">
       <h1>DR.S.DANIAL(MBBS.FRCS.PCVP)</h1>
      </div>
    </center>
      <div className="img1">
       <img src="images/sp2.PNG"/>
      </div>
            <div className="details">
              <p>SLMC No : SLMC110101</p>
              <p>Specialisation : Cardiologist</p>
              <p>Experience : 10years</p>
            </div>
                <div className="surgeryname">
                  <p>SURGERY  -01 </p>
                </div>
                  <div className="details1">
                    <p>Disease : Thrombosis</p>
                    <p>Hospital : Teaching Hospital,Batticaloa</p>
                    <p>Date : 10.05.2001</p>
                    <p>Patient's oder No : H1010</p>
                  </div>
                    <div className="details2">
                      <p>Anesthesia Details : Dr.Karthik's Anesthesia</p>
                      <p>Disease Details : Thrombosis occurs when blood clots block veins or arteries. Symptoms include pain and swelling in one leg, chest pain, or numbness on one side of the body. Complications of thrombosis can be life-threatening, such as a stroke or heart attack.</p>
                      <p>Patient's other diseases : Diabetic and Food alergyn only</p>
                    </div>
                     <div className="dreport">
                       <h2>DIAGNOSIS REPORT</h2>
                     </div>
                       <div className="imgt">
                         <div className="img3">
                          <img src="images/sp3.PNG"/>
                          <h3>01</h3>
                         </div>
                            <div className="img4">
                              <img src="images/sp3.PNG"/>
                              <h4>02</h4>
                            </div>
                                <div className="checkup">
                                  <p>Checkup Details : The patient is required to visit the doctor once a week for a checkup </p>
                           </div> 
                           <div className="doctoradvises">
                                  <p>Doctor's Advises : Any meal that causes an allergic reaction should be svoided.Do not attempt to lift a lot of weight </p>
                           </div>
                       </div>
                       <div className="rating">
                         <h5>Rating :</h5>
                       </div>
                       <div className="rating1">
                         <h6>GOOD</h6>
                       </div>
                   
  </div>
                      
                    </div >
                    <div className="editbutton">
            <input type="button" name="log" id="log" value="Edit"/>
            </div> <div className="deletebutton">
            <input type="button" name="log" id="log" value="Delete"/>
            </div>
                    <div className="app-wrapper-footer">
                        <div className="app-footer">
                            <div className="app-footer__inner">
                                <div className="app-footer-left">
                                    <ul className="nav">
                                        <li className="nav-item">
                                            <a href="javascript:void(0);" className="nav-link">
                                                Footer Link 1
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="javascript:void(0);" className="nav-link">
                                                Footer Link 2
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="footer34">
                                    <ul className="nav">
                                        <li className="nav-item">
                                            <a href="javascript:void(0);" className="nav-link">
                                                Footer Link 3
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="javascript:void(0);" className="nav-link">
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
                </div >
            </div >
        </div >

    </div >
    )
}

export default Operationupdate
