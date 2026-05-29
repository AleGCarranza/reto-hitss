import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Layout from "./components/Layout";
import Navbar from "./components/Navbar";
import Success from "./pages/Success";

function App() {
  const location = useLocation();

  return (
    <>
      {location.pathname !== "/success" && <Navbar />}
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/success" element={<Success />} />
      </Routes>
    </>
  );
}

export default function Root() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}
