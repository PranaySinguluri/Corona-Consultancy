import { Button, ListGroup, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { updateRefMedicine } from "../redux/MedicineReducer";

export function DoctorModel() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const updateRefObj = () => {
    dispatch(updateRefMedicine({}));
  };

  return (
    <Modal show={state.medicine.refMed.id} onHide={() => updateRefObj()}>
      <Modal.Header closeButton>
        <Modal.Title>Doctor Details</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ListGroup>
          <ListGroup.Item>
            Doctor Id - {state.medicine.refMed.id}
          </ListGroup.Item>
          <ListGroup.Item>
            Doctor Name - {state.medicine.refMed.name}
          </ListGroup.Item>
          <ListGroup.Item>
            Gender - {state.medicine.refMed.gender}
          </ListGroup.Item>
          <ListGroup.Item>
            Mobile -{state.medicine.refMed.mobile}
          </ListGroup.Item>
          <ListGroup.Item>
            Specialization -{state.medicine.refMed.specialization}
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
