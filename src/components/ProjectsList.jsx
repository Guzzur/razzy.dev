import React from "react";
import { connect } from "react-redux";

class ProjectsList extends React.Component {
  render() {
    return <div>Under construction...</div>;
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
