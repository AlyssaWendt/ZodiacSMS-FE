import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, {useState} from 'react';
import axios from "axios"
import Logo from '../components/Logo';
import Brief from '../components/Brief';

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
        const newUser = {
            name: input.name,
            number: input.number,
            sign: input.sign
        }
   
        axios.post('http://localhost:4000/zodiacsms', newUser)
            .then(function (response) {
           
            console.log(response);
          }).catch(function (error) {
           
            console.log(error);
          }).then(function () {
           
          });
          alert("Check your phone for a verification text")

    }


  return (
    <>
    <Logo />
    <Brief />
    <Form className='form'>
        <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Name</Form.Label>
        <Form.Control name="name" type="text" value={input.name} placeholder="Name" onChange={handleChange}/>
      </Form.Group>
     

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control name="number" type="text" value={input.number} placeholder="Number" onChange={handleChange}/>
        <Form.Text className="text-muted">
          We'll never share your phone number with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Sign</Form.Label>
        <Form.Control name="sign" type="text" value={input.sign} placeholder="Sign" onChange={handleChange}/>
      </Form.Group>
    
      <Button variant="primary" type="submit" onClick={handleClick} >
        Submit
      </Button>
    </Form>
    </>
  );
}

export default Main;
