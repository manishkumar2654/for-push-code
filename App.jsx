import  { BrowserRouter,Routes,Route } from "react-router-dom"

import Login from "./Login"
const App = () => {
  return(
    <>
    <h1>Brouserroter and alll</h1>

    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login/>}>
    

      </Route>
    </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App