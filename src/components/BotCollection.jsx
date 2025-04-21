import React, { useState, useEffect } from "react";
import BotCard from "./BotCard";
import BotArmy from "./BotArmy";

function BotCollection() {
  const [bots, setBots] = useState([]); // All available bots
  const [armyBots, setArmyBots] = useState([]); // Enlisted bots
  const [filter, setFilter] = useState(""); // Filter bots by class
  const [sort, setSort] = useState(""); // Sort bots by health, damage, or armor

  // Fetch all bots from the backend
  useEffect(() => {
    fetch("http://localhost:8001/bots")
      .then((response) => response.json())
      .then((data) => setBots(data))
      .catch((error) => console.error("Error fetching bots:", error));
  }, []);

  // Filter the bots based on selected class
  const filteredBots = filter
    ? bots.filter((bot) => bot.botClass === filter)
    : bots;

  // Sort the bots based on selected property
  const sortedBots = sort
    ? [...filteredBots].sort((a, b) => b[sort] - a[sort])
    : filteredBots;

  // Enlist a bot into the army and update the database
  function enlistBot(bot){
    // Check if already enlisted
    if (!armyBots.find((b) => b.id === bot.id)) {
      // Add to UI
      setArmyBots([...armyBots, bot]);

      // Add to backend army list
      fetch("http://localhost:8001/army", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bot),
      })
        .then((res) => res.json())
        .then((data) => console.log("Enlisted:", data))
        .catch((err) => console.error("Error enlisting:", err));
    }
  };

  // Remove a bot from the UI army list
  const releaseBot = (bot) => {
    setArmyBots(armyBots.filter((b) => b.id !== bot.id));
  };

  return (
    <div className="container">
      <h1 className="my-4 text-center">Bot Battlr</h1>

      {/* Filter bots by class */}
      <div className="mb-4">
        <label htmlFor="filter" className="form-label">
          Filter by Class:
        </label>
        <select
          id="filter"
          className="form-select"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
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

      {/* Sort bots */}
      <div className="mb-4">
        <label htmlFor="sort" className="form-label">
          Sort by:
        </label>
        <select
          id="sort"
          className="form-select"
          value={sort}
          onChange={(e) => setSort(e.target.value)}
        >
          <option value="">None</option>
          <option value="health">Health</option>
          <option value="damage">Damage</option>
          <option value="armor">Armor</option>
        </select>
      </div>

      {/* Display list of bots */}
      <div className="row">
        {sortedBots.map((bot) => (
          <div className="col-md-4 mb-4" key={bot.id}>
            <BotCard bot={bot} enlistBot={enlistBot} />
          </div>
        ))}
      </div>

      {/* Army section */}
      <div className="mt-5">
        <BotArmy armyBots={armyBots} releaseBot={releaseBot} />
      </div>
    </div>
  );
}

export default BotCollection;
