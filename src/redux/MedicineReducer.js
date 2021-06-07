const initState = {
  list: [],
  refMed: {},
};

// ACTION TYPES
const MEDICINE_CREATE = "MEDICINE_CREATE";
const MEDICINE_UPDATE = "MEDICINE_UPDATE";
const MEDICINE_DELETE = "MEDICINE_DELETE";
const MEDICINE_GET_ALL = "MEDICINE_GET_ALL";
const MEDICINE_GET_BY_ID = "MEDICINE_GET_BY_ID";

const REF_MEDICINE = "REF_MEDICINE";

// ACTIONS ::
export function createMedicineAction(payload) {
  return async (dispatch) => {
    // WE HV TO CALL THE SPRINT1 / SPRING BOOT
    const url = "http://localhost:8080/api/medicine/savemed";
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
  return { type: MEDICINE_UPDATE, payload: payload };
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
    // WE HV TO CALL THE SPRINT1 / SPRING BOOT
    const url = "http://localhost:8080/api/medicine/getAllmeds";

    const response = await fetch(url);
    const medicineList = await response.json();

    dispatch({ type: MEDICINE_GET_ALL, payload: medicineList });
  };
}

export function getByIdMedicineAction(payload) {
  return { type: MEDICINE_GET_BY_ID, payload: payload };
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

    default:
      return state;
  }
}
