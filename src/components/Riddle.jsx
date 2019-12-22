import React from 'react'
import { connect } from "react-redux";

import RiddleCodeChecker from './Riddles/RiddleCodeChecker'
import RiddleLevelCounter from './Riddles/RiddleLevelCounter'

// Riddle #1
import Segments from './Riddles/Collection/Segments'
// Riddle #2
// import Segments from './Riddles/Collection/Segments'

class RiddleList extends React.Component {
  render() {
    // const { riddles } = this.props;
    const riddles = [
      {
        // Riddle #1
        title: "Segments",
        code: Math.floor(1000 + Math.random() * 9000),
        Cmpnt: Segments
      }
    ]

    const m = 0;
    const n = riddles.length;
    const riddle = riddles[m];
    const { Cmpnt } = riddle;


    return <div className="w-100">
      <h3>{riddle.title}</h3>
      <div className="text-center">
        <hr className="my-4" style={{opacity: 0.4}} />
        <Cmpnt code={riddle.code} />
        <hr className="my-4" style={{opacity: 0.4}} />
        <RiddleCodeChecker code={riddle.code} />
        <hr className="my-4" style={{opacity: 0.4}} />
        <RiddleLevelCounter m={m} n={n} />
      </div>
    </div>
  }
}

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RiddleList);
