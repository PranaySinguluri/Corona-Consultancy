const initState = {
  Medicine: {},
  list: [],
};

// ACTION TYPES
const MEDICINE_CREATE = "MEDICINE_CREATE";
const MEDICINE_UPDATE = "MEDICINE_UPDATE";
const MEDICINE_DELETE = "MEDICINE_DELETE";
const MEDICINE_GET_ALL = "MEDICINE_GET_ALL";
const MEDICINE_GET_BY_ID = "MEDICINE_GET_BY_ID";

// ACTIONS ::
export function createMedicineAction(payload) {
  return { type: MEDICINE_CREATE, payload: payload };
}

export function updateMedicineAction(payload) {
  return { type: MEDICINE_UPDATE, payload: payload };
}

export function deleteMedicineAction(payload) {
  return { type: MEDICINE_DELETE, payload: payload };
}

export function getAllMedicineAction(payload) {
  return { type: MEDICINE_GET_ALL, payload: payload };
}

export function getByIdMedicineAction(payload) {
  return { type: MEDICINE_GET_BY_ID, payload: payload };
}

// REDUCER LOGIC
export function MedicineReducer(state = initState, action) {
  switch (action.type) {
    case MEDICINE_CREATE:
      // TODO
      return state;
    case MEDICINE_UPDATE:
      // TODO
      return state;
    case MEDICINE_DELETE:
      // TODO
      return state;
    case MEDICINE_GET_ALL:
      // TODO
      return state;
    case MEDICINE_GET_BY_ID:
      // TODO
      return state;

    default:
      return state;
  }
}
