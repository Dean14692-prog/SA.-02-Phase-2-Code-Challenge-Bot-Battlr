import React from "react";

function BotArmy({ armyBots, releaseBot }) {
  const dischargeBot = (botId) => {
    // Send a DELETE request to the backend to remove the bot from the DB
    fetch(`http://localhost:8001/bots/${botId}`, {
      method: "DELETE", // DELETE method to remove the bot
    })
      .then((response) => {
        if (response.ok) {
          // If the request is successful, release the bot from the army on the frontend
          releaseBot(botId);
        } else {
          // If there is an error with the request
          console.error("Error deleting bot");
        }
      })
      .catch((error) => {
        console.error("Error with DELETE request:", error);
      });
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Your Bot Army</h2>
      {armyBots.length === 0 ? (
        <p className="text-center">No bots enlisted yet!</p>
      ) : (
        <div className="row">
          {armyBots.map((bot) => (
            <div key={bot.id} className="col-md-4 mb-4">
              <div className="card">
                {/* Image Styling */}
                <img
                  src={bot.avatar_url}
                  alt={bot.name}
                  className="card-img-top"
                  style={{
                    maxHeight: "200px",
                    objectFit: "cover",
                    width: "100%",
                    borderBottom: "1px solid #ddd",
                  }}
                />
                <div className="card-body d-flex flex-column">
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

                  {/* Button Layout */}
                  <div className="d-flex justify-content-between mt-auto">
                    {/* Release Button */}
                    <button
                      className="btn btn-warning me-2"
                      onClick={() => releaseBot(bot)}
                    >
                      Release from Army
                    </button>

                    {/* Discharge Button */}
                    <button
                      onClick={() => dischargeBot(bot.id)}
                      className="btn btn-danger"
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
