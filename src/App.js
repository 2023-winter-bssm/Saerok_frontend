import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../src/pages/Login";
import Feed from "../src/pages/Feed";
import Upload from "../src/components/Upload";
import Profile from "../src/pages/Profile";
import Paper from "../src/components/Paper";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/feed" element={<Feed />} />
        <Route path="/login" element={<Login />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/paper" element={<Paper />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
