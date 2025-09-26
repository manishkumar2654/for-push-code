import React from 'react'
import { useState } from 'react';
import axios from 'axios'
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

const Edit = () => {
    const [input, setInput] = useState({})
const {id} = useParams();
    const handleInput = (e) => {
        const { name, value } = e.target;
        setInput((pre) => ({ ...pre, [name]: value }))
        console.log(input);

    }

    const loadData = async()=>{

        try {
           const res= await axios.get(`http://localhost:3000/view/?id=${id}`);
           console.log(res);
           setInput(res.data.data)
           
        } catch (error) {
            console.log(error);
            
        }
    }
      useEffect(() => {
            loadData();
        }, [])


        const handleSubmit = async(e)=>{
        e.preventDefault();

        try {
           const res= await axios.post("http://localhost:3000/update",input);
           console.log(res);
           alert(res.data.message)
        } catch (error) {
            console.log(error);
            
        }
    }
    return (
        <div>
            <form>
                <label> Enter Employee NO. : </label>
                <input type="text" name='empno' value={input.empno} onChange={handleInput} /><br /><br />
                <label> Enter Name : </label>
                <input type="text" name='name' value={input.name} onChange={handleInput} /><br /><br />
                <label> Enter City : </label>
                <input type="text" name='city' value={input.city} onChange={handleInput} /><br /><br />
                <label> Enter Designation : </label>
                <input type="text" name='des' value={input.des} onChange={handleInput} /><br /><br />
                <label> Enter Salary : </label>
                <input type="text" name='salary' value={input.salary} onChange={handleInput} /><br /><br />

                <button onClick={handleSubmit}>SAVE</button>
            </form>
        </div>
    )
}

export default Edit