import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import {
  deleteMedicineAction,
  getAllMedicineAction,
  getByIdMedicineAction,
  updateRefMedicine,
} from "../redux/MedicineReducer";
import { MedicineModal } from "./MedicineModal";

export function MedicineList() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(getAllMedicineAction());
  }, []);

  const [successOperation, setSuccessOperation] = useState(false);

  const deleteMedicine = (item, index) => {
    dispatch(deleteMedicineAction(item));

    setSuccessOperation(true);
    setTimeout(() => setSuccessOperation(false), 2000);
  };

  const updateMedicine = (item) => {
    // we are doing this so that we can access this objec in the form page
    dispatch(updateRefMedicine(item));

    // form page
    history.push("/add-medicine");
  };
  const getMedicineById = (item) => {
    dispatch(getByIdMedicineAction(item));
  };

  return (
    <>
      <div className="row">
        <div className="col-3 col-md-2 d-none d-md-block"></div>
        <div className="col-12 col-md-8">
          <h3 className="alert alert-primary">Medicine List</h3>

          {successOperation && (
            <div className="alert alert-success">Operation Success</div>
          )}
          <table className="table">
            <thead className="thead-dark sticky-top">
              <tr>
                <th scope="col">ID</th>
                <th scope="col">MEDICINE NAME</th>
                <th scope="col">PRICE</th>
                <th scope="col">MANUFACTURE DATE</th>
                <th scope="col">EXPIRY DATE</th>
                <th scope="col">STOCK</th>
                <th scope="col">ACTION</th>
              </tr>
            </thead>
            <tbody>
              {[...state.medicine.list].map((item, index) => (
                <tr key={index}>
                  <th scope="row">{item.medicineId}</th>
                  <td>{item.medicineName}</td>
                  <td>{item.price}</td>
                  <td>{item.manufactureDate}</td>
                  <td>{item.expiryDate}</td>
                  <td>{item.medicineStock}</td>
                  <td>
                    <input
                      type="button"
                      onClick={() => getMedicineById(item)}
                      value="Detail"
                      className="btn btn-link-secondary"
                    />
                    /
                    <input
                      type="button"
                      onClick={() => updateMedicine(item)}
                      value="Edit"
                      className="btn btn-link"
                    />{" "}
                    /
                    <input
                      type="button"
                      value="Delete"
                      onClick={() => deleteMedicine(item, index)}
                      className="btn btn-link text-danger"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="col-3 col-md-2 d-none d-md-block"></div>
      </div>
      <MedicineModal />
    </>
  );
}
