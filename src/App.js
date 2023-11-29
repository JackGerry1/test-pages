import React from "react";
import { Routes, Route } from "react-router-dom";

import TOS from "./pages/TOS";
import Settings from "./pages/Settings";
import Home from "./pages/Home";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="settings" element={<Settings />} />
        <Route path="tos" element={<TOS />} />
      </Routes>
    </div>
  );
}
