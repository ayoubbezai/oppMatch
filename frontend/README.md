# :dart: OppMatch

_AI-Powered Opportunity Matching Platform_

OppMatch is an AI-powered platform designed to bridge the gap between students and career opportunities by leveraging multiple intelligent agents that automate and optimize the discovery and matching process for internships, scholarships, and grants.  
The platform uses CVs (PDF or LinkedIn) as input, analyzes them through a multi-agent system, and returns highly relevant opportunities tailored to the user's profile.

---

## :jigsaw: Problem

- Students struggle to find relevant opportunities due to information overload and scattered platforms.
- Valuable internships and scholarships go unnoticed because of poor matching systems.
- Recruiters and institutions spend too much time screening mismatched applications.

---

## :white_check_mark: Our Solution

OppMatch solves this by:

- Connecting students with internships, scholarships, and grants based on their real profile.
- Using **AI agents** to analyze CVs and LinkedIn profiles.
- Scraping and matching opportunities from the web in real-time.
- Delivering structured summaries to recruiters and institutions.
- Offering dashboards to track opportunities and application status.

---

## :brain: Multi-Agent Architecture

- **Document Analyzer Agent:** Extracts structured data from PDFs or LinkedIn profiles using NLP & entity recognition.
- **Data Summarizer Agent:** Converts raw data into a polished, structured profile summary.
- **Opportunity Scraper Agent:** Searches the web for internships, scholarships, and programs using targeted scraping.
- **Opportunity Matcher Agent:** Uses semantic matching & LLMs to align student profiles with the best-fitting opportunities.

---

## :shield: Built-In Security

- :lock: Role-Based Access Control (RBAC)
- :vertical_traffic_light: API Rate Limiting
- :soap: Input Validation & Sanitization
- :closed_lock_with_key: Password Security: AES-256 encryption + hashing
- :closed_lock_with_key: HTTPS Everywhere

---

## :tools: Tech Stack

**Frontend:**

- React.js
- Tailwind CSS
- Shadcn
- ReactFlow

**Backend:**

- Laravel (PHP)
- MySQL

**AI Engine:**

- Python (Flask)
- CrewAI
- LlamaIndex
- Google AI Studio Gemini 2.5
- **Deployed AI API:** [`/process-pdf`](https://oppmatchcode-2.onrender.com/process-pdf)

---

## :rocket: Getting Started

### Clone the repository:

```bash
git clone https://github.com/your-username/oppmatch.git
cd oppmatch


Frontend Setup:
bash
Copy
Edit
cd frontend
npm install
npm run dev
👉 Frontend runs at: http://localhost:5173

Backend Setup:
bash
Copy
Edit
cd ../backend
cp .env.example .env
Then edit .env with your database credentials:

ini
Copy
Edit
DB_DATABASE=oppmatch_db
DB_USERNAME=your_mysql_user
DB_PASSWORD=your_mysql_password
Then run:

bash
Copy
Edit
php artisan migrate
php artisan serve
👉 Backend API runs at: http://localhost:8000

AI Engine Setup (Optional if you use deployed API):
bash
Copy
Edit

cd ../ai-engine
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate

pip install -r requirements.txt
python app.py
👉 Local AI Engine runs at: http://localhost:5000

👉 Deployed AI API: https://oppmatchcode-2.onrender.com/process-pdf
```
