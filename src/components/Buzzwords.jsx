import React from "react";

class Buzzwords extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    const styles = {
      // react: { bg: "#333333", fg: "#06D8FF" },
      // redux: { bg: "#764ABC", fg: "#ffffff" },
      // node: { bg: "#87C66D", fg: "#000000" },
      // firebase: { bg: "#FF6F00", fg: "#ffffff" },
      // mongo: { bg: "#17AA52", fg: "#ffffff" },
      default: { bg: "#f0f0f0", fg: "#000000" }
    };

    return (
      <div>
        {this.props.words.map((word, index) => (
          <div
            className="d-inline buzzword"
            key={"word" + this.props.projectName + "_" + index}
            style={{
              // opacity: "0.7",
              backgroundColor: styles[word] ? styles[word].bg : styles.default.bg,
              color: styles[word] ? styles[word].fg : styles.default.fg
            }}
          >
            {word}
          </div>
        ))}
      </div>
    );
  }
}

export default Buzzwords;
