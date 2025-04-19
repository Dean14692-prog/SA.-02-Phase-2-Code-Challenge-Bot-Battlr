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
        <h5 className="card-title">{bot.name}</h5>
        <p className="card-text">
          <strong>Class:</strong> {bot.bot_class}
        </p>
        <p className="card-text">
          <strong>Health:</strong> {bot.health}
        </p>
        <p className="card-text">
          <strong>Damage:</strong> {bot.damage}
        </p>
        <p className="card-text">
          <strong>Armor:</strong> {bot.armor}
        </p>

        {/* Enlist Button */}
        <button className="btn btn-primary" onClick={() => enlistBot(bot)}>
          Enlist Bot
        </button>
      </div>
    </div>
  );
}

export default BotCard;
