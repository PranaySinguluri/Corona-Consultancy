import { Button, ListGroup, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { updateRefMedicine } from "../redux/MedicineReducer";

export function PatientModal() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const updateRefObj = () => {
    dispatch(updateRefMedicine({}));
  };

  return (
    <Modal show={state.medicine.refMed.patientId} onHide={() => updateRefObj()}>
      <Modal.Header closeButton>
        <Modal.Title>Patient Details</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ListGroup>
          <ListGroup.Item>
            Patient Id - {state.medicine.refMed.patientId}
          </ListGroup.Item>
          <ListGroup.Item>
            Patient Name - {state.medicine.refMed.name}
          </ListGroup.Item>
          <ListGroup.Item>
            Gender - {state.medicine.refMed.gender}
          </ListGroup.Item>
          <ListGroup.Item>
            Mobile -{state.medicine.refMed.mobile}
          </ListGroup.Item>
          <ListGroup.Item>
            Location -{state.medicine.refMed.location}
          </ListGroup.Item>
        </ListGroup>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => updateRefObj()}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
