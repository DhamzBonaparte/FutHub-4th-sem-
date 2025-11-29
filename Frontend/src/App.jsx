import Login from "./Components/Login/Login";
import { Routes, Route } from "react-router-dom";
import Signup from "./Components/Signup/Signup";
import PDashboard from "./Pages/Dashboard/Player/PDashboard";
import ODashboard from "./Pages/Dashboard/Owner/ODashboard";
import TOC from "./Pages/TOC/TOC";

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/player" element={<PDashboard/>}></Route>
        <Route path="/owner" element={<ODashboard/>}></Route>
        <Route path='/terms' element={<TOC/>}></Route>
      </Routes>
    </>
  );
}

export default App;
