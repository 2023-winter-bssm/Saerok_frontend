import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../src/pages/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
