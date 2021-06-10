import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import {
  getByIdMedicineAction,
  updateRefMedicine,
} from "../redux/MedicineReducer";
import { getAllMedicineReportAction } from "../redux/MedicineReportReducer";
import { DoctorModel } from "./DoctorModel";
import { MedicineModal } from "./MedicineModal";
import { PatientModal } from "./PatientModal";

export function MedicineReportList() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const history = useHistory();
  console.log(state);

  useEffect(() => {
    dispatch(getAllMedicineReportAction());
  }, []);

  const [successOperation, setSuccessOperation] = useState(false);

  const getMedicine = (item) => {
    console.log(item);
    dispatch(updateRefMedicine(item));
  };
  const getPatient = (item) => {
    dispatch(updateRefMedicine(item));
  };
  const getDoctor = (item) => {
    dispatch(updateRefMedicine(item));
  };

  return (
    <>
      <div className="row">
        <div className="col-3 col-md-2 d-none d-md-block"></div>
        <div className="col-12 col-md-8">
          <h3 className="alert alert-secondary">Medicine Report List</h3>

          {successOperation && (
            <div className="alert alert-success">Operation Success</div>
          )}

          <table className="table">
            <thead className="thead-dark">
              <tr>
                <th scope="col">ID</th>
                <th scope="col">REPORT DATE</th>
                <th scope="col">MEDICINE ID</th>
                <th scope="col">PATIENT ID</th>
                <th scope="col">DOCTOR ID</th>
              </tr>
            </thead>
            <tbody>
              {[...state.medicineReport.list].map((item, index) => (
                <tr key={index}>
                  <th scope="row">{item.medicineReportId}</th>
                  <td>{item.reportDate}</td>
                  <td>
                    {" "}
                    <input
                      type="button"
                      value="MedicineDetails"
                      onClick={() => getMedicine(item.medicine)}
                    />
                  </td>
                  <td>
                    <input
                      type="button"
                      value="PatientDetails"
                      onClick={() => getPatient(item.patient)}
                    />
                  </td>
                  <td>
                    {" "}
                    <input
                      type="button"
                      value="DoctorDetails"
                      onClick={() => getDoctor(item.doc)}
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
      <PatientModal />
      <DoctorModel />
    </>
  );
}
