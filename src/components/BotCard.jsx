import React from "react";

function BotCard({ bot, enlistBot, onClick }) {
  return (
    <div className="card h-100" style={{ height: "300px" }} onClick={onClick}>
      <img
        src={bot.avatar_url}
        alt={bot.name}
        className="card-img-top"
        style={{ height: "100px", objectFit: "cover" }}
      />
      <div className="card-body p-2 d-flex flex-column justify-content-between">
        <h6 className="card-title text-center mb-2">{bot.name}</h6>
        <p className="card-text text-center mb-2 small">
          Class: {bot.botClass} <br />
          Health: {bot.health} <br />
          Damage: {bot.damage} <br />
          Armor: {bot.armor}
        </p>
        <div className="d-grid">
          <button
            onClick={() => enlistBot(bot)}
            className="btn btn-sm btn-primary"
          >
            Enlist
          </button>
        </div>
      </div>
    </div>
  );
}

export default BotCard;
