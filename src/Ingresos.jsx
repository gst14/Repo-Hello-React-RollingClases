import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

export const Ingresos = () => {
  const [showModal, setShowModal] = useState(false);
  const handleClose = () => setShowModal(false);
  return (
    <div>
      <h3>Ingresos</h3>
      <Button
        variant="success"
        onClick={() => {
          setShowModal(!showModal);
        }}
      >
        Agregar +
      </Button>
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Ingrese valor a sumar al balance</p>
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
