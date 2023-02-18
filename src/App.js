import React, { useState } from 'react';
import './App.css';


const App = () => {

  const [counter, setCounter] = useState(0);

  return (
    <div className="container my-5">
      <div className="card text-center my-5">
        <div className="card-body">
          <h1>Simple Counter App</h1>
           <button className="btn btn-danger px-3 mb-2" onClick={ () => setCounter((prevCount) => prevCount -1) } > - </button>
           <h3>{counter}</h3>
           <button className="btn btn-success px-3" onClick={ () => setCounter((addCount) => addCount +1) }> + </button>
            <br></br>
           <button className="btn btn-secondary px-5 mt-4" onClick={ () => setCounter(0)}>Reset</button>
        </div>
      </div>
    </div>
  );
}

export default App;
