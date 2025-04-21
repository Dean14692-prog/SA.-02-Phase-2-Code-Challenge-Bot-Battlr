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
- **JSON Server**: Install JSON Server globally to mock the backend.git 

  To install JSON Server globally, use this command:
  ```bash
  npm install -g json-server
