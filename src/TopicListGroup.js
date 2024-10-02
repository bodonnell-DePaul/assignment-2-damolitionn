import {ListGroup, Col, Row, Tab} from 'react-bootstrap';
import todos from './todoItems';

function TopicListGroup() {
  return (
    <Tab.Container id="ListGroupWithTabs" defaultActiveKey="0">
      <Row>
        <Col sm={3}>
          <ListGroup>
            {todos.map((todo, index) => (
              <ListGroup.Item action href={`#${index}`} key={index}>
                {todo.title}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
        <Col sm={9}>
          <Tab.Content>
            {todos.map((todo, index) => (
              <Tab.Pane key={index} eventKey={`#${index}`}>
                <p>{todo.description}</p>
                <p>{todo.dueDate}</p>
              </Tab.Pane>
            ))}
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
}

export default TopicListGroup;
