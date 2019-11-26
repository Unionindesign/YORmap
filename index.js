import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';

import YORWorkshopMap from "./map.js"

const App = () => {
     return (
      <div>
        <YORWorkshopMap />
      </div>
  );
}


render(<App />, document.getElementById('root'));
