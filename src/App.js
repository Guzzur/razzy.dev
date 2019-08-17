import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { ScrollPercentage } from "react-scroll-percentage";

import "./css/app.css";
import "./css/theme.css";

import { updateReadingPercentage } from "./store/actions/ui";

import TopBar from "./components/TopBar";
import AppBody from "./components/AppBody";
import Menu from "./components/Menu";
// import Footer from "./components/Footer";

class App extends React.Component {
  render() {
    return (
      <ScrollPercentage
        onChange={(percentage, entry) => {
          let interpolated = ((percentage - 0.32) / (0.68 - 0.32)).toPrecision(2);
          interpolated = interpolated < 0 ? 0 : interpolated > 1 ? 1 : interpolated;
          this.props.updateReadingPercentage(interpolated);
        }}
      >
        <div className="app bg-light">
          <TopBar />
          <AppBody>
            <Menu />
          </AppBody>
          {/* <Footer /> */}
        </div>
      </ScrollPercentage>
    );
  }
}

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = { updateReadingPercentage };

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
);
