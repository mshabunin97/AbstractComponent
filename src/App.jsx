/* eslint-disable no-unused-vars */
import React from 'react';
import AbstractComp from './AbstractComp';




const data = [
  { id: '1', label: 'Node 1', x: 0, y: 0, style: { width: 125, height: 50 } },
  { id: '2', label: 'Node 2', x: 125 + 100, y: 0, style: { width: 130, height: 60 } },
  { id: '3', label: 'Node 3', x: 355 + 100, y: 0, style: { width: 120, height: 60 } },  
  { id: '4', label: 'Node 4', x: 575 + 100, y: 0, style: { width: 125, height: 80 }},
  { id: '5', label: 'Node 5', x: 0, y: 50 + 50, style: { width: 130, height: 60 }},
  { id: '6', label: 'Node 6', x: (130 + 100) - 5, y: 60 + 50, style: { width: 140, height: 70 } },
  { id: '7', label: 'Node 7', x: (370 + 100) - 15, y: 60 + 50, style: { width: 135, height: 60 } },
  { id: '8', label: 'Node 8', x: (605 + 100) - 30, y: 80 + 50, style: { width: 130, height: 70 } },
  { id: '9', label: 'Node 9', x: 225, y: 60 + 50 + 70 + 50, style: { width: 120, height: 50 } },
  { id: '10', label: 'Node 10', x: 455, y: 60 + 50 + 60 + 50, style: { width: 130, height: 55 } },
  { id: '11', label: 'Node 11', x: 455, y: 60 + 50 + 60 + 50 + 55 + 50, style: { width: 110, height: 60 } },

  // ...
];

const App = () => {
  return (
    <div>
        <AbstractComp data={data}/>
    </div>
  );
};

export default App;