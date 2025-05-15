Chef Claude 🍳

Chef Claude is a sleek React web app that lets you enter your available ingredients and fetch delicious recipe suggestions powered by an AI backend. A fun and practical project combining React, Express, and OpenAI API to explore cooking inspiration!
Features

    Add and remove ingredients dynamically

    Fetch AI-generated recipes based on your ingredients

    Clean, responsive UI with React hooks

    Backend API powered by Node.js + Express

    Easy environment variable setup for OpenAI API keys

Screenshots

(Add screenshots here to showcase UI)
Tech Stack

    React (frontend)

    Node.js + Express (backend)

    OpenAI API for recipe generation

    React Icons for UI embellishments

    CSS for styling

Getting Started
Prerequisites

    Node.js and npm installed

    OpenAI API key (Get one here)

Installation

    Clone the repo:

git clone https://github.com/yourusername/chef-claude.git
cd chef-claude

Setup backend environment variables:

    Create a .env file in the backend/ folder

    Add your OpenAI API key:

    OPENAI_API_KEY=your_openai_api_key_here
    PORT=4000

Install dependencies and start backend:

cd backend
npm install
npm start

Install frontend dependencies and start frontend:

    cd ../
    npm install
    npm start

    Open http://localhost:3000 to use the app!

Usage

    Enter ingredients one by one and click "Add ingredient"

    Click "Get Recipes" to fetch AI-generated recipe ideas using the entered ingredients

    View suggested recipes below

Project Structure

chef-claude/
├── backend/ # Express backend server
│ ├── index.js # API endpoint handling and OpenAI calls
│ └── .env # Environment variables (not committed)
├── src/ # React frontend source code
│ ├── main.jsx # Main React component
│ └── Main.css # Styles
├── .gitignore # Git ignore file to exclude node_modules, .env, etc.
├── package.json
└── README.md

Environment Variables

Use a .env file in the backend folder with:

OPENAI_API_KEY=your_openai_api_key
PORT=4000

Make sure .env is included in .gitignore to protect your API keys.
Contributing

Contributions are welcome! Please open an issue or submit a pull request.
License

This project is open source under the MIT License.
