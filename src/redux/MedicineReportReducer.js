const initState = {
  refMedReport: {},
  list: [],
};

// ACTION TYPES
const MEDICINEREPORT_CREATE = "MEDICINEREPORT_CREATE";
const MEDICINEREPORT_GET_ALL = "MEDICINEREPORT_GET_ALL";
const MEDICINEREPORT_GET_BY_ID = "MEDICINEREPORT_GET_BY_ID";

const REF_MEDICINEREPORT = "REF_MEDICINEREPORT";
// ACTIONS ::
export function createMedicineReportAction(payload) {
  return async (dispatch) => {
    // WE HV TO CALL THE SPRINT1 / SPRING BOOT
    const url = "http://localhost:8080/api/medicineReport/add";
    const requestBody = { ...payload };

    // HTTP Client
    await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(requestBody),
    });

    // UPDATE THE UI
    dispatch({ type: MEDICINEREPORT_CREATE, payload: payload });
  };
}

export function getAllMedicineReportAction(payload) {
  return { type: MEDICINEREPORT_GET_ALL, payload: payload };
}

export function getByIdMedicineReportAction(payload) {
  return { type: MEDICINEREPORT_GET_BY_ID, payload: payload };
}

// REDUCER LOGIC
export function MedicineReportReducer(state = initState, action) {
  switch (action.type) {
    case MEDICINEREPORT_CREATE:
      // TODO
      return { ...state, list: [action.payload, ...state.list] };

    case MEDICINEREPORT_GET_ALL:
      // TODO
      return state;
    case MEDICINEREPORT_GET_BY_ID:
      // TODO
      return state;
    case REF_MEDICINEREPORT:
      return { ...state, refMedReport: action.payload };

    default:
      return state;
  }
}
