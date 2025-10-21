import axios from "axios";
import { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";

const Updateuser = () => {
  const [mydata, setMydata] = useState([]);

  const navigate = useNavigate();

  const dataloadkenekleye = async () => {
    const api = "http://localhost:8000/updatefrontend";
    const bakendsedata = await axios.get(api);
    console.log(bakendsedata.data);
    setMydata(bakendsedata.data);
  };

  useEffect(() => {
    dataloadkenekleye();
  }, []);

const recDel =async (id) => {
  
  const api = `http://localhost:8000/delete/?myid=${id}`;
  const editkleye = await axios.delete(api);
  console.log(editkleye.data);
  
   dataloadkenekleye();

}

const meraedit = async (id) => {
   navigate(`/edit/${id}`)
    
}


  // ✅ Generate only <tr> rows inside map
  const mydatakadat = mydata.map((key, index) => (
    <tr key={key._id || index}>
      <td>{key.name}</td>
      <td>{key.email}</td>
      <td>{key.age}</td>
      <td>{key._id}</td>
      <td onClick={()=>{recDel(key._id)}}>delettt</td>
      <td onClick={()=>meraedit(key._id)}>edit</td>
    </tr>
  ));

  return (
    <>
      <div className="container mt-3">
        <h4>User Details</h4>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Age</th>
              <th>key.id</th>
              <th>delete</th>
              <th>edit</th>
            </tr>
          </thead>

          <tbody>
            {mydatakadat}
          </tbody>
        </Table>  
      </div>
    </>
  );
};

export default Updateuser;
