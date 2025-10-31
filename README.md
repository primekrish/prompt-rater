🚀 Prompt Rater

A full-stack AI app that rates user prompts based on clarity, creativity, and specificity.
Frontend built with Vite + React + TailwindCSS, backend with Express + TypeScript, deployed via Render and GitHub Pages.

🧩 Features

Rate prompts with AI-based scoring

Separate frontend + backend setup

Beautiful animated UI (Tailwind + Framer Motion)

Easy deployment using Render

API powered by GPT (or custom LLM)

🗂️ Project Structure
prompt-rater/
│
├── client/            # React frontend
│   ├── src/
│   ├── index.html
│   ├── vite.config.ts
│   └── package.json
│
├── server/            # Express backend
│   ├── index.ts
│   └── routes/
│
├── shared/            # Shared types/interfaces
│
├── package.json       # Root config
├── tsconfig.json
└── README.md

⚙️ Setup (Local)

Clone the repo

git clone https://github.com/primekrish/prompt-rater.git
cd prompt-rater


Install dependencies

npm install --include=dev


Run locally

npm run dev


Open your browser at http://localhost:5173 (frontend)
and backend runs at http://localhost:3000 (if configured).

🌐 Deploy Backend on Render

Go to Render Dashboard
.

Click “New Web Service” → “Connect your GitHub repo” → select prompt-rater.

Set:

Environment: Node

Build Command:

npm install --include=dev && npm run build


Start Command:

npm run start


Root Directory: leave empty (it’s the main folder).

Add environment variables

Key: NODE_ENV
Value: production

Click Deploy 🚀

Render will automatically build and host your Express backend.
After build, it’ll show a live URL like:

https://prompt-rater-backend.onrender.com

🧱 Deploy Frontend (Optional via GitHub Pages)

Inside client/:

npm run build


Push the /dist folder to a gh-pages branch (or use Vite’s deploy plugin).

Or host easily on Netlify / Vercel.

🔗 Connect Frontend & Backend

Edit your frontend .env or config file:

VITE_API_URL=https://prompt-rater-backend.onrender.com


Then rebuild:

npm run build

🧠 Credits

Built by @primekrish
 ❤️
Design inspired by modern AI dashboards.
