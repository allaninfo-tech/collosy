#!/usr/bin/env bash

docker kill collosy || true 
docker rm collosy || true 
docker create --name collosy -p 3000:3000 -p 4200:4200 localhost/collosy
