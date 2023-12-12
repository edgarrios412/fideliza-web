import { Route, Routes } from "react-router-dom"
import Landing from "./src/pages/Landing/Landing"
import Login from "./src/pages/Authentication/Login"
import Register from "./src/pages/Authentication/Register"
import Dashboard from "./src/pages/Dashboard/Dashboard"

const App = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={<Landing/>}/>
      <Route path="/ingreso" element={<Login/>}/>
      <Route path="/registro" element={<Register/>}/>
      <Route path="/inicio" element={<Dashboard/>}/>
    </Routes>
    </>
  )
}

export default App
