#!/usr/bin/env bash
ssh circleci@138.197.72.215 << EOF
cd /home/lange/tipofthehats.org/
git pull && bower install && npm install && npm run build && pm2 restart tipofthehats.org
EOF
