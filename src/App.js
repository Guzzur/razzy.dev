import React from "react";
import "./css/app.css";
import "./css/theme.css";

import TopBar from "./components/TopBar";
import AppBody from "./components/AppBody";
// import Footer from "./components/Footer";

function App() {
  return (
    <div className="app bg-light">
      <TopBar />
      <AppBody />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
