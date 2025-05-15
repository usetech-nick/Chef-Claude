Chef Claude 🍳

A fun React app to turn your ingredients into tasty AI-powered recipe ideas! Mix cooking + AI magic with a sleek UI and a Node.js backend using OpenAI API.
Features ✨

    Add & delete ingredients easily

    Fetch AI-generated recipes based on your input

    Clean, responsive React UI

    Node.js + Express backend

    Simple setup with environment variables

Tech Stack 🛠️

    React (frontend)

    Node.js + Express (backend)

    OpenAI API for recipe magic

    React Icons & CSS for style

Getting Started 🚀

    Clone repo

git clone https://github.com/yourusername/chef-claude.git
cd chef-claude

    Setup backend .env in /backend:

OPENAI_API_KEY=your_openai_api_key
PORT=4000

    Install & run backend

cd backend
npm install
npm start

    Install & run frontend

cd ../
npm install
npm start

    Open http://localhost:3000 and start cooking! 🍽️

Usage 🍅

    Add ingredients

    Click Get Recipes

    Enjoy AI-created recipe ideas!

Project Structure 📁

chef-claude/
├─ backend/ # Express server + OpenAI calls
├─ src/ # React frontend code
├─ .gitignore # ignores node_modules, .env, etc.
└─ README.md

Important ⚠️

    Keep your .env out of git for safety!

    Use your own OpenAI API key.

Contributing 🤝

Pull requests & issues welcome!
License 📄

MIT License
