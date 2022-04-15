import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { incNumber, decNumber } from "./actions/index";

function App() {
  const myState = useSelector((state) => state.changeTheNumber);
  const dispatch = useDispatch();

  return (
    <>
      <div className="container">
        <h1>Incremwnt/ Decrement Counter</h1>
      </div>
      <div className="quantity">
        <a
          className="quantity_minus"
          title="Decrement"
          onClick={() => dispatch(decNumber())}
        >
          {" "}
          <span>-</span>
        </a>
        <input
          className="quantity_input"
          name="quantity"
          value={myState}
          type="text"
        ></input>
        <a
          className="quantity_plus"
          title="Increment"
          onClick={() => dispatch(incNumber())}
        >
          <span>+</span>
        </a>
      </div>
    </>
  );
}

export default App;
