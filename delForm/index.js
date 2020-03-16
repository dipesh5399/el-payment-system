import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";

export default class DeleteModal extends Component {
  render() {
    return (
		<Modal
		show={true}
		shouldCloseOnEsc={false}
		shouldCloseOnOverlayClick={false}
	  >
		<Modal.Header>
		  <Modal.Title>
			Warning...
		  </Modal.Title>
		</Modal.Header>
		<Modal.Body>
		 Are You Sure ?
		</Modal.Body>
		<br></br>
		<Modal.Footer>
		  <Button type="submit" variant="primary" onClick={this.props.onConfirmClick} >
			Yes
		  </Button>
		  <Button type="Cancel" variant="secondary" onClick={this.props.onCloseClick}>
			Cancel
		  </Button>
		</Modal.Footer>
	  </Modal>
    );
  }
}
