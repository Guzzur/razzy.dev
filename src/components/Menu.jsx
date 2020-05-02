import React from "react";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import { closeMenu } from "../store/actions/ui";

// import { Row, Col } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faDice, faSuitcase, faAddressCard } from "@fortawesome/free-solid-svg-icons";

class Menu extends React.Component {
  render() {
    const show = this.props.showMenu;
    return (
      <div
        className="menu-base"
        onClick={this.props.closeMenu}
        style={{ display: show ? "block" : "none" }}
      >
        <Link to={"/posts"}>
          <div className="menu-item">
            <FontAwesomeIcon icon={faEdit} className="mr-4" />
            Posts
          </div>
        </Link>
        <Link to={"/projects"}>
          <div className="menu-item">
            <FontAwesomeIcon icon={faSuitcase} className="mr-4" />
            Projects
          </div>
        </Link>
        <Link to={"/about"}>
          <div className="menu-item">
            <FontAwesomeIcon icon={faAddressCard} className="mr-4" />
            About
          </div>
        </Link>
        {/* <Link to={"/riddles"}>
          <div className="menu-item">
            <FontAwesomeIcon icon={faDice} className="mr-4" />
            Riddles
          </div>
        </Link> */}
        <div className="menu-curtain" />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = { closeMenu };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Menu);
