import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Nav from "../components/Nav";
import back from "../assets/back.png"

const Random = () => {
        const { id } = useParams();
        const [product, setProduct] = useState(null);
      
        useEffect(() => {
          fetch(`https://ih-beers-api2.herokuapp.com/beers/random`)
            .then((res) => res.json())
            .then((data) => {
              setProduct(data);
              console.log(data);
            })
            .catch((err) => {
              console.log("Error", err);
            });
        }, [id]);
      
        if (!product) {
          return <div>Loading...</div>;
        }
      
  return (
    <div>
      <h1>Product Detail</h1>
      <img className="detail-img" src={product.image_url} alt="" />
      <div className="container-left">
      <h1>{product.name}</h1>
      <h3>{product.tagline}</h3>
      <br />
      <div className="flex-space-around">
      <h4>First brewed:</h4><h4>{product.first_brewed}</h4>
      </div>
      <div className="flex-space-around">
      <h4>Attenuation level:</h4><h4>{product.attenuation_level}</h4>
      </div>
      <br />
      <p>{product.description}</p>
      <p>Contributed by: {product.name}</p>
      </div>
      <br />
      <Nav />
    </div>
  );
};

 
export default Random;


