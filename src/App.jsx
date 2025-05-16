import React from "react";
import "./index.css";
import Loader from "./Components/Loader";
import Navbar from "./Components/Navbar"; // ✅ Import Navbar
import Footer from "./Components/Footer"; // ✅ Import Navbar


function App() {
  return (
    <div>
      <Navbar /> {/* ✅ Use Navbar */}
      <Loader />
      <Footer /> 
    </div>
  );
}

export default App;
