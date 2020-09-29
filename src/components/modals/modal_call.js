import React from "react";
import { Modal, ModalDialog, Form, Button } from "react-bootstrap";
import { connect } from 'react-redux';
import { modalClosed } from "../../actions";

const ModalCall = ({modalShow, modalClosed}) => {
  return(
    <Modal centered show={modalShow}>
      <Modal.Header closeButton onClick={modalClosed}>
        <Modal.Title>
          Заказать обратный звонок
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group>
            <Form.Label>Телефон</Form.Label>
            <Form.Control type='phone' placeholder='Телефон'/>
          </Form.Group>
          <Button type='submit'> Отправить </Button>
        </Form>
      </Modal.Body>
    </Modal>
  )
}
const mapStateToProps = ({modalShow}) => {
  console.log(modalShow);
  return {
    modalShow: modalShow
  }
}

const mapDispatchToProps = {
  modalClosed
}
export default connect(mapStateToProps, mapDispatchToProps)(ModalCall);
