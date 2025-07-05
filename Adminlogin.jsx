import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import BackEndUrl from "../config/BackEndUrl";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Adminlogin = () => {
  const [adminid, setAdminid] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(adminid, password);
    try {
      let api = `${BackEndUrl}/admin/adminlogin`;
      const response = await axios.post(api, { adminid, password });
      localStorage.setItem("adminid", response.data.adminid);
      navigate("/admindashboard");
      console.log(response);
    } catch (error) {
      alert(error.response.data.msg);
    }
  };
  return (
    <>
      <Form>
        <h1>admin login</h1>

        <Form.Label>Enter id</Form.Label>
        <Form.Control
          type="text"
          value={adminid}
          onChange={(e) => {
            setAdminid(e.target.value);
          }}
        />

        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />

        <Button variant="primary" type="submit" onClick={handleSubmit}>
          Submit
        </Button>
      </Form>
    </>
  );
};

export default Adminlogin;
