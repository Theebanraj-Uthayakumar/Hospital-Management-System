import { BrowserRouter, Switch, Route, NavLink } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import './index.css';

import { MDBCard, MDBCardTitle, MDBCardText, MDBCardBody, MDBCardImage, MDBRow, MDBCol } from 'mdb-ui-kit';
import Dashbord from "./components/Dashbord";
import Operationadd from "./components/pages/Operation/Operationadd";
import Operationupdate from "./components/pages/Operation/Operationupdate";

// All routing routes ddefined here
const Routing = () => {
  return (
    <Switch>
      <Route exact path="/" component={Dashbord} />
      <Route exact path="/Operationadd" component={Operationadd} />
      <Route exact path="/Operationupdate" component={Operationupdate} />
    </Switch>
  );
};


function App() {
  return (
    <Router>
      <Routing />
    </Router>
  );
}

export default App;
