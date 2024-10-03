/*Name: Damien Yap*/
import { ListGroup, Col, Row, Tab } from 'react-bootstrap';
import { useState } from 'react';
import todos from './todoItems';
import './TopicListGroup.css';

function TopicListGroup() {
    const [todoItems, setTodoItems] = useState(todos);

    const ChangedDate = (index, newDate) => {
        const updatedTodos = [...todoItems];
        updatedTodos[index].dueDate = newDate;
        setTodoItems(updatedTodos);
    };

    const ChangedDescription = (index, newDescription) => {
        const updatedTodos = [...todoItems];
        updatedTodos[index].description = newDescription;
        setTodoItems(updatedTodos);
    };

    return (
        <Tab.Container id="list-group-tab" defaultActiveKey="0">
        <Row>
            <Col sm={4}>
            <ListGroup>
                {todos.map((todo, index) => (
                <ListGroup.Item className = 'list-group-item' action href={`#${index}`} key={index} variant = {GetListColour(todo.dueDate)} >
                    {todo.title}
                </ListGroup.Item>
                ))}
            </ListGroup>
            </Col>
            <Col sm={8}>
            <Tab.Content>
                {todos.map((todo, index) => (
                <Tab.Pane key={index} eventKey={`#${index}`}>
                    <div contentEditable suppressContentEditableWarning onBlur={(e) => ChangedDescription(index, e.target.innerText)}>
                        {todo.description}
                    </div>
                    <input className = 'date-item' type="date" value={todo.dueDate} onChange={(e) => ChangedDate(index, e.target.value)} />
                </Tab.Pane>
                ))}
            </Tab.Content>
            </Col>
        </Row>
        </Tab.Container>
    );
}

function GetListColour(dueDate) {
    const current = new Date();
    const due = new Date(dueDate);
    const timeDiff = Math.abs(due - current);
    const dayDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
  
    if (dayDiff > 7) { return 'primary'; }
    else if (dayDiff <= 7 && dayDiff > 4) { return 'success'; }
    else if (dayDiff <= 4 && dayDiff >= 2) { return 'warning'; }
    else if (dayDiff < 2) { return 'danger' };
}

export default TopicListGroup;