import React from "react";

const Cards = (props) => {

  return (
    <div className= "card" key="">
      <header className="card-header">
        <p class="card-header-title">Title</p>
      </header>
      <figure className= "figure">
        <img className = "cardpic"
          src="https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png"
          alt=""
        />
      </figure>
      <div className="card-content">
        <div className="content">
          Name of Item: {props.name}
          <br />
          Price of Item: {props.price}
          <br />
          User: {props.user}
        </div>
      </div>
    </div>
  );
};

export default Cards;
