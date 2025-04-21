import React from "react";

function BotSpecs({ bot, enlistBot, handleBackToList }) {
  return (
    <div className="card">
      <img
        src={bot.avatar_url}
        alt={bot.name}
        className="card-img-top"
        style={{ height: "200px", objectFit: "cover" }}
      />
      <div className="card-body">
        <h5 className="card-title">{bot.name}</h5>
        <p className="card-text">
          Class: {bot.botClass} <br />
          Health: {bot.health} <br />
          Damage: {bot.damage} <br />
          Armor: {bot.armor}
        </p>
        <div className="d-grid gap-2">
          <button onClick={() => enlistBot(bot)} className="btn btn-primary">
            Enlist this Bot
          </button>
          <button onClick={handleBackToList} className="btn btn-secondary">
            Back to Bot List
          </button>
        </div>
      </div>
    </div>
  );
}

export default BotSpecs;
