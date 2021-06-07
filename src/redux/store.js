import { combineReducers } from "redux";
import { applyMiddleware } from "redux";
import { createStore } from "redux";
import thunk from "redux-thunk";
import { MedicineReducer } from "./MedicineReducer";

const rootReducer = combineReducers({
  medicine: MedicineReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));
export { store };
