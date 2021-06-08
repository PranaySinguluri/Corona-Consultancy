import logo from "./logo.svg";
import "./App.css";
import { MedicineUpsert } from "./components/MedicineUpsert";
import { MedicineList } from "./components/MedicineList";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { AppNavBar } from "./common/AppNavBar";
import { MedicineReportReducer } from "./redux/MedicineReportReducer";
import { MedicineReportUpsert } from "./components/MedicineReportUpsert";
import { MedicineReportList } from "./components/MedicineReportList";

function App() {
  return (
    <Router>
      <AppNavBar />

      <Switch>
        <Route path="/add-medicine">
          <MedicineUpsert />
        </Route>

        <Route path="/list-medicine">
          <MedicineList />
        </Route>

        <Route path="/add-medicineReport">
          <MedicineReportUpsert />
        </Route>
        <Route path="/list-medicineReport">
          <MedicineReportList />
        </Route>

        <Route exact path="/">
          <MedicineList />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
