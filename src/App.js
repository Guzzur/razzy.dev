import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";

import "./App.css";
import { Row, Card, Container } from "react-bootstrap";

import TopBar from "./components/TopBar";
import About from "./components/About";
import Projects from "./components/Projects";

function App() {
  return (
    <Router>
      <Row className="w-100 p-0 m-0 justify-content-center">
        <TopBar />
        <Row className="w-100 p-0 m-0" style={{ maxWidth: "1200px" }}>
          <Card className="w-100 border-0">
            <Card.Body className="px-0 py-5 m-0">
              <Container>
                <Container>
                  <Container>
                    <Switch>
                      <Route path="/about" component={About} />
                      <Route path="/projects" component={Projects} />
                    </Switch>
                  </Container>
                </Container>
              </Container>
            </Card.Body>
          </Card>
        </Row>
      </Row>
    </Router>
  );
}

export default App;
