import React, {Fragment} from "react";
import { Container, Jumbotron, Button, CardGroup, Col, Card } from 'react-bootstrap';
import './main.scss'
import { connect } from 'react-redux';
import { modalOpened } from "../actions";


const MainPage = ({modalOpened}) => {
  return(
    <Fragment>
      <Jumbotron fluid>
        <Container className='text-center'>
           <h1 className='mb-3'>
             <span className="text-warning">
               Проектирование и строительство загородных домов.
             </span>
            <div className="small">
              От проекта до инженерных систем и отделки.
            </div>
          </h1>
          <p className='lead'>
            Наша задача — максимально упростить для заказчика процесс индивидуального строительства. Мы выполняем полный цикл работ по проектированию и строительству загородного дома, что позволяет заказчику иметь дело только с одним подрядчиком.
          </p>
          <Button size='lg' variant="warning" className='text-white' onClick={modalOpened}>
            Оставить заявку
          </Button>
        </Container>
      </Jumbotron>
      <Container>
        <CardGroup id='achiv'>
          <Card>
            <Card.Body>
              <div className="text-center mb-5 text-warning">
                <i className="far fa-calendar-alt fa-5x"/>
              </div>
              <h2 className='h5 text-center text-uppercase text-warning'>Сжатые сроки строительства</h2>
              <p className='text-justify'>
                Минимальный цикл строительных работ при высокой скорости возведения дома и оптимальном соотношении цена-качество.
              </p>
            </Card.Body>
          </Card>
          <Card>
             <Card.Body>
                <div className="text-center mb-5 text-warning">
                  <i className="fas fa-ruble-sign fa-5x"/>
                </div>
               <h2  className='h5 text-center text-uppercase text-warning'>Твердая цена</h2>
               <p className='text-justify'>
                  Мы фиксируем стоимость строительства дома договором и не повышаем ее в процессе постройки под ключ.
               </p>
            </Card.Body>
          </Card>
          <Card>
              <Card.Body>
                <div className="text-center mb-5 text-warning">
                  <i className="fas fa-file-contract fa-5x"/>
                </div>
                <h2  className='h5 text-center text-uppercase text-warning'>Гарантия на дом</h2>
                <p className='text-justify'>
                  На фундамент типа УШП — сроком 10 (десять) лет. На монтаж несущих и ограждающих конструкций, утепление стропильной системы, устройство межэтажных перекрытий, монтаж кровельного покрытия — сроком 5 (пять) лет.
                </p>
              </Card.Body>
            </Card>
        </CardGroup>
      </Container>
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
