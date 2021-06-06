import { combineReducers } from "redux";
import { createStore } from "redux";
import { MedicineReducer } from "./MedicineReducer";

const rootReducer = combineReducers({
  medicine: MedicineReducer,
  // depart : DepartRducer,
  //vechil: VechuileReucer
});

const store = createStore(rootReducer);
export { store };
