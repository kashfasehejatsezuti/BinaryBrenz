import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./landing/Landing";
import Service from "./landing/Service";
import Payment from "./landing/Payment";
import Navbar from "./landing/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/navbar" element={<Navbar />} />
        <Route path="/service" element={<Service />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
