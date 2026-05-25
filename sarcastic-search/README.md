# Sarcastic Search 🙄

A sarcastic Google-style search engine powered by Claude AI.

## Deploy to Vercel (Free)

### Step 1 — Upload to GitHub
1. Go to github.com and create a free account
2. Click "New repository" → name it `sarcastic-search` → Create
3. Upload all these files by dragging them into the repo

### Step 2 — Get your Anthropic API Key
1. Go to console.anthropic.com → Sign up
2. Click "API Keys" → "Create Key" → Copy it

### Step 3 — Deploy on Vercel
1. Go to vercel.com → Sign up with GitHub
2. Click "Add New Project" → Import your `sarcastic-search` repo
3. Before deploying, click "Environment Variables"
4. Add: `ANTHROPIC_API_KEY` = paste your key here
5. Click Deploy!

Your site will be live at: `https://sarcastic-search.vercel.app`

## File Structure
```
sarcastic-search/
├── public/
│   └── index.html      ← The website UI
├── api/
│   └── search.js       ← The backend (calls Claude API)
├── vercel.json         ← Vercel config
└── README.md           ← This file
```
