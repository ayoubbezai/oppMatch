# 🧠 OppMatch – AI-Powered Opportunity Matcher  
**Automated grant/internship matching for students**  

## 🔍 How It Works  
1. 📄 Upload your CV  
2. 🧠 AI extracts skills/goals  
3. 🌐 Searches LinkedIn/Google Jobs/grants  
4. 🎯 Delivers perfect matches  

## 🚀 Quick Installation  
Run these commands sequentially:  

```bash
# Backend (Laravel)
cd backend
composer install
cp .env.example .env
sed -i 's/DB_DATABASE=.*/DB_DATABASE=oppmatch/' .env
sed -i 's/DB_USERNAME=.*/DB_USERNAME=root/' .env
sed -i 's/DB_PASSWORD=.*/DB_PASSWORD=yourpassword/' .env
php artisan key:generate
php artisan migrate
php artisan serve &

# Frontend (React)
cd ../frontend
npm install
cp .env.example .env
echo "REACT_APP_API_URL=http://127.0.0.1:8000/api" > .env
npm start &

# AI Service (Python)
cd ../agents
python -m venv venv
source venv/bin/activate  # Windows: .\venv\Scripts\activate
pip install -r requirements.txt
echo -e "GOOGLE_API_KEY=your_key_here\nLAMA_API_KEY=your_key_here" > .env
python app.py &