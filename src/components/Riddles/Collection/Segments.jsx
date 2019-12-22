// ------------------------------
// Riddle #1
// ------------------------------
import React from 'react'


import segmentsBody from '../../../assets/img/helpers/seven-segment-base.png'
import segment1 from '../../../assets/img/helpers/seven-segment-1.png'
import segment2 from '../../../assets/img/helpers/seven-segment-2.png'
import segment3 from '../../../assets/img/helpers/seven-segment-3.png'
import segment4 from '../../../assets/img/helpers/seven-segment-4.png'
import segment5 from '../../../assets/img/helpers/seven-segment-5.png'
import segment6 from '../../../assets/img/helpers/seven-segment-6.png'
import segment7 from '../../../assets/img/helpers/seven-segment-7.png'

const numbers = [
  /* 0 */ [1,2,3,4,5,6],
  /* 1 */ [2,3],
  /* 2 */ [1,2,4,5,7],
  /* 3 */ [1,2,3,4,5],
  /* 4 */ [2,3,6,7],
  /* 5 */ [1,3,4,6,7],
  /* 6 */ [1,3,4,5,6,7],
  /* 7 */ [1,2,3],
  /* 8 */ [1,2,3,4,5,6,7],
  /* 9 */ [1,2,3,4,6,7]
]

const segments = [
  segment1,
  segment2,
  segment3,
  segment4,
  segment5,
  segment6,
  segment7,
]

export default class Segments extends React.Component {
  constructor(props) {
    super(props);
    let { code } = this.props;
    code = code.toString();

    this.state = {
      color: "red",
      code: {
        0: code.charAt(0),
        1: code.charAt(1),
        2: code.charAt(2),
        3: code.charAt(3),
        raw: code
      },
      show: [
        false,
        false,
        false,
        false
      ]
    }
  }

  renderItem(index, parity) {
    let digit = this.state.code[index];
      return numbers[digit].map((val, i) => {
        // if()
      })
  }

  render() {
    console.log(this.state.code.raw)
    console.log(this.state.code[0])
    console.log(this.state.code[1])
    console.log(this.state.code[2])
    console.log(this.state.code[3])

    return (
      <div className="row my-4">
        <div className="col-2" />
        <div className="col-2 position-relative">
          {}
          <img src={segment1} alt="" className="p-2 position-absolute"
            style={{ top: 0, left: "calc((100% - 4rem) / 2)", width: "4rem" }} />
          <img src={segment2} alt="" className="p-2 position-absolute"
            style={{ top: 0, left: "calc((100% - 4rem) / 2)", width: "4rem" }} />
        </div>
        <div className="col-2 position-relative">
          <img src={segmentsBody} alt="" className="p-2" style={{ width: "4rem", backgroundColor: "#f0f0f0", borderRadius: "1rem" }} />
        </div>
        <div className="col-2 position-relative">
          <img src={segmentsBody} alt="" className="p-2" style={{ width: "4rem", backgroundColor: "#f0f0f0", borderRadius: "1rem" }} />
        </div>
        <div className="col-2 position-relative">
          <img src={segmentsBody} alt="" className="p-2" style={{ width: "4rem", backgroundColor: "#f0f0f0", borderRadius: "1rem" }} />
        </div>
        <div className="col-2 position-relative" />
        <div className="col-12">
          <img src={segmentsBody} alt="" className="p-2" style={{ width: "4rem", backgroundColor: "#f0f0f0", borderRadius: "1rem" }} />
          <img src={segmentsBody} alt="" className="p-2" style={{ width: "4rem", backgroundColor: "#f0f0f0", borderRadius: "1rem" }} />
          <img src={segmentsBody} alt="" className="p-2" style={{ width: "4rem", backgroundColor: "#f0f0f0", borderRadius: "1rem" }} />
          <img src={segmentsBody} alt="" className="p-2" style={{ width: "4rem", backgroundColor: "#f0f0f0", borderRadius: "1rem" }} />
        </div>
      </div>
    )
  }
}