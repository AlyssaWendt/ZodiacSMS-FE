import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, {useState} from 'react';

function Main() {
    const [input, SetInput] = useState({
        name: '',
        number: '',
        sign: '',
    })

    function handleChange(e) {
       const {name, value} = e.target
       SetInput(prevInput =>{
        return{
            ...prevInput,
            [name]: value
        }
       })
    }
    function handleClick(e) {
        e.preventDefault();
        console.log(input)
    }

  return (
    <Form>
        <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Name</Form.Label>
        <Form.Control name="name" type="text" value={input.name} placeholder="Name" onChange={handleChange}/>
      </Form.Group>
     

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control name="number" type="text" value={input.number} placeholder="Enter your Phone Number" onChange={handleChange}/>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Sign</Form.Label>
        <Form.Control name="sign" type="text" value={input.sign} placeholder="Sign" onChange={handleChange}/>
      </Form.Group>
    
      <Button variant="primary" type="submit" onClick={handleClick}>
        Submit
      </Button>
    </Form>
  );
}

export default Main;
