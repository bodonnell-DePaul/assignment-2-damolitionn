import './ToDoList.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TopicListGroup from './TopicListGroup';

function ToDoList() {
  return (
    <Container>
      <Row>
        <Col><h1>Assignment 2: Damien's ToDo List</h1></Col>
      </Row>
      <Row>
        <Col> </Col>
        <Col> <TopicListGroup/> </Col>
      </Row>
    </Container>
  );
}

export default ToDoList;