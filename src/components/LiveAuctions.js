import React from "react";
import Cards from "./Cards";

function LiveAuctions() {
  const name = "Live Stuff";
  const price = 120;
  const user = "Hermione";
  return (
    <div>
      Live Auctions
      <Cards name = {name} price = {price} user = {user}/>
    </div>
  );
}

export default LiveAuctions;
