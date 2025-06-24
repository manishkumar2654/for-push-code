import axios from "axios";
import { useState, useEffect } from "react";
import Table from 'react-bootstrap/Table';

const Display2 = () => {
  const [mydata, setMydata] = useState([]);

  const loadData = async () => {
    const api = "http://localhost:8000/user/userdisplay2";
    const response = await axios.get(api);
    console.log(response.data);
    setMydata(response.data);
  };
  useEffect(() => {
    loadData();
  }, []);

  
  // const ans = mydata.map((key) => {

  //   return (
  //     <>
  //       <tr>
  //         <td>{key.authername}</td>
  //         <td>{key.address}</td>
  //         <td>{
  //           key.books.map(key1)=>
  //             return(
  //               <>
  //               <p>{key1.bookname}, {key1.price}</p>
                
  //               </>
  //             )
  //           }</td>
  //       </tr>
  //     </>
  //   );
  // });






const ans = mydata.map((key) => {
  return ( <>
    <tr>
      <td>{key.bookname}</td>
      <td>{key.price}</td>
      <td>{key.autherid.authername}</td>
      <td>{key.autherid.address}</td>
    
      <td>
        <button>add mord </button>
      </td>
    </tr>
    </>
  );
});












  return (
    <>
      <h1>display</h1>
      <Table striped bordered hover>
      <thead>
        <tr>
          <th>book name</th>
          <th>price </th>
          <th>auther name</th>
          <th>addres</th>
          
        </tr>
      </thead>
      <tbody>

        {ans}
      </tbody>

        
    </Table>



    </>
  );
};

export default Display2;
