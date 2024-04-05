import React from 'react';
import Graph from './components/graph';
import data from './data/data';

function App() {
  return (
    <div className="App">
      <Graph data={data} />
    </div>
  );
}

export default App;