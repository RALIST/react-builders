import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { connect } from 'react-redux';
import { modalOpened } from "../../actions";

const TopHeader = ({modalOpened}) => {
  return (
    <Container className='d-none d-lg-flex'>
        <Row className='py-2 align-items-center text-center'>
          <Col>
            <div className="lead">
              +7 (912) 777-77-77
            </div>
            <Button variant='link' size='sm' onClick={modalOpened} className='text-warning'>
              Заказать звонок
            </Button>
          </Col>
          <Col>
            <span className="h3">
              Строительная артель Максима Воробьева
            </span>
          </Col>
          <Col>
            <div className='lead'>
              Проектирование и строительство загородных домов
            </div>
          </Col>
        </Row>
      </Container>
  )
}

const mapStateToProps = ({modalShow}) => {
  return {
    modalShow: modalShow
  }
}

const mapDispatchToProps = {
  modalOpened
}

export default connect(mapStateToProps, mapDispatchToProps)(TopHeader);
