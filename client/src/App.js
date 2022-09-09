import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


import Ambulance from './component/pages/Ambulance';
import Camping from './component/pages/Camping';
import Home from "./component/pages/home";
import Nav from "./component/templates/header";
import Footer from "./component/templates/footer";
import doctor from './component/pages/doctor';
import about from './component/pages/about';
import contact from './component/pages/contact';
import cleaning from './component/pages/cleaning';
import bloodbank from './component/pages/bloodbank';
import bloodbank_details from './component/pages/bloodbank_details';
import Technology from "./component/pages/technology/Technology";
import Facility from "./component/pages/facility/Facility";
import SingleTechnology from "./component/pages/technology/SingleTechnology";
import SingleFacility from "./component/pages/facility/SingleFacility";
import login from "./component/pages/login";
import Hospital from "./component/pages/Hospital";
import register from "./component/pages/register";
import Operation from "./component/pages/Operation";
import Operation2 from "./component/pages/Operation2";
import Disease1 from "./component/pages/Disease1";

import laboratory from "./component/pages/laboratory_details";

import Pharmacy2 from "./component/Pharmacy/Pharmacy2";
import Pharmacy1 from "./component/Pharmacy/Pharmacy1";
import eqp from "./component/pages/Equipments";



// All routing routes ddefined here
const Routing = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/Ambulance_Details" component={Ambulance} />
      <Route exact path="/Hospital" component={Hospital} />
      <Route exact path="/Camping_Details" component={Camping} />
      <Route exact path="/Doctors" component={doctor} />
      <Route exact path="/about" component={about} />
      <Route exact path="/contact" component={contact} />
      <Route exact path="/cleaning" component={cleaning} />
      <Route exact path="/BloodBank" component={bloodbank} />
      <Route exact path="/BloodBank_Details" component={bloodbank_details} />
      <Route exact path="/technology" component={Technology} />
      <Route exact path="/facility" component={Facility} />
      <Route exact path="/technology/:id" component={SingleTechnology} />
      <Route exact path="/facility/:id" component={SingleFacility} />
      <Route exact path="/login" component={login} />
      <Route exact path="/register" component={register} />
      <Route exact path="/Operation" component={Operation} />
      <Route exact path="/Operation2" component={Operation2} />
      <Route exact path="/Disease1" component={Disease1} />
      <Route exact path="/check" component={Pharmacy2}/>
      <Route exact path="/check1" component={Pharmacy1}/>
      <Route exact path="/laboratory_details" component={laboratory}/>
      <Route exact path="/Equipments" component={eqp}/>

    </Switch>
  );
};


const App = () => {
  return (
    <Router>
      <Nav />
      <Routing />
      <Footer />
    </Router>
  );
};

export default App;
