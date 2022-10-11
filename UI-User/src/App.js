import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Nav from "./component/templates/header";
import Footer from "./component/templates/footer";
import Operation from "./component/pages/Operation";
import Operation2 from "./component/pages/Operation2";
import Doctor from './component/pages/doctos';
import Home from "./component/pages/Home/Home";

import Pharmacy2 from "./component/Pharmacy/Pharmacy2";
import Pharmacy1 from "./component/Pharmacy/Pharmacy1";



// All routing routes ddefined here
const Routing = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/Operation" component={Operation} />
      <Route path="/Operation2" component={Operation2} />
      <Route path="/check" component={Pharmacy2}/>
      <Route path="/check1" component={Pharmacy1}/>
      <Route path="/check1" component={Pharmacy1}/>
      <Route path="/Doctors" component={Doctor} />
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
