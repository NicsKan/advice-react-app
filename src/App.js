import React, { useState, useEffect } from "react";
import styles from "./App.css";
import axios from "axios";

function App() {
  const [advice, setAdvice] = useState("");

  useEffect(() => {
    fetchAdvice();
  }, []);

  const fetchAdvice = async () => {
    try {
      const { data } = await axios.get("https://api.adviceslip.com/advice");
      setAdvice(data.slip.advice);
    } catch (error) {
      console.log(error);
    }
  };

  const handleClick = () => {
    fetchAdvice();
  };

  return (
    <div className="app">
      <div className="card">
        <h1 className="heading">{advice}</h1>
        <button className="button" onClick={handleClick}>
          <span>GIVE ME ADVICE</span>
        </button>
      </div>
    </div>
  );
}

export default App;
