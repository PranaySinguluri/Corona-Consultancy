const initState = {
  list: [],
  refMed: {},
  error: false,
};

// ACTION TYPES
const MEDICINE_CREATE = "MEDICINE_CREATE";
const MEDICINE_UPDATE = "MEDICINE_UPDATE";
const MEDICINE_DELETE = "MEDICINE_DELETE";
const MEDICINE_GET_ALL = "MEDICINE_GET_ALL";
const MEDICINE_GET_BY_ID = "MEDICINE_GET_BY_ID";

const SERVER_ERROR = "SERVER_ERROR";
const REF_MEDICINE = "REF_MEDICINE";
const LOGIN_ACTION = "LOGIN_ACTION";

// ACTIONS ::
export function createMedicineAction(payload) {
  return async (dispatch) => {
    // WE HV TO CALL THE SPRINT1 / SPRING BOOT
    const url = `http://localhost:8080/api/medicine/savemed`;
    const requestBody = { ...payload };

    // HTTP Client
    await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(requestBody),
    });

    // UPDATE THE UI
    dispatch({ type: MEDICINE_CREATE, payload: payload });
  };
}

export function updateMedicineAction(payload) {
  return async (dispatch) => {
    // WE HV TO CALL THE SPRINT1 / SPRING BOOT
    const url = `http://localhost:8080/api/medicine/update/meds`;
    const requestBody = { ...payload };

    await fetch(url, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(requestBody),
    });

    // update the ui.
    dispatch(updateRefMedicine({}));
  };
}

export function deleteMedicineAction(payload) {
  return async (dispatch) => {
    const url = `http://localhost:8080/api/medicine/deleteById/${payload.medicineId}`;
    console.log(payload);

    await fetch(url, { method: "DELETE" });

    // update the ui.
    dispatch(getAllMedicineAction());
  };
}

export function getAllMedicineAction(payload) {
  return async (dispatch) => {
    try {
      // WE HV TO CALL THE SPRINT1 / SPRING BOOT
      const url = "http://localhost:8080/api/medicine/getAllmeds";

      const response = await fetch(url);
      const medicineList = await response.json();

      dispatch({ type: MEDICINE_GET_ALL, payload: medicineList });
    } catch (error) {
      console.log(error);
      dispatch({ type: SERVER_ERROR, payload: true });

      const localMedicineStringList = localStorage.getItem("medicineList");
      const localMedicineList = JSON.parse(localMedicineStringList);
      dispatch({ type: MEDICINE_GET_ALL, payload: localMedicineList });
    }
  };
}

export function getByIdMedicineAction(payload) {
  return async (dispatch) => {
    const url = `http://localhost:8080/api/medicine/getMedById/${payload.medicineId}`;
    const response = await fetch(url);
    const medicineObj = await response.json();

    // this wil update the refemp
    dispatch(updateRefMedicine(medicineObj));
  };
}

export function updateRefMedicine(payload) {
  return { type: REF_MEDICINE, payload: payload };
}
// REDUCER LOGIC
export function MedicineReducer(state = initState, action) {
  switch (action.type) {
    case MEDICINE_CREATE:
      return { ...state, list: [action.payload, ...state.list] };

    case MEDICINE_UPDATE:
      // TODO
      return state;
    case MEDICINE_DELETE:
      const oldList = state.list;
      oldList.splice(action.payload, 1);

      return { ...state, list: [...oldList] };
    case MEDICINE_GET_ALL:
      return { ...state, list: action.payload };
    case MEDICINE_GET_BY_ID:
      // TODO
      return state;
    case REF_MEDICINE:
      return { ...state, refMed: action.payload };

    case LOGIN_ACTION:
      return { ...state, loginAction: true };

    case SERVER_ERROR:
      return { ...state, error: action.payload };

    default:
      return state;
  }
}
