#!/bin/bash

# if this file doesn't execute, run this command: chmod +x start.sh
REMOTE_REPOS="./remote_repos"

if [ ! -d "$REMOTE_REPOS" ]; then
    mkdir -p $REMOTE_REPOS
fi


REMOTE="$REMOTE_REPOS/mf-app-react-remote/"
STORE="$REMOTE_REPOS/mf-app-store/"


if [ ! -d "$REMOTE" ]; then
    cd $REMOTE_REPOS
    git clone git@github.com:dmifsud/mf-app-react-remote.git
    cd ..
fi

if [ ! -d "$STORE" ]; then
    cd $REMOTE_REPOS
    git clone git@github.com:dmifsud/mf-app-store.git
    cd ..
fi

# TODO: remove feat-docker checkout
# build store first
cd $STORE && git checkout feat-docker && rm -rf node_modules && npm install && npm run build:types
# build remote second
cd ../mf-app-react-remote && git checkout feat-docker && rm -rf node_modules && npm install && npm run build:types

cd .. 

# # start the dependency remote module federation apps running on docker
docker-compose up -d

# # build host locally
git checkout feat-docker && rm -rf node_modules && yarn
echo "Installation Complete! Run:"
echo "> cd mf-app-react-host"
echo "> yarn dev or npm run dev"

