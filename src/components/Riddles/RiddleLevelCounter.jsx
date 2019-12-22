import React from 'react'

class RiddleLevelCounter extends React.Component {
  render() {
    const {m, n} = this.props;
    return <div>{m+1} / {n}</div>
  }
}

export default RiddleLevelCounter;