import React from "react";
import { useEffect, useState } from "react";

import "./App.css";
import { Link } from "react-router-dom";

import allbeers from "./assets/allbeers.png";
import randombeer from "./assets/randombeer.png";

function App() {
  const [bierData, setbierData] = useState();

  useEffect(() => {
    fetch(`https://ih-beers-api2.herokuapp.com/beers`)
      .then((res) => res.json())
      .then((bierData) => {
        setbierData(bierData);
        console.log(bierData);
      })
      .catch((err) => {
        console.log("Fehler", err);
      });
  }, []);

  return (
    <>
      <Link to="/all">
        <div className="allbeers-img">
          <div className="centered">All Beers</div>
          <img src={allbeers} alt="" />
        </div>
      </Link>
      <Link to="/random">
        <div className="allbeers-img">
        <div className="centered">Random Beer</div>
          <img src={randombeer} alt="" />
        </div>
      </Link>
    </>
  );
}

export default App;
