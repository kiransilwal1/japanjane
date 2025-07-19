#!/bin/bash

# Server Variables
SERVER="kiran@78.47.234.203"
PORT=8228
TARGET_DIR="/home/kiran/japanjane"

# Run commands on the server
ssh -p $PORT $SERVER <<'EOF'
  REPO_URL="git@github.com:kiransilwal1/japanjane.git"
  APP_DIR="/home/kiran/japanjane"

  echo "🔹 Connecting to server and deploying updates..."

  if [ -d "$APP_DIR" ]; then
    echo "📥 Pulling latest changes..."
    cd $APP_DIR
    git reset --hard
    git pull origin main
  else
    echo "📦 Cloning repository..."
    git clone $REPO_URL $APP_DIR
    cd $APP_DIR
  fi

  # Restart Docker without sudo
  echo "🚀 Restarting Docker containers..."
  docker-compose down
  docker-compose up --build -d

  # Verify if Docker containers are running
  if ! docker-compose ps | grep "Up"; then
    echo "❌ Docker failed to start. Check logs with 'docker-compose logs'."
    exit 1
  fi

  echo "✅ Deployment successful!"
EOF
