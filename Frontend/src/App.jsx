import Login from "./Components/Login/Login";
import { Routes, Route } from "react-router-dom";
import Signup from "./Components/Signup/Signup";
import Dashboard from "./Pages/Dashboard/Dashboard";
import TOC from "./Pages/TOC/TOC";

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/dashboard" element={<Dashboard/>}></Route>
        <Route path='/terms' element={<TOC/>}></Route>
      </Routes>
    </>
  );
}

export default App;
