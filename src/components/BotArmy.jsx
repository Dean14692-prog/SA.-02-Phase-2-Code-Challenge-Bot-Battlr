import React from "react";

function BotArmy({ armyBots, releaseBot }) {
  const dischargeBot = (botId) => {
    fetch(`http://localhost:8001/army/${botId}`, {
      method: "DELETE",
    }).then(() => {
      releaseBot(botId);
    });
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Your Bot Army</h2>
      {armyBots.length === 0 ? (
        <p className="text-center text-muted">No bots enlisted yet!</p>
      ) : (
        <div className="row justify-content-center">
          {armyBots.map((bot) => (
            <div key={bot.id} className="col-md-4 mb-4">
              <div className="card" style={{ width: "18rem" }}>
                <img
                  src={bot.avatar_url}
                  alt={bot.name}
                  className="card-img-top"
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <h5 className="card-title text-center">{bot.name}</h5>
                  <div className="d-grid gap-2">
                    <button
                      onClick={() => releaseBot(bot)}
                      className="btn btn-danger mb-2"
                    >
                      Release from Army
                    </button>
                    <button
                      onClick={() => dischargeBot(bot.id)}
                      className="btn btn-warning"
                    >
                      x Discharge
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default BotArmy;
