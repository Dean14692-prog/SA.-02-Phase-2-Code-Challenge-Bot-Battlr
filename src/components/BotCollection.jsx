import React, { useState, useEffect } from "react";
import BotCard from "./BotCard";
import BotArmy from "./BotArmy";
import BotSpecs from "./BotSpecs"; // Import BotSpecs

function BotCollection() {
  const [bots, setBots] = useState([]);
  const [armyBots, setArmyBots] = useState([]);
  const [filter, setFilter] = useState("");
  const [sort, setSort] = useState("");
  const [selectedBot, setSelectedBot] = useState(null); // New state for selected bot

  useEffect(() => {
    fetch("http://localhost:8001/bots")
      .then((response) => response.json())
      .then((data) => {
        console.log("Fetched bots:", data);
        setBots(data);
      })
      .catch((error) => console.error("Error fetching bots:", error));
  }, []);

  const filteredBots = filter
    ? bots.filter(
        (bot) => bot.bot_class?.toLowerCase() === filter.toLowerCase()
      )
    : bots;

  const sortedBots = sort
    ? [...filteredBots].sort((a, b) => b[sort] - a[sort])
    : filteredBots;

  function enlistBot(bot) {
    if (!armyBots.find((b) => b.id === bot.id)) {
      setArmyBots([...armyBots, bot]);

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
  }

  const releaseBot = (bot) => {
    setArmyBots(armyBots.filter((b) => b.id !== bot.id));
  };

  const handleSelectBot = (bot) => {
    setSelectedBot(bot);
  };

  const handleBackToList = () => {
    setSelectedBot(null);
  };

  return (
    <div className="container">
      <h1 className="my-4 text-center">Bot Battlr</h1>

      {/* Army section at the top */}
      <div className="mb-5">
        <BotArmy armyBots={armyBots} releaseBot={releaseBot} />
      </div>

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

      {/* Show BotSpecs if a bot is selected */}
      {selectedBot ? (
        <BotSpecs
          bot={selectedBot}
          enlistBot={enlistBot}
          handleBackToList={handleBackToList}
        />
      ) : (
        <div className="row">
          {sortedBots.map((bot) => (
            <div
              className="col-6 col-sm-4 col-md-3 col-lg-2-4 mb-4"
              key={bot.id}
            >
              <BotCard
                bot={bot}
                enlistBot={enlistBot}
                onClick={() => handleSelectBot(bot)}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default BotCollection;
