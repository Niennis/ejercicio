import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const ModalCom = (title) => ({
  render() {
    return (
      <div>
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{ title }</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Instrucciones</h4>
            <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleClose}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
})

export default ModalCom;