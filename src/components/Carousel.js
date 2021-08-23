import React, { Component } from "react";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Cards from "./Cards";

const DemoCarousel = () => {
  const name = "Carousel Card";
  const price = 120;
  const user = "Ron";

  return (
    <Carousel showThumbs={false}>
      <div className="sliderpic">
        <img
          src="https://images.unsplash.com/photo-1494253109108-2e30c049369b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tJTIwZm9vZCUyMHN0b3JlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"
          alt=""
        />
      <Cards name = {name} price = {price} user = {user}/>
        {/* <p className="legend">Legend 1</p> */}
      </div>
      <div className="sliderpic">
        <img
          src="https://extendthemes.com/mesmerize/demos/demo-free-3/wp-content/uploads/2018/02/hero-juice-blue-lemon.jpg"
          alt=""
        />
        {/* <p className="legend">Legend 2</p> */}
      </div>
      <div className="sliderpic">
        <img
          src="https://extendthemes.com/mesmerize/demos/demo-free-3/wp-content/uploads/2018/02/hero-juice-blue-lemon.jpg"
          alt=""
        />
        {/* <p className="legend">Legend 3</p> */}
      </div>
    </Carousel>
  );
};

export default DemoCarousel;
