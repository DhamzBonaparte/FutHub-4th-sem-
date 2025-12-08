import Login from "./Components/Login/Login";
import { Routes, Route } from "react-router-dom";
import Signup from "./Components/Signup/Signup";
import PDashboard from "./Pages/Dashboard/Player/PDashboard";
import ODashboard from "./Pages/Dashboard/Owner/ODashboard";
import Home from "./Pages/Home/Home";
import TOC from "./Pages/TOC/TOC";
import Opponent from "./Pages/Dashboard/Player/opponent/Opponent";
import Service from "./Pages/Service/Service";
import Main from "./Pages/Dashboard/Player/Main/Main";
import Teammate from "./Pages/Dashboard/Player/Teammate/Teammate";

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/player" element={<PDashboard />}></Route>
        <Route path="/owner" element={<ODashboard />}></Route>
        <Route path="/terms" element={<TOC />}></Route>
        <Route path="/" element={<Home />}></Route>
        <Route path="/service" element={<Service />}></Route>
        <Route path="/player" element={<PDashboard />}>
          <Route index element={<Main/>}></Route>
          <Route path="/player/find-opponent" element={<Opponent />}></Route>
          <Route path='/player/find-teammates' element={<Teammate/>}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
