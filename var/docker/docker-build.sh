#!/bin/bash

set -o xtrace

docker rmi localhost/collosy || true
docker build --target dist -t localhost/collosy -f Dockerfile.dev .
docker build --target devcontainer -t localhost/collosy-devcontainer -f Dockerfile.dev .
