import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

export const ModalMovimiento = ({show}) => {
  const [openModal, setOpenModal] = useState(show);

  const handleClose = () => setOpenModal(false);
  return (
    <Modal show={openModal} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cerrar
        </Button>
        <Button variant="primary" onClick={handleClose}>
          Guardar Cambios
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
