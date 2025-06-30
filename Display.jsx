import axios from "axios";
import { useState, useEffect } from "react";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';


const Display = () => {
  const [mydata, setMydata] = useState([]);
   const [show, setShow] = useState(false);
   const [authid, setAuthid] = useState("");
   const [booktitle, setBooktitle] = useState("");
   const [bookprice, setBookprice] = useState("");

  const handleClose = () => setShow(false);

  const handleShow = (id) => {
   
    setAuthid(id)
    setShow(true);
  };

  const loadData = async () => {
    const api = "http://localhost:8000/user/userdisplay";
    const response = await axios.get(api);
    console.log(response.data);
    setMydata(response.data);
  };
  useEffect(() => {
    loadData();
  }, []);

  const handleSubmit =async (e)=>{
    e.preventDefault();
    
        const api = "http://localhost:8000/user/addbook";
    const response = await axios.post(api, {authid, booktitle, bookprice})
    console.log(response);
    

  }
  
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
      <td>{key.authername}</td>
      <td>{key.address}</td>
      <td>
        {key.books.map((key1) => {

            return(
              <>
              <p>{key1.bookname}, {key1.price}</p>
              
              
              </>
            )


        }
          
        )}
      </td>
      <td>
       <Button variant="primary" onClick={()=>{handleShow(key._id)}}>
       Add more
      </Button>
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
          <th>Auther name</th>
          <th>addres Name</th>
          <th>book detail</th>
          <th></th>
          
        </tr>
      </thead>
      <tbody>

        {ans}
      </tbody>

        
    </Table>




      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>book detail</Modal.Title>
        </Modal.Header>
        <Modal.Body>



         <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter book title</Form.Label>
        <Form.Control type="text"  value={booktitle} onChange={(e)=>{setBooktitle(e.target.value)}} />

        
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter price</Form.Label>
        <Form.Control type="text"  value={bookprice} onChange={(e)=>{setBookprice(e.target.value)}} />
      </Form.Group>

      <Button variant="primary" type="submit" onClick={handleSubmit}>
        Submit
      </Button>
    </Form>




        </Modal.Body>
       
      </Modal>



    </>
  );
};

export default Display;
