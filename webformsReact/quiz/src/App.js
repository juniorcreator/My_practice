import React from 'react';

//hoc
import Leyout from './hoc/Layout/Layout'
//hoc

//components
import Quiz from './containers/Quiz/Quiz'
//components

function App() {
  return (
      <Leyout>
        <Quiz />
      </Leyout>
  );
}

export default App;
