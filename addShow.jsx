import { useState } from "react";
import Form from "react-bootstrap/Form";
import BackendURL from "../config/backendURL";
import axios from "axios";
const Addshow = () => {
  const [Data, setData] = useState({});
  const [imagem, setImages] = useState("");

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setData((values) => ({ ...values, [name]: value }));
    console.log(Data);
  };

const handleimage = (e) => {
    setImages(e.target.files[0]);
    console.log(imagem)
  };





  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   let api = `${BackendURL}/admin/addshow`;
  //   const res = await axios.post(api, Data);
  //   console.log(res.data);
  //   alert("Show succefully added");
  // };

   const handleSubmit=async(e)=>{
         e.preventDefault();
        const formData= new FormData();

        formData.append("file",imagem);
        formData.append("name",Data.name)
        formData.append("location",Data.location)
        formData.append("time",Data.time)

        
         let api = `${BackendURL}/admin/addshow`;
         const response = await axios.post(api, formData);
         console.log(response);
         alert("Product Save!")
  }

  




  return (
    <>
      <Form>
        <Form.Group className="mb-3" controlId="formGroupName">
          <Form.Label>movie Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter moviename"
            name="name"
            onChange={handleInput}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGroupLocation">
          <Form.Label>Location</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Location"
            name="location"
            onChange={handleInput}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGroupTime">
          <Form.Label>Enter Timings</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Timings"
            name="time"
            onChange={handleInput}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGroupTime">
          <Form.Label>upload image</Form.Label>
          <Form.Control type="file"  onChange={handleimage}  />
        </Form.Group>

        <button onClick={handleSubmit}>Submit</button>
      </Form>
    </>
  );
};

export default Addshow;
