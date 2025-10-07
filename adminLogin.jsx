
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import BackendURL from '../config/backendURL';
import axios from "axios"
import { useNavigate } from 'react-router-dom';
const AdminLogin = ()=>{
    const [mData,setData] = useState({})
    const navigate =  useNavigate()
    const handleChange = (e)=>{
      let name = e.target.name
      let value = e.target.value

      setData(values=>({...values,[name]:value}))
      console.log(mData)
    }
    const handleSubmit = async(e)=>{
        e.preventDefault()
        let api = `${BackendURL}/admin/login`
        const res = await axios.post(api,mData)
         localStorage.setItem("token",res.data.token)
        navigate("/dashboard")

    }
    return(
        <>
        
        <Form>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" name='email' onChange={handleChange} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" name='password' onChange={handleChange} />
      </Form.Group>
      <button onClick={handleSubmit}>Login</button>
    </Form>
        </>
    )
}


export default AdminLogin