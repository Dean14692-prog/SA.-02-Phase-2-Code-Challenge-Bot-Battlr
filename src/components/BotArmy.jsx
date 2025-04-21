import React from "react";

function BotArmy({ armyBots, releaseBot }) {
  // Discharge the bot from the backend and remove from frontend
  const dischargeBot = (bot) => {
    fetch(`http://localhost:8001/army/${bot.id}`, {
      method: "DELETE",
    })
      .then(() => {
        releaseBot(bot);
      })
      .catch((error) => console.error("Error discharging:", error));
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
                      onClick={() => dischargeBot(bot)}
                      className="btn btn-warning"
                    >
                      Discharge
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
