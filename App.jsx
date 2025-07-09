import {BrowserRouter, Routes, Route} from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";

import Registration from "./pages/Registration";

import UserSave from "./pages/UserSave";
import Display from "./pages/Display";
import Display2 from "./pages/Display2";


const App=()=>{
  return(
    <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout/>}>
             <Route index element={<Home/>} />
             <Route path="home" element={<Home/>}/>
             <Route path="usersave" element={<UserSave/>}/>
             <Route path="registration" element={<Registration/>}/>
             <Route path="display" element={<Display/>}/>
             <Route path="display2" element={<Display2/>}/>
             
           
            </Route>
            
          </Routes>
        </BrowserRouter>
    </>
  )
}
export default App;