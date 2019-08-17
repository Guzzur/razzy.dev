import React from "react";
import { connect } from "react-redux";

import Slideshow from "./Slideshow";
import Buzzwords from "./Buzzwords";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

class ProjectsList extends React.Component {
  render() {
    return (
      <div className="w-100">
        <h3 className="mb-4">My latest projects</h3>

        <div
          style={{
            padding: "1rem",
            marginBottom: "1rem",
            boxShadow: "0px 0px 6px 0px rgba(0, 0, 0, 0.2)"
          }}
        >
          <Slideshow
            projectName="gigstart"
            slides={[
              require("../assets/img/gigstart_screen_1.png"),
              require("../assets/img/gigstart_screen_2.png"),
              require("../assets/img/gigstart_screen_3.png")
            ]}
          />
          <h4>
            <a
              href="https://gigstart.io"
              target="_blank"
              rel="noopener noreferrer"
              style={{ position: "relative" }}
            >
              gigstart.io
              <FontAwesomeIcon
                icon={faExternalLinkAlt}
                style={{
                  fontSize: "1rem",
                  fontWeight: "400",
                  position: "absolute",
                  bottom: "0.35rem",
                  marginLeft: "0.5rem"
                }}
              />
            </a>
          </h4>
          <div
            className="font-weight-light font-italic"
            style={{ opacity: 0.6, marginBottom: "0.8rem" }}
          >
            True experience building platform
          </div>
          <Buzzwords projectName="gigstart" words={["react", "redux", "node", "firebase"]} />
        </div>

        <div
          style={{
            padding: "1rem",
            marginBottom: "1rem",
            boxShadow: "0px 0px 6px 0px rgba(0, 0, 0, 0.2)"
          }}
        >
          <Slideshow
            projectName="wallpex"
            slides={[
              require("../assets/img/wallpex_screen_1.png"),
              require("../assets/img/wallpex_screen_2.png"),
              require("../assets/img/wallpex_screen_3.png"),
              require("../assets/img/wallpex_screen_4.png")
            ]}
          />
          <h4>
            <a
              href="https://wallpex.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ position: "relative" }}
            >
              wallpex.com
              <FontAwesomeIcon
                icon={faExternalLinkAlt}
                style={{
                  fontSize: "1rem",
                  fontWeight: "400",
                  position: "absolute",
                  bottom: "0.35rem",
                  marginLeft: "0.5rem"
                }}
              />
            </a>
          </h4>
          <div
            className="font-weight-light font-italic"
            style={{ opacity: 0.6, marginBottom: "0.8rem" }}
          >
            First e-wallet for gamers
          </div>
          <Buzzwords projectName="gigstart" words={["react", "redux", "node", "mongo"]} />
        </div>

        <div
          style={{
            padding: "1rem",
            marginBottom: "1rem",
            boxShadow: "0px 0px 6px 0px rgba(0, 0, 0, 0.2)"
          }}
        >
          <Slideshow
            projectName="wallpex"
            slides={[
              require("../assets/img/readitto_screen_1.png"),
              require("../assets/img/readitto_screen_2.png")
            ]}
          />
          <h4>
            <a
              href="https://readitto.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ position: "relative" }}
            >
              readitto.com
              <FontAwesomeIcon
                icon={faExternalLinkAlt}
                style={{
                  fontSize: "1rem",
                  fontWeight: "400",
                  position: "absolute",
                  bottom: "0.35rem",
                  marginLeft: "0.5rem"
                }}
              />
            </a>
          </h4>
          <div
            className="font-weight-light font-italic"
            style={{ opacity: 0.6, marginBottom: "0.8rem" }}
          >
            Document to speech online converter
          </div>
          <Buzzwords projectName="gigstart" words={["react", "redux", "node", "firebase"]} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectsList);
