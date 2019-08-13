import React from "react";
import { Row, Col } from "react-bootstrap";

import AboutMe from "./AboutMe";

class AppBody extends React.Component {
  render() {
    return (
      <div className="w-100 m-0">
        <Row className="w-100 m-0 justify-content-center">
          <Col className="bg-white max-width-containter p-0 m-0">
            <div className="d-flex p-4 align-items-start fill-height">
              <AboutMe />
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default AppBody;
