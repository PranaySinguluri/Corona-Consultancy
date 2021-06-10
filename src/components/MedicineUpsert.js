import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  createMedicineAction,
  updateMedicineAction,
} from "../redux/MedicineReducer";

export function MedicineUpsert() {
  const dispatch = useDispatch();
  const history = useHistory();
  const formEL = useRef();
  const state = useSelector((state) => state);

  const [medicineName, setMedicineName] = useState(
    state.medicine.refMed.medicineName
  );
  const [price, setPrice] = useState(state.medicine.refMed.price);

  const [manufactureDate, setManufactureDate] = useState(
    state.medicine.refMed.manufactureDate
  );
  const [expiryDate, setExpiryDate] = useState(
    state.medicine.refMed.expiryDate
  );
  const [medicineStock, setMedicineStock] = useState(
    state.medicine.refMed.medicineStock
  );

  const [successOperation, setSuccessOperation] = useState(false);
  const [errorOperation, setErrorOperation] = useState(false);

  const updateMedicineName = (e) => setMedicineName(e.target.value);
  const updatePrice = (e) => setPrice(e.target.value);
  const updateManufactureDate = (e) => setManufactureDate(e.target.value);
  const updateExpiryDate = (e) => setExpiryDate(e.target.value);
  const updateMedicineStock = (e) => setMedicineStock(e.target.value);

  const addMedicine = (e) => {
    e.preventDefault();
    if (formEL.current.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
      formEL.current.classList.add("was-validated");
    } else {
      dispatch(
        createMedicineAction({
          medicineName,
          price,
          manufactureDate,
          expiryDate,
          medicineStock,
        })
      );

      // A1 sucess
      setSuccessOperation(true);
      setTimeout(() => setSuccessOperation(false), 5000);
      setMedicineName("");
      setPrice("");
      setManufactureDate("");
      setExpiryDate("");
      setMedicineStock("");
    }
  };

  const updateMedicine = () => {
    dispatch(
      updateMedicineAction({
        medicineId: state.medicine.refMed.medicineId,
        medicineName,
        price,
        manufactureDate,
        expiryDate,
        medicineStock,
      })
    );

    // A1 sucess
    setSuccessOperation(true);
    setTimeout(() => setSuccessOperation(false), 5000);

    // A2: navigate to another page
    // history.push("/list-employee");

    // reset the form
    setMedicineName("");
    setPrice("");
    setManufactureDate("");
    setExpiryDate("");
    setMedicineStock("");
  };

  return (
    <div className="row">
      <div className="col-3 col-md-3 d-none d-md-block"></div>
      <div className="col-12 col-md-6">
        <h3 className="alert alert-secondary">
          {state.medicine.refMed.medicineName
            ? "Update Medicine"
            : "Create Medicine"}
        </h3>

        {/** BELOW THESE TWO TAGS MUST BE CONDITIOANL */}
        {successOperation && (
          <div className="alert alert-success">Medicine added to List</div>
        )}
        <form ref={formEL} class="needs-validation" novalidate>
          <div className="mb-1">
            <input
              type="text"
              value={medicineName}
              required="required"
              onChange={(e) => updateMedicineName(e)}
              className="form-control"
              placeholder="Enter Medicine name"
              required
              minLength="4"
              maxLength="10"
            />
          </div>

          <div className="mb-1">
            <input
              type="number"
              value={price}
              size="5"
              onChange={(e) => updatePrice(e)}
              className="form-control"
              placeholder="Enter Medicine Price"
              required
              minLength="1"
              maxLength="5"
            />
          </div>
          <div className="col-1 col-md-12  d-md-block alert alert-secondary">
            Manufacture Date
            <div className="mb-1"></div>
            <input
              type="date"
              value={manufactureDate}
              onChange={(e) => updateManufactureDate(e)}
              className="form-control"
              required
            />
          </div>

          <div className="col-1 col-md-12  d-md-block alert alert-secondary">
            Expiry Date
            <div className="mb-1"></div>
            <input
              type="date"
              value={expiryDate}
              onChange={(e) => updateExpiryDate(e)}
              className="form-control"
              required
            />
          </div>

          <div className="mb-1">
            <input
              type="number"
              value={medicineStock}
              onChange={(e) => updateMedicineStock(e)}
              className="form-control"
              placeholder="Enter Stock"
              required
              minLength="1"
              maxLength="5"
            />
          </div>

          <div className="mb-1">
            {state.medicine.refMed.medicineId ? (
              <input
                type="button"
                className="btn btn-secondary w-100"
                value="Update Medicine"
                onClick={() => updateMedicine()}
              />
            ) : (
              <input
                type="button"
                className="btn btn-secondary w-100"
                value="Add Medicine"
                onClick={(e) => addMedicine(e)}
              />
            )}
          </div>
        </form>
      </div>
      <div className="col-3 col-md-3  d-none d-md-block"></div>
    </div>
  );
}
