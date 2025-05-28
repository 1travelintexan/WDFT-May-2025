export const Counter = ({ count, handleAddToCount, setCount }) => {
  return (
    <>
      <h3>Count: {count}</h3>
      <button onClick={handleAddToCount}>Add to Count</button>
      <button onClick={() => setCount(count - 1)}>Subtract from Count</button>
    </>
  );
};
