import { combineReducers } from "redux";
import { applyMiddleware } from "redux";
import { createStore } from "redux";
import thunk from "redux-thunk";
import { MedicineReducer } from "./MedicineReducer";
import { MedicineReportReducer } from "./MedicineReportReducer";

const rootReducer = combineReducers({
  medicine: MedicineReducer,
  medicineReport: MedicineReportReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));
export { store };
