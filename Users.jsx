
import { useEffect , useState } from "react";
import axios from "axios";

const Users =()=>{
    const [user , setUser] = useState([])
    const getuser=async()=>{
        let api = "http://localhost:8000/getuser"
        const response = await axios.get(api)
        console.log(response.data)
        setUser(response.data)
    }
    useEffect(()=>{
     getuser()
    } , [])
    const result = user.map((key)=>{
        return(
            <>
             <tr>
                <td>{key.name}</td> 
                <td>{key.email}</td> 
                <td>{key.age}</td>
             </tr>
            </>
        )
    })
    return(
     <>
      <div><p>
        users details</p></div>
       <table>
        <th>
            <td>name</td>
            <td>email</td>
            <td>age</td>
        </th>
        <tbody>
        {result}
        </tbody>
       
       </table>
     </>
    )
}
export default Users;