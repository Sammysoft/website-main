import React from "react";
import { Routes, Route } from "react-router-dom";
import HomeScreen from "./Pages/Homescreen";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" exact element={<HomeScreen />} />
        <Route path="/home" exact element={<HomeScreen />} />
      </Routes>
    </>
  );
}

export default App;
