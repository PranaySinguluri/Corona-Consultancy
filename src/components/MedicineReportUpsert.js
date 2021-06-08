import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { createMedicineReportAction } from "../redux/MedicineReportReducer";

export function MedicineReportUpsert() {
  const dispatch = useDispatch();
  const history = useHistory();
  const state = useSelector((state) => state);

  const [reportDate, setReportDate] = useState(
    state.medicineReport.refMedReport.reportDate
  );
  const [medicineId, setMedicineId] = useState(
    state.medicineReport.refMedReport.medicineId
  );
  const [patientId, setPatientId] = useState(
    state.medicineReport.refMedReport.patientId
  );
  const [id, setDoctorId] = useState(state.medicineReport.refMedReport.id);

  const [successOperation, setSuccessOperation] = useState(false);
  const [errorOperation, setErrorOperation] = useState(false);

  const updateReportDate = (e) => setReportDate(e.target.value);
  const updateMedicineId = (e) => setMedicineId(e.target.value);
  const updatePatientId = (e) => setPatientId(e.target.value);
  const updateDoctorId = (e) => setDoctorId(e.target.value);

  const addMedicineReport = (e) => {
    e.preventDefault();

    // THIS IS REDUX ACTION CALLING
    dispatch(
      createMedicineReportAction({
        reportDate,
        medicineId,
        patientId,
        id,
      })
    );

    // A1 sucess
    setSuccessOperation(true);
    setTimeout(() => setSuccessOperation(false), 5000);

    // A2: navigate to another page
    // history.push("/list-employee");

    // reset the form
    setReportDate("");
    setMedicineId("");
    setPatientId("");
    setDoctorId("");
  };

  return (
    <div className="row">
      <div className="col-3 col-md-3 d-none d-md-block"></div>
      <div className="col-12 col-md-6">
        <h3 className="alert alert-secondary">create Report</h3>

        {/** BELOW THESE TWO TAGS MUST BE CONDITIOANL */}
        {successOperation && (
          <div className="alert alert-success">Operation Success</div>
        )}

        <div className="mb-1">
          <input
            type="text"
            value={reportDate}
            onChange={(e) => updateReportDate(e)}
            className="form-control"
            placeholder="Enter report Date"
          />
        </div>

        <div className="mb-1">
          <input
            type="text"
            value={medicineId}
            onChange={(e) => updateMedicineId(e)}
            className="form-control"
            placeholder="Enter medicineId"
          />
        </div>

        <div className="mb-1">
          <input
            type="text"
            value={patientId}
            onChange={(e) => updatePatientId(e)}
            className="form-control"
            placeholder="Enter patientId"
          />
        </div>

        <div className="mb-1">
          <input
            type="text"
            value={id}
            onChange={(e) => updateDoctorId(e)}
            className="form-control"
            placeholder="Enter Doctor Id"
          />
        </div>

        <div className="mb-1">
          <input
            type="button"
            className="btn btn-secondary w-100"
            value="create Medicine Report"
            onClick={(e) => addMedicineReport(e)}
          />
        </div>
      </div>
      <div className="col-3 col-md-3  d-none d-md-block"></div>
    </div>
  );
}
