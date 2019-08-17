import React from "react";
import { connect } from "react-redux";
import { toggleMenu } from "../store/actions/ui";

import { Row, Col } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

class TopBar extends React.Component {
  render() {
    const { showMenu } = this.props;

    return (
      <div className="w-100 m-0">
        <div className="reading-bar-container">
          <div
            className="reading-bar"
            style={{ transform: "scaleX(" + this.props.position + ")" }}
          />
        </div>
        <Row className="w-100 m-0 justify-content-center">
          <Col className="bg-white max-width-containter top-bar-container p-0 m-0">
            <div className="h-100 d-flex px-4 align-items-center">
              <div
                className="menu-icon w-100"
                style={{ position: "relative" }}
                onClick={this.props.toggleMenu}
              >
                <FontAwesomeIcon
                  className="link"
                  icon={showMenu ? faTimes : faBars}
                  style={{ marginRight: showMenu ? "1.5rem" : "1.2rem" }}
                />
              </div>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = { toggleMenu };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TopBar);
