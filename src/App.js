import React from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import "./index.css";

import Navbar from "./components/Navbar";
import Brushing from "./pages/Brushing";
import Product from "./pages/Product";

function App() {
  return (
    <div className="min-h-screen relative flex flex-col flex-1">
      <div className="flex-1 overflow-y-auto bg-[#EDEADE]">
        <Navbar />
        <div className="flex flex-col flex-nowrap">
          <Router>
            <Routes>
              <Route exact path="/brushing" element={<Brushing />} />
              <Route exact path="/product" element={<Product />} />
            </Routes>
          </Router>
        </div>
      </div>
    </div>
  );
}

export default App;
