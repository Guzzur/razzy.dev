import React from "react";
import { Route, Switch } from "react-router-dom";

import { Row, Col } from "react-bootstrap";

import Riddle from "./Riddle"
// import PostsList from "./PostsList";
import ProjectsList from "./ProjectsList";
import AboutMe from "./AboutMe";

class AppBody extends React.Component {
  render() {    
    return (
      <div className="w-100 m-0">
        <Row className="w-100 m-0 justify-content-center">
          <Col className="bg-white max-width-containter p-0 m-0">
            <div className="d-flex p-4 align-items-start fill-height">
              {/* Menu comes here */}
              {this.props.children}
              <Switch>
                {/* <Route path="/posts" component={PostsList} /> */}
                <Route path="/riddles" component={Riddle} />
                <Route path="/projects" component={ProjectsList} />
                <Route path="/about" component={AboutMe} />
                <Route component={AboutMe} />
              </Switch>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default AppBody;
