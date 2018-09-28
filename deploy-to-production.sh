#!/usr/bin/env bash
ssh-keyscan -H 138.197.72.215 >> ~/.ssh/known_hosts
ssh circleci@138.197.72.215 << EOF
cd /home/lange/tipofthehats.org/
echo "In dir, running git pull and friends"
git pull && bower install && npm install && npm run build
cd ..
pm2 start pm2_tipofthehats.org.json --update-env
EOF
