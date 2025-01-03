import React from 'react';
import { useState } from 'react';

const styles = {
  container: {
    textAlign: 'center',
    margin: '50px auto',
    fontFamily: 'Arial, sans-serif',
  },
  count: {
    fontSize: '48px',
    margin: '20px 0',
  },
  button: {
    fontSize: '18px',
    padding: '10px 20px',
    margin: '5px',
    cursor: 'pointer',
    backgroundColor: '#007BFF',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
  },
};

const App = () => {
  const [count, setCount] = useState(0);
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div style={styles.container}>
      <h1>Counter App</h1>
      <h2 style={styles.count}>{count}</h2>
      <div>
        <button style={styles.button} onClick={increment}>
          Increment
        </button>
        <button style={styles.button} onClick={decrement}>
          Decrement
        </button>
        <button style={styles.button} onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default App;
