/*Name: Damien Yap*/
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './ToDoForm.css';

function ToDoForm() {
  return (
    <Form className="form-container">
      <Form.Group className="mb-3" controlId="ToDoItem">
        <Form.Label>ToDo Item</Form.Label>
        <Form.Control type="text" placeholder="Add todo item" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="DueDate">
        <Form.Label>Due Date</Form.Label>
        <Form.Control type="date" placeholder="mm/dd/yyyy" />
      </Form.Group>
      <Button className= "w-100" variant="primary" type="submit" >
        Add Todo
      </Button>
    </Form>
  );
}

export default ToDoForm;