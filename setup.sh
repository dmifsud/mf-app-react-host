#!/bin/bash

# if this file doesn't execute, run this command: chmod +x start.sh
REMOTE_REPOS="./remote_repos"

if [ ! -d "$REMOTE_REPOS" ]; then
    echo "Creating remote_repos directory"
    mkdir -p $REMOTE_REPOS
fi


REMOTE="$REMOTE_REPOS/mf-app-react-remote/"
STORE="$REMOTE_REPOS/mf-app-store/"


if [ ! -d "$REMOTE" ]; then
    echo "Cloning mf-app-react-remote repository"
    cd $REMOTE_REPOS
    git clone git@github.com:dmifsud/mf-app-react-remote.git
    cd ..
fi

if [ ! -d "$STORE" ]; then
    echo "Cloning mf-app-store repository"
    cd $REMOTE_REPOS
    git clone git@github.com:dmifsud/mf-app-store.git
    cd ..
fi

# start the dependency remote module federation apps running on docker
echo "Starting remote module federation apps docker containers"
docker-compose up -d

# TODO: remove feat-docker checkout
# build store first
echo "Installing local remote dependencies for types"
cd $STORE && git checkout feat-docker && rm -rf node_modules && npm install && npm run build:types
# build remote second
cd ../mf-app-react-remote && git checkout feat-docker && rm -rf node_modules && npm install && npm run build:types

cd .. 

# # start the dependency remote module federation apps running on docker

# # build host locally
# git checkout feat-docker && rm -rf node_modules && yarn
echo "Installation Complete! Run:"
echo "> yarn or npm install"
echo "> yarn dev or npm run dev"

