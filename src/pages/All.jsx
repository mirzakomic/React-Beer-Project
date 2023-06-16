import { useState } from "react";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Nav from "../components/Nav";

const All = () => {
  const [bierData, setbierData] = useState([]);

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
      <h1>All Beers</h1>
      <div className="flex-container-row ">
        {bierData.map((beerCollection) => (
          <div className="item-container" key={beerCollection._id}>
            <div className="img-holder">
              <img src={beerCollection.image_url} />
            </div>
            <div className="item-content-container">
              <h2>{beerCollection.name}</h2>
              <h3>{beerCollection.tagline}</h3>
              <p>Created by: {beerCollection.name}</p>
              <Link className="details-btn" to={`/all/${beerCollection._id}`}>
                Details
              </Link>
            </div>
          </div>
        ))}
      </div>
      <Nav />
    </>
  );
};

export default All;
