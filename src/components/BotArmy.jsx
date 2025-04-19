import React from "react";
import BotCard from "./BotCard";

export default function BotArmy({ army, handleRelease, handleDischarge }) {
  return (
    <div className="container">
      <h2>Bot Army</h2>
      <div className="d-flex flex-wrap">
        {army.map((bot) => (
          <BotCard
            key={bot.id}
            bot={bot}
            handleDischarge={handleDischarge}
            handleClick={handleRelease}
          />
        ))}
      </div>
    </div>
  );
}
