import pizza from "./ragnar.PNG";
import "./App.css";
const App = () => {
  return (
    <>
      <header className="App-header">
        <img src={pizza} className="logo" alt="logo" />
        <h3>Students:</h3>
        <ul>
          <li>Rishi</li>
        </ul>
      </header>
      <div id="test-div">
        <p>hello</p>
      </div>
    </>
  );
};

export default App;
