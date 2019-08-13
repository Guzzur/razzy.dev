import React from "react";
import { Row, Col } from "react-bootstrap";

class Footer extends React.Component {
  render() {
    return (
      <div className="w-100 m-0">
        <Row className="w-100 m-0 justify-content-center">
          <Col className="bg-white max-width-containter footer-container p-0 m-0">
            <div className="h-100 d-flex px-4 align-items-center">
              <span className="rotate-180 mr-2">&copy;</span> Copyleft
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Footer;
