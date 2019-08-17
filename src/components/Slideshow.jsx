import React, { Fragment } from "react";

class Slideshow extends React.Component {
  constructor(props) {
    super(props);

    this.state = { slideIndex: 0 };
  }

  render() {
    return !this.props.slides || this.props.slides.length === 0 ? (
      <Fragment />
    ) : (
      <div className="text-center px-4">
        <div className="slideshow-container" style={{ maxWidth: "30rem" }}>
          {/* Full-width images with number and caption text */}
          {this.props.slides.map((slide, index) => (
            <div
              key={"slide_" + this.props.projectName + "_" + index}
              style={{ display: this.state.slideIndex === index ? "block" : "none" }}
            >
              <img src={slide} alt="" />
            </div>
          ))}

          {/* Next and previous buttons */}
          <div
            className="prev"
            onClick={evt =>
              this.setState((prevState, props) => {
                return {
                  slideIndex:
                    prevState.slideIndex - 1 >= 0
                      ? prevState.slideIndex - 1
                      : this.props.slides.length - 1
                };
              })
            }
          >
            &#10094;
          </div>
          <div
            className="next"
            onClick={evt =>
              this.setState((prevState, props) => {
                return { slideIndex: (prevState.slideIndex + 1) % this.props.slides.length };
              })
            }
          >
            &#10095;
          </div>
        </div>

        {/* The dots/circles */}
        <div>
          {this.props.slides.map((slide, index) => (
            <span
              key={"slide_" + this.props.projectName + "_dot_" + index}
              className={"dot" + (index === this.state.slideIndex ? " active" : "")}
              onClick={evt => this.setState({ slideIndex: index })}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Slideshow;
