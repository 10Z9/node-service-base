#!/bin/bash

containerID=$(docker ps | grep postgres | cut -d' ' -f1)

docker exec -it $containerID psql -U postgres -d ${1:-postgres}
