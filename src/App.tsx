import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import "./styles/home.css"; 

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

