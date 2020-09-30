import React from "react";
import { Modal, Form, Button } from "react-bootstrap";
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
          <Form.Group controlId='callName'>
            <Form.Label>Ваше имя</Form.Label>
            <Form.Control type='text' placeholder='Имя'/>
          </Form.Group>
          <Form.Group controlId='callPhone'>
            <Form.Label>Ваш телефон</Form.Label>
            <Form.Control type='tel' placeholder='Телефон' pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"/>
          </Form.Group>
          <Form.Group className='text-right'>
            <Button type='submit' variant='success'>Отправить</Button>
          </Form.Group>

        </Form>
      </Modal.Body>
    </Modal>
  )
}
const mapStateToProps = ({modalShow}) => {
  return {
    modalShow: modalShow
  }
}

const mapDispatchToProps = {
  modalClosed
}
export default connect(mapStateToProps, mapDispatchToProps)(ModalCall);
