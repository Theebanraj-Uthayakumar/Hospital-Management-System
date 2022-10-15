import React from "react"
import { Redirect } from "react-router-dom"

// Profile
import UserProfile from "../pages/Authentication/user-profile"

// Authentication related pages
import Login from "../pages/Authentication/Login"
import Logout from "../pages/Authentication/Logout"
import Register from "../pages/Authentication/Register"
import ForgetPwd from "../pages/Authentication/ForgetPassword"

// Dashboard
import Dashboard from "../pages/Dashboard/index"

//Doctors
import GetAllDoctors from "../pages/Doctor/GetAllDoctors/GetAllDoctors";
import AddDoctors from "../pages/Doctor/AddDoctors/AddDoctors";
import UpdateDoctors from "../pages/Doctor/UpdateDoctors/UpdateDoctors"
import GetAllOperation from "pages/Operation/GetAllOperation/GetAllOperation";
import DoctorsReport from "pages/Doctor/DoctorsReport/DoctorsReport"

//Operation
import AddOperation from "pages/Operation/AddOperation/AddOperation";
import UpdateOperation from "pages/Operation/UpdateOperation/UpdateOperation";
import AddCamping from "pages/Camping/AddCamping/AddCamping"
import GetAllCamping from "pages/Camping/GetAllCamping/GetAllCamping"
import UpdateCamping from "pages/Camping/UpdateCamping/UpdateCamping"
import CampingReport from "pages/Camping/CampingReport/CampingReport"


const userRoutes = [
  { path: "/dashboard", component: Dashboard },

  //Doctors
  { path: "/getAllDoctors", component: GetAllDoctors },
  { path: "/addDoctors", component: AddDoctors },
  { path: "/updateDoctors", component: UpdateDoctors },
  { path: "/doctorsReport", component: DoctorsReport },

  //Operation
  { path: "/getAllOperation", component: GetAllOperation },
  { path: "/addOperation", component: AddOperation },
  { path: "/updateOperation", component: UpdateOperation },

  //Camping
  { path: "/getAllCamping", component: GetAllCamping },
  {path: "/addCamping", component: AddCamping},
  {path: "/updateCamping", component:UpdateCamping},
  {path:"/campingReport", component:CampingReport},

  //profile
  { path: "/profile", component: UserProfile },

  // this route should be at the end of all other routes
  { path: "/", exact: true, component: () => <Redirect to="/dashboard" /> },
]

const authRoutes = [
  { path: "/logout", component: Logout },
  { path: "/login", component: Login },
  { path: "/forgot-password", component: ForgetPwd },
  { path: "/register", component: Register },
]

export { userRoutes, authRoutes }
