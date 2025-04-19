import React, { useState, useEffect } from "react";
import BotCard from "./BotCard"; // For displaying individual bot cards
import BotArmy from "./BotArmy"; // For displaying the army

function BotCollection() {
  const [bots, setBots] = useState([]); // To store the fetched bots
  const [armyBots, setArmyBots] = useState([]); // To store the enlisted bots
  const [filter, setFilter] = useState(""); // To store filter based on bot class
  const [sort, setSort] = useState(""); // To store the sort option (e.g., health, damage, armor)

  // Fetch the bots data from the backend (JSON server)
  useEffect(() => {
    fetch("http://localhost:8001/bots")
      .then((response) => response.json())
      .then((data) => setBots(data))
      .catch((error) => console.error("Error fetching bots:", error));
  }, []);

  // Filter bots based on the selected class
  const filteredBots = filter
    ? bots.filter((bot) => bot.botClass === filter)
    : bots;

  // Sort bots based on the selected property (health, damage, armor)
  const sortedBots = sort
    ? [...filteredBots].sort((a, b) => b[sort] - a[sort])
    : filteredBots;

  // Function to enlist a bot into the army and update the database
  const enlistBot = (bot) => {
    // Check if the bot is already enlisted
    const existingBot = armyBots.find((armyBot) => armyBot.id === bot.id);

    // If the bot is not already enlisted
    if (!existingBot) {
      // Add the bot to the army in the frontend state
      setArmyBots([...armyBots, bot]);

      // Send a POST request to the backend to update the database
      fetch("http://localhost:8001/army", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bot),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Bot added to the army:", data);
        })
        .catch((error) => {
          console.error("Error adding bot to the database:", error);
        });
    }
  };

  // Function to release a bot from the army
  const releaseBot = (bot) => {
    setArmyBots(armyBots.filter((armyBot) => armyBot.id !== bot.id));
  };

  return (
    <div className="container">
      <h1 className="my-4 text-center">Bot Battlr</h1>

      {/* Filter Bots */}
      <div className="mb-4">
        <label htmlFor="filter" className="form-label">
          Filter by Class:
        </label>
        <select
          id="filter"
          onChange={(e) => setFilter(e.target.value)}
          value={filter}
          className="form-select"
        >
          <option value="">All Classes</option>
          <option value="Support">Support</option>
          <option value="Medic">Medic</option>
          <option value="Assault">Assault</option>
          <option value="Defender">Defender</option>
          <option value="Captain">Captain</option>
          <option value="Witch">Witch</option>
        </select>
      </div>

      {/* Sort Bots */}
      <div className="mb-4">
        <label htmlFor="sort" className="form-label">
          Sort by:
        </label>
        <select
          id="sort"
          onChange={(e) => setSort(e.target.value)}
          value={sort}
          className="form-select"
        >
          <option value="">None</option>
          <option value="health">Health</option>
          <option value="damage">Damage</option>
          <option value="armor">Armor</option>
        </select>
      </div>

      {/* Display Bot Collection */}
      <div className="bot-collection">
        <h2 className="mb-4">Available Bots</h2>
        <div className="row">
          {sortedBots.map((bot) => (
            <div className="col-md-4 mb-4" key={bot.id}>
              <BotCard bot={bot} enlistBot={enlistBot} />
            </div>
          ))}
        </div>
      </div>

      {/* Display Enlisted Bots in BotArmy */}
      <div className="mt-5">
        <BotArmy armyBots={armyBots} releaseBot={releaseBot} />
      </div>
    </div>
  );
}

export default BotCollection;
