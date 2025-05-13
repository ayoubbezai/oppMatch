# 🧠 OppMatch – AI-Powered Opportunity Matcher  
**Automated grant/internship matching for students and early professionals**  

## 🔍 How It Works  
1. 📄 **Upload** - Submit your CV/Resume through our portal  
2. 🧠 **Analyze** - AI extracts skills, education, and career goals  
3. 🌐 **Search** - Scans multiple platforms including:  
   - LinkedIn Job Postings  
   - Google Jobs API  
   - Government/University Grant Databases  
   - Private Fellowship Opportunities  
4. 🎯 **Match** - Returns personalized opportunities ranked by relevance  


## 🚀 Complete Installation Guide

```bash
# ======================
# BACKEND SETUP (Laravel)
# ======================
cd backend

# Install dependencies
composer install --optimize-autoloader

# Configure environment
cp .env.example .env
sed -i 's/DB_DATABASE=.*/DB_DATABASE=oppmatch/' .env
sed -i 's/DB_USERNAME=.*/DB_USERNAME=root/' .env
sed -i 's/DB_PASSWORD=.*/DB_PASSWORD=your_mysql_password/' .env

# Initialize application
php artisan key:generate
php artisan migrate --seed
php artisan optimize:clear

# Start development server (port 8000)
php artisan serve &


# ===================
# FRONTEND SETUP (React)
# ===================
cd ../frontend

# Install packages
npm install --force

# Configure environment
cp .env.example .env
echo "VITE_API_URL=http://127.0.0.1:8000/api" > .env

# Start Vite dev server (port 5173)
npm run dev &


# ========================
# AI SERVICE SETUP (Python)
# ========================
cd ../agents

# Create virtual environment
python -m venv venv
source venv/bin/activate  # Windows: .\venv\Scripts\activate

# Install requirements
pip install --upgrade pip
pip install -r requirements.txt

# Configure API keys
echo -e "GOOGLE_API_KEY=your_actual_key_here\nLAMA_API_KEY=your_llama_key_if_used" > .env

# Start Flask server (port 5000)
python app.py &