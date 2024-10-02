import {ListGroup, Col, Row, Tab} from 'react-bootstrap';
import todos from './todoItems';

function TopicListGroup() {
  return (
    <Tab.Container id="ListGroupWithTabs" defaultActiveKey="0">
      <Row>
        <Col sm={3}>
          <ListGroup>
            {todos.map((todo, index) => (
              <ListGroup.Item action href={`#${index}`} key={index} variant = {GetListColour(todo.dueDate)}>
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

function GetListColour(dueDate) {
    const currentDate = new Date();
    const due = new Date(dueDate);
    const currentUTC = Date.UTC(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate());
    const dueUTC = Date.UTC(due.getFullYear(), due.getMonth(), due.getDate());
    const diff = Math.floor((dueUTC - currentUTC) / (1000 * 60 * 60 * 24));

    if (diff > 7) { return 'primary'; }
    else if (diff >= 4) {return 'success'; }
    else if (diff >= 2) {return 'warning'; }
    else { return 'danger'; }
}

export default TopicListGroup;