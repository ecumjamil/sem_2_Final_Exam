import React, { useReducer, useState } from "react";

import "./styles.css";

const TYPES = {
  ADD_ONE: "ADD_ONE",
  SUBTRACT_ONE: "SUBTRACT_ONE",
  RESET: "RESET",
  ADD_CUSTOM: "ADD_CUSTOM"
};

function Apps() {
  const [num, updateNum] = useState(0);

  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case TYPES.ADD_ONE:
        return state + 1;
      case TYPES.SUBTRACT_ONE:
        return state - 1;
      case TYPES.ADD_CUSTOM:
        return state + action.value;
      case TYPES.RESET:
        return 0;
      default:
        return state;
    }
  }, 0);

  const addOne = () => dispatch({ type: TYPES.ADD_ONE });
  const subtractOne = () => dispatch({ type: TYPES.SUBTRACT_ONE });
  const reset = () => dispatch({ type: TYPES.RESET });
  const addCustom = () => dispatch({ type: TYPES.ADD_CUSTOM, value: num });

  const handleInputChange = (e) => updateNum(+e.target.value);

  return (
    <div className="container">
      <p>
        Input any number in the input box then click <span>Input number</span>{" "}
        and proceed to <span>Add, Subtract or Reset</span> the value
      </p>
      <div className="result">{state}</div>

      <div className="button--group">
        <button onClick={addOne}> Add 1 </button>
        <button onClick={subtractOne}> Subtract 1 </button>
      </div>

      <div className="input--group">
        <input type="text" value={num} onChange={handleInputChange} />
      </div>

      <div className="button--group">
        <button onClick={addCustom}>Input number</button>
        <button onClick={reset}> Reset </button>
      </div>
    </div>
  );
}

export default Apps;
