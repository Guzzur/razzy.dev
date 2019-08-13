import React from "react";
import { Row, Col } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

class TopBar extends React.Component {
  render() {
    return (
      <div className="w-100 m-0">
        <Row className="w-100 m-0 justify-content-center">
          <Col className="bg-white max-width-containter top-bar-container p-0 m-0">
            <div className="h-100 d-flex px-4 align-items-center">
              <FontAwesomeIcon icon={faBars} style={{ fontSize: "1.5rem", opacity: 0.2 }} />  
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default TopBar;
