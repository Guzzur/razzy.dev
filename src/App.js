import React from 'react';
import './App.css';

import Lottie from 'lottie-react-web';
import animation from './animations/lego.json';

function App() {
  return (
    <div className="screen-block">
      <div className="construction">
        <Lottie
          options={{
            animationData: animation
          }}
        />
      </div>
    </div>
  );
}

export default App;
