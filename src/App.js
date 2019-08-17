import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import "./css/app.css";
import "./css/theme.css";

import TopBar from "./components/TopBar";
import AppBody from "./components/AppBody";
import Menu from "./components/Menu";
// import Footer from "./components/Footer";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { position: 0 };
  }
  componentDidMount() {
    window.addEventListener("scroll", this.listenToScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.listenToScroll);
  }

  listenToScroll = () => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height).toPrecision(2);

    this.setState({
      position: scrolled
    });
  };

  render() {
    return (
      <div className="app bg-light">
        <TopBar position={this.state.position} />
        <AppBody>
          <Menu />
        </AppBody>
        {/* <Footer /> */}
      </div>
    );
  }
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
