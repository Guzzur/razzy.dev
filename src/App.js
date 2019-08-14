import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import "./css/app.css";
import "./css/theme.css";

import TopBar from "./components/TopBar";
import AppBody from "./components/AppBody";
import Menu from "./components/Menu";
// import Footer from "./components/Footer";

function App() {
  return (
    <div className="app bg-light">
      <TopBar />
      <AppBody>
        <Menu />
      </AppBody>
      {/* <Footer /> */}
    </div>
  );
}

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = {};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
);
