import React, {Fragment} from "react";
import { Container, Jumbotron, Button } from 'react-bootstrap';
import './main.scss'
import { connect } from 'react-redux';
import { modalOpened } from "../actions";


const MainPage = ({modalOpened}) => {
  return(
    <Fragment>
      <Jumbotron fluid>
        <Container className='text-center'>
           <h1 className='mb-3'>
            Проектирование и строительство загородных домов.
            <div className="small">
              От проекта до инженерных систем и отделки.
            </div>
          </h1>
          <p className='lead'>
            Наша задача — максимально упростить для заказчика процесс индивидуального строительства. Мы выполняем полный цикл работ по проектированию и строительству загородного дома, что позволяет заказчику иметь дело только с одним подрядчиком.
          </p>
          <Button size='lg' onClick={modalOpened}>
            Заказать консультацию
          </Button>
        </Container>
      </Jumbotron>
      <Container>
        <ul className='text-justify list-unstyled lead'>
          <li>
            <i className="fas fa-check text-success mr-2"/>
            грамотно привяжем и правильно посадим дом на участок
          </li>
          <li>
            <i className="fas fa-check text-success mr-2"/>
            учтем все особенности территории
          </li>
          <li>
            <i className="fas fa-check text-success mr-2"/>
            изучим план подземных и наземных коммуникаций (существующих и перспективных);
          </li>
          <li>
            <i className="fas fa-check text-success mr-2"/>
            учтем пожелания об ориентации строения относительно сторон света, соседних домов и многое другое
          </li>
          <li>
            <i className="fas fa-check text-success mr-2"/>
            обеспечим чистоту на строительной площадке, полную сохранность прочих построек, посадок
          </li>
        </ul>
      </Container>
    </Fragment>


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

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
