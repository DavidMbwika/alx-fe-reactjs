/* eslint-disable no-unused-vars */
import React, { useState } from 'react'; // Import useState hook

function Counter() {
  // Initialize state for the count variable
  const [count, setCount] = useState(0); // State hook to keep track of the count value

  // Return the JSX that renders the counter, buttons, and current count
  return (
    <div>
      <p>Current Count: {count}</p>
      {/* Increment Button */}
      <button onClick={() => setCount(count + 1)}>Increment</button>
      {/* Decrement Button */}
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      {/* Reset Button */}
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

export default Counter; // Export the Counter component