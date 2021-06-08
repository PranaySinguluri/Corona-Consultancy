import { Button, ListGroup, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { updateRefMedicine } from "../redux/MedicineReducer";

export function MedicineModal() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const updateRefObj = () => {
    dispatch(updateRefMedicine({}));
  };

  return (
    <Modal
      show={state.medicine.refMed.medicineId}
      onHide={() => updateRefObj()}
    >
      <Modal.Header closeButton>
        <Modal.Title>Medicine Details</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ListGroup>
          <ListGroup.Item>
            MedicineName - {state.medicine.refMed.medicineName}
          </ListGroup.Item>
          <ListGroup.Item>Price - {state.medicine.refMed.price}</ListGroup.Item>
          <ListGroup.Item>
            ManufactureDate - {state.medicine.refMed.manufactureDate}
          </ListGroup.Item>
          <ListGroup.Item>
            ExpiryDate-{state.medicine.refMed.expiryDate}
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
