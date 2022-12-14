import './Timer.css';
import React, { useReducer } from 'react';

const Class = (state, action) => {
  switch (action.type) {
    case 'Increment':
      return { count: state.count + 1 };

    case 'Decrement':
        if( state.count > 0 ){
      return { count: state.count - 1 };
        }
  
   
    case 'Reset':
      return { count: 0 };
    default:
      return 'none';
  }
};
const Timer = () => {
  const [state, dispatch] = useReducer(Class, { count: 0 });
  return (
    <>
      <p> Count: {state.count}</p>
      <button className="a1" onClick={() => dispatch({ type: 'Increment' })}>
        Increment
      </button>
      <button className="a2" onClick={() => dispatch({ type: 'Decrement' })}>
        Decremrnt
      </button>
      <button className="a3" onClick={() => dispatch({ type: 'Reset' })}>
        Reset
      </button>
    </>
  );
};

export default Timer;