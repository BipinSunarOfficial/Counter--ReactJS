import React, {useState} from "react"

function App() {

  const [value, setValue] = useState(0)

  return (
    <>
      <div>
        <h1>Simple React Counter</h1>

      <h2>{value}</h2>


     
        <button className="btn minus" onClick={() => setValue(value - 1)}> - </button>
        <button className="btn reset" onClick={() => setValue(0)}>Reset</button>
        <button className="btn plus" onClick={() => setValue(value + 1)}> + </button>
      </div>
    </>
  );
}

export default App;
