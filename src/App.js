import logo from "./logo.svg";
import "./App.css";
import { MedicineUpsert } from "./components/MedicineUpsert";
import { MedicineList } from "./components/MedicineList";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { AppNavBar } from "./common/AppNavBar";

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

        <Route exact path="/">
          <MedicineUpsert />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
