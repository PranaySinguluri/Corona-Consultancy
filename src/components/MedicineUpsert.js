import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { createMedicineAction } from "../redux/MedicineReducer";

export function MedicineUpsert() {
  const dispatch = useDispatch();
  const history = useHistory();
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

    // THIS IS REDUX ACTION CALLING
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

        <div className="mb-1">
          <input
            type="text"
            value={medicineName}
            onChange={(e) => updateMedicineName(e)}
            className="form-control"
            placeholder="Enter Medicine name"
          />
        </div>

        <div className="mb-1">
          <input
            type="text"
            value={price}
            onChange={(e) => updatePrice(e)}
            className="form-control"
            placeholder="Enter Medicine Price"
          />
        </div>

        <div className="mb-1">
          <input
            type="text"
            value={manufactureDate}
            onChange={(e) => updateManufactureDate(e)}
            className="form-control"
            placeholder="Enter Manufacture Date"
          />
        </div>

        <div className="mb-1">
          <input
            type="text"
            value={expiryDate}
            onChange={(e) => updateExpiryDate(e)}
            className="form-control"
            placeholder="Enter Expiry Date"
          />
        </div>

        <div className="mb-1">
          <input
            type="text"
            value={medicineStock}
            onChange={(e) => updateMedicineStock(e)}
            className="form-control"
            placeholder="Enter Stock"
          />
        </div>

        <div className="mb-1">
          {state.medicine.refMed.medicineName ? (
            <input
              type="button"
              className="btn btn-secondary w-100"
              value="Update Medicine"
              onClick={() => {}}
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
      </div>
      <div className="col-3 col-md-3  d-none d-md-block"></div>
    </div>
  );
}
