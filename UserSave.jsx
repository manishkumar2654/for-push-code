import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const UserSave=()=>{

  const [input, setInput] = useState({});
  //const [password, setPassword] = useState("");


  //const navigate= useNavigate();
  const handleSubmit=async(e)=>{
       e.preventDefault();
       const api ="http://localhost:8000/user/usersave"
      const response = await axios.post(api, input);
      console.log(response.data);
      
  }

  const handleInput=(e)=>{
    let name = e.target.name;
    let value = e.target.value;
    setInput(values=>({...values, [name]:value}));
    console.log(input)
  }

  return(
        <>
          <h1> User Login</h1>
          <Form style={{width:"400px"}}>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Authername</Form.Label>
        <Form.Control type="text" name='authername'  value={input.authername} onChange={handleInput}  />
      </Form.Group>


      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Adress</Form.Label>
        <Form.Control type="text" name='address'  value={input.address} onChange={handleInput}  />
      </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Book name</Form.Label>
        <Form.Control type="text" name='bookname'  value={input.bookname} onChange={handleInput}   />
      </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter price</Form.Label>
        <Form.Control type="text" name='price'  value={input.price} onChange={handleInput}   />
      </Form.Group>



      <Button variant="primary" type="submit" onClick={handleSubmit}>
        Submit
      </Button>
    </Form>
        </>
    )
}
export default UserSave;