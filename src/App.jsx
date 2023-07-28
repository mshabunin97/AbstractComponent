/* eslint-disable no-unused-vars */
import React from 'react';
import AbstractComp from './AbstractComp';




const data = [
  { id: '1', label: 'Node 1', x: 0, y: 0 },
  { id: '2', label: 'Node 2', x: 200, y: 0 },
  { id: '3', label: 'Node 3', x: 400, y: 0 },
  { id: '4', label: 'Node 4', x: 600, y: 0 },
  { id: '5', label: 'Node 5', x: 0, y: 100 },
  { id: '6', label: 'Node 6', x: 200, y: 100 },
  { id: '7', label: 'Node 7', x: 400, y: 100 },
  { id: '8', label: 'Node 8', x: 600, y: 100 },
  { id: '9', label: 'Node X', x: 200, y: 200 },
  { id: '10', label: 'Node X', x: 400, y: 200 },
  { id: '11', label: 'Node X', x: 400, y: 300 },

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