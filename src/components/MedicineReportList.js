import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { getAllMedicineReportAction } from "../redux/MedicineReportReducer";

export function MedicineReportList() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const history = useHistory();
  console.log(state);

  useEffect(() => {
    dispatch(getAllMedicineReportAction());
  }, []);

  const [successOperation, setSuccessOperation] = useState(false);

  // const updateEmployee = (item) => {
  //   // we are doing this so that we can access this objec in the form page
  //   dispatch(updateRefEmployee(item));

  //   // form page
  //   history.push("/create-employee");
  // };

  return (
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
              <th scope="col">#ID</th>
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
                <td>{item.medicineId}</td>
                <td>{item.patientId}</td>
                <td>{item.id}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="col-3 col-md-2 d-none d-md-block"></div>
    </div>
  );
}
