#!/bin/sh
set -e

echo "Setting yarn version to berry"
yarn set version berry
echo "Finish setting yarn version to berry"

echo "Installing dependencies"
yarn install
echo "Finish installing dependencies"

exec "$@"
