import axios from "axios"
import { useState } from "react"
import BackendURL from "../config/backendURL"
import { useNavigate } from "react-router-dom"
const Signup = ()=>{
    const [mydata,setMydata] = useState({})
    const navigate =  useNavigate()
    const handleChange = (e)=>{
        let name = e.target.name
        let value = e.target.value

        setMydata(values=>({...values,[name]:value}))
        console.log(mydata)
    }
    const handleSubmit = async(e)=>{
       e.preventDefault()
       let api = `${BackendURL}/user/signup`
       const res = await axios.post(api,mydata)
       
        alert(res.data.masg)
        navigate("/login")
     
       

    }
    return(
        <>
                  <h1>            New User
                  </h1>
            Enter userid : <input type="text" name="userid" onChange={handleChange} /> <br />
            Enter name : <input type="text" name="name" onChange={handleChange} /> <br />
            Enter city : <input type="text" name="city" onChange={handleChange} /> <br />
            Enter password : <input type="text" name="password" onChange={handleChange} /> <br />
            <button onClick={handleSubmit}>Register</button>
        </>
    )
}

export default Signup