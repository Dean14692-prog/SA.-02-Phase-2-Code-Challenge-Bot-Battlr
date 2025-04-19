import React from "react";
import BotCard from "./BotCard";

function BotCollection({ bots, handleAddToArmy }) {
  return (
    <div className="container">
      <h2>Available Bots</h2>
      <div className="d-flex flex-wrap">
        {bots.map((bot) => (
          <BotCard key={bot.id} bot={bot} handleClick={handleAddToArmy} />
        ))}
      </div>
    </div>
  );
}

export default BotCollection;
