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
        <Tab.Container id="ListGroupWithTabs" defaultActiveKey="0">
        <Row>
            <Col sm={4}>
            <ListGroup>
                {todos.map((todo, index) => (
                <ListGroup.Item className = 'todo-item' action href={`#${index}`} key={index} variant = {GetListColour(todo.dueDate)} >
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
    const diff = Math.floor((due - current) / (1000 * 60 * 60 * 24));

    if (diff > 7) { return 'primary'; }
    else if (diff >= 4) {return 'success'; }
    else if (diff >= 2) {return 'warning'; }
    else { return 'danger'; }
}

export default TopicListGroup;