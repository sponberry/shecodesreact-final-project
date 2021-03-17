import React from "react";
import Weather from "./Weather";
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container bg-dark">
        <Weather defaultCity="Kingston Upon Hull"/>
      </div>
      <div className="container footer-container">
        <footer>
          Coded by Abi 👩🏻‍💻 | <a 
          href="https://github.com/sponberry/shecodesreact-final-project"
          target="_blank"
          rel="noreferrer">
            on GitHub
          </a>
        </footer>
      </div>
      
    </div>
  );
}

export default App;
