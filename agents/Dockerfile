# ------------------------------
# Stage 1: Base Python Environment
# ------------------------------
FROM python:3.11-slim

# Set working directory
WORKDIR /app

# Install system dependencies (for PDFs, etc.)
RUN apt-get update && apt-get install -y --no-install-recommends \
    build-essential \
    poppler-utils \
    && rm -rf /var/lib/apt/lists/*

# Copy only requirements first for caching
COPY requirements.txt .

# Install dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Copy the rest of your Flask app
COPY . .

# Expose Flask/Gunicorn port
EXPOSE 5000

# Environment variables
ENV PYTHONUNBUFFERED=1 \
    FLASK_ENV=production \
    PORT=5000

# Default command: use Gunicorn for production
CMD ["gunicorn", "--bind", "0.0.0.0:5000", "--workers", "4", "app:app"]
