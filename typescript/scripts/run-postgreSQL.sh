#!/bin/bash

docker run --rm   --name cloud-auth-service -e POSTGRES_PASSWORD=6628@talk -d -p 5432:5432 -v $HOME/docker/volumes/postgres:/var/lib/postgresql/data  postgres
