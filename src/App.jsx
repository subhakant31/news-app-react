import "./App.css";
import React, { useState } from "react";

import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
function App() {
  const [selectedNewsCategory, setSelectedNewsCategory] = useState("trending");

  return (
    <React.Fragment>
      <Header setSelectedNewsCategory={setSelectedNewsCategory}></Header>

      <Routes>
        <Route
          path="/"
          element={<HomePage selectedNewsCategory={selectedNewsCategory} />}
        />
      </Routes>

      <Navigation></Navigation>
    </React.Fragment>
  );
}

export default App;
