import './ToDoList.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TopicListGroup from './TopicListGroup';
import ToDoForm from './ToDoForm';

function ToDoList() {
  return (
    <Container>
      <Row className = 'header-row'>
        <Col>
          <h1 className = 'header-text'>Assignment 2: Damien's ToDo List</h1>
        </Col>
      </Row>
      <Row className = 'form-list-row'>
        <Col> <ToDoForm/> </Col>
        <Col> <TopicListGroup/> </Col>
      </Row>
    </Container>
  );
}

export default ToDoList;