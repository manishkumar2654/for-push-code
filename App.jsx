import {BrowserRouter, Routes, Route} from "react-router-dom";

import CreateUser from "./CreateUser";
import Updateuser from "./Updateuser";
import Users from "./Users";
import Home from "./Home";
import Display from "./Display";
import Edit from "./Edit";
import Search from "./search";


const App = () => {
  return(
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}> </Route>
      <Route path="/create" element={<CreateUser/>}> </Route>
      <Route path="/update" element={<Updateuser/>}> </Route>
      <Route path="/user" element={<Users/>}></Route>
      <Route path="/display" element={<Display/>}></Route>
      <Route path="/edit/:id" element={<Edit/>}></Route>
      <Route path="/search" element={<Search/>}></Route>
    </Routes>
    </BrowserRouter>
    
   
    
    </>
  )
}
export default App