import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function ToDoForm() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="ToDoItem">
        <Form.Label>ToDo Item</Form.Label>
        <Form.Control type="text" placeholder="Add todo item" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="DueDate">
        <Form.Label>Due Date</Form.Label>
        <Form.Control type="date" placeholder="mm/dd/yyyy" />
      </Form.Group>
      <Button variant="primary" type="submit" className= "w-100">
        Add Todo
      </Button>
    </Form>
  );
}

export default ToDoForm;