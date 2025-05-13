# 🧠 OppMatch – AI-Powered Opportunity Matcher

OppMatch is an intelligent platform that automatically matches students with grants and internships using AI.

## 🔍 How It Works
1. Upload your CV
2. AI extracts your skills and goals
3. Searches multiple job platforms
4. Delivers personalized matches

## 📁 Project Structure
oppmatch/
├── backend/    # Laravel API
├── frontend/   # React App
└── agents/     # Python AI Service

## 🛠 Full Setup Guide

# Backend Setup (Laravel)
cd backend
composer install
cp .env.example .env
echo "DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=oppmatch
DB_USERNAME=root
DB_PASSWORD=your_password" > .env
php artisan key:generate
php artisan migrate
php artisan serve &

# Frontend Setup (React)
cd ../frontend
npm install
cp .env.example .env
echo "REACT_APP_API_URL=http://127.0.0.1:8000/api" > .env
npm start &

# AI Agents Setup (Python)
cd ../agents
python -m venv venv
source venv/bin/activate  # Windows: .\venv\Scripts\activate
pip install -r requirements.txt
echo "GOOGLE_API_KEY=your_google_api_key
LAMA_API_KEY=your_lama_api_key" > .env
python app.py &

## 🚀 All Services Running
Backend: http://127.0.0.1:8000
Frontend: http://localhost:3000
AI Agents: http://127.0.0.1:5000

## API Examples
# Process resume:
curl -X POST http://127.0.0.1:5000/process-pdf -F "file=@resume.pdf"

# Health check:
curl http://127.0.0.1:5000/health