import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { Link,Outlet } from "react-router-dom"
const DashBoard = ()=>{
    const navigate = useNavigate()
    const admintoken = localStorage.getItem("token")
    const Authentication = ()=>{
     if(!admintoken){
        alert("login First")
        navigate("/adminlogin")
        
     }
    }
    useEffect(()=>{
    Authentication()
    },[])
    return(
        <>
         <div style={{display:'flex',width:'100%',alignItems:'center'}}>
            <div style={{width:"20%"}}>
                <ul>
                    <li><Link to="add">add show</Link></li>
                </ul>
              
            </div>
            <div style={{width:"80%"}}>
                 <Outlet/>
            </div>
         </div>
        </>
    )
}
export default DashBoard

