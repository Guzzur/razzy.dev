import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import './App.css';
import { Row } from 'react-bootstrap';

import TopBar from './components/TopBar'

// import Lottie from 'lottie-react-web';
// import animation from './animations/lego.json';

function App() {
  return (
    // <div className="screen-block">
    //   <div className="construction">
    //     <Lottie
    //       options={{
    //         animationData: animation
    //       }}
    //     />
    //   </div>
    // </div>
    <Router>
      <Row className='w-100 p-0 m-0 justify-content-center'>
        <TopBar />
      </Row>
    </Router>
  );
}

export default App;
