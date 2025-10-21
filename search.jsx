import axios from "axios";
import { useState } from "react";


const Search = () => {
    const [name, setNane] = useState("")
    const [mydata, setMydata] = useState([])
    const handleSub = async () => {
        const api = `http://localhost:8000/searchdata/?name=${name}`
        const senddata = await axios.get(api)
        console.log(senddata.data);
        console.log(senddata);
        setMydata(senddata.data);
    }

    const mapu =mydata.map((key)=>{
       return(
        <>
        <h1>{key.name}</h1>
        <h1>{key.email}</h1>
        <h1>{key.age}</h1>
        </>
       )
    })

  return (
    <div>
      <h2>Search data</h2>
      Enter name: <input type="text" value={name} onChange={(e)=>{setNane(e.target.value)}} />
     <button onClick={handleSub}>search..</button>
  {mapu}

    </div>
  );
};

export default Search;