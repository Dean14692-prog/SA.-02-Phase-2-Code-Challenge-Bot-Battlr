# Bot Battlr - React Web Application
## Project Overview

**Bot Battlr** is a React-based web application where users can view, enlist, and discharge bots. The application uses React to build an interactive user interface and connects to a backend (powered by JSON Server) to manage bot data. It allows users to filter and sort the available bots based on different criteria and manage a collection of bots in their army.

### Features:
- **View Bots**: Display a list of available bots in card format.
- **Filter Bots**: Filter bots based on their class (Support, Medic, Assault, Defender, Captain, Witch).
- **Sort Bots**: Sort bots by health, damage, or armor.
- **Enlist Bots**: Add bots to the user's army.
- **Release Bots**: Remove bots from the army.
- **Discharge Bots**: Permanently remove bots from the backend and from the user's army.

## Technologies Used

- **Frontend**: React (JavaScript library for building user interfaces)
- **Styling**: Bootstrap (for responsive design and basic styling)
- **Backend**: JSON Server (to provide a fake REST API for bot data)
- **Development Tools**:
  - **Node.js**: JavaScript runtime environment
  - **npm**: Package manager for managing dependencies
  - **json-server**: Lightweight backend for quickly setting up a RESTful API

## Setup Instructions

### Prerequisites

Before running the project, ensure the following are installed on your system:

- **Node.js**: [Download Node.js](https://nodejs.org/), which also includes npm (Node Package Manager).

###  Install Dependencies
```bash 
npm install
```
### Create db.json server
Then create a db.json file in the project root and add
```bash 
{
  "bots": [
    {
      "id": 1,
      "name": "AlphaBot",
      "bot_class": "Support",
      "health": 120,
      "damage": 40,
      "armor": 30,
      "avatar_url": "https://robohash.org/alphabot.png"
    },
    {
      "id": 2,
      "name": "BetaBot",
      "bot_class": "Assault",
      "health": 150,
      "damage": 70,
      "armor": 40,
      "avatar_url": "https://robohash.org/betabot.png"
    }
  ]
}
```
### Run json server
```bash
npx json-server --watch db.json --port 8001
```
###  Run React App
```bash
npm start 
```
React app will launch at http://localhost:3000.

## How to Use
- Use the dropdown to **filter** bots by class (e.g., Support, Medic, Assault).
- Use the sort dropdown to **order bots** by Health, Damage, or Armor.
- Click **Enlist** to add a bot to your army.
- In the army section:
  - Click **Release** to remove the bot from the army (does not delete from database).
  - Click **Discharge** to remove the bot from the army **and** permanently delete it from the database.

## Contributing
- Fork the repository to your GitHub.
- Clone your fork:
```bash
git clone git@github.com:your-username/SA.-02-Phase-2-Code-Challenge-Bot-Battlr.git
```
- Create a new branch:
```bash 
git checkout -b feature-name
```
- Make your changes, commit and push:
```bash
git commit -m "Added feature"
```
```bash
git push origin feature-name
```
- Open a Pull Request (PR) on GitHub with a description.

## License
- This project is for educational purposes only.