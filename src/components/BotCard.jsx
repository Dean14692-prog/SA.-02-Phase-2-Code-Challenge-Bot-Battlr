import React from "react";

function BotCard({ bot, enlistBot }) {
  return (
    <div className="card">
      <img
        src={bot.avatar_url}
        alt={bot.name}
        className="card-img-top"
        style={{ height: "200px", objectFit: "cover" }}
      />
      <div className="card-body">
        <h5 className="card-title text-center">{bot.name}</h5>
        <p className="card-text text-center">
          Class: {bot.botClass} <br />
          Health: {bot.health} <br />
          Damage: {bot.damage} <br />
          Armor: {bot.armor}
        </p>
        <div className="d-grid">
          <button onClick={() => enlistBot(bot)} className="btn btn-primary">
            Enlist Bot
          </button>
        </div>
      </div>
    </div>
  );
}

export default BotCard;
