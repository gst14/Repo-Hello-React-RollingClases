import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

export const Egresos = () => {
  const [showModal, setShowModal] = useState(false);
  const handleClose = () => setShowModal(false);
  return (
    <div>
      <h3>Egresos</h3>
      <Button
        variant="danger"
        onClick={() => {
          setShowModal(!showModal);
        }}
      >
        Restar +
      </Button>
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Egresos</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <p>
            Ingrese valor a restar del balance
            </p>
            <input type="number" name="egresoValor" id="egresoValor" />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Guardar Cambios
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
