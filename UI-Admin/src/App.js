import { Switch, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import './index.css';
import Dashbord from "./components/Dashbord";
import Operationadd from "./components/pages/Operation/Operationadd";
import Operationupdate from "./components/pages/Operation/Operationupdate";
import Doctors_add from "./components/pages/Doctors/Doctors_add";
import Doctors_update from "./components/pages/Doctors/Doctors_update";
import Doctors_Edit from "./components/pages/Doctors/Doctors_Edit"
import Doctors_Report from "./components/pages/Doctors/Doctors_Report";

// All routing routes ddefined here
const Routing = () => {
  return (
    <Switch>
      <Route exact path="/" component={Dashbord} />
      <Route exact path="/Operationadd" component={Operationadd} />
      <Route exact path="/Operationupdate" component={Operationupdate} />
      <Route exact path="/Doctors_Edit" component={Doctors_Edit} />
      <Route exact path="/Doctors_Report" component={Doctors_Report} />
      <Route exact path="/Doctors_update" component={Doctors_update} />
      <Route exact path="/Doctors_add" component={Doctors_add} />
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
