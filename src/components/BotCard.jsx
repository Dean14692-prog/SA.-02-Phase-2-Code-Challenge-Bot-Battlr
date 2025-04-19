import React from "react";

function BotCard({ bot, enlistBot }) {
  return (
    <div className="card">
      <img src={bot.avatar_url} alt={bot.name} className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">{bot.name}</h5>
        <p className="card-text">
          Class: {bot.botClass} <br />
          Health: {bot.health} <br />
          Damage: {bot.damage} <br />
          Armor: {bot.armor}
        </p>
        <button className="btn btn-primary" onClick={() => enlistBot(bot)}>
          Enlist Bot
        </button>
      </div>
    </div>
  );
}

export default BotCard;
