#!bin/bash

echo 'build image and push to gcp'
bash build/build-image.sh

echo 'apply change on K8S'
cd k8s/dev1_build
kubectl delete -f text-collector-service.yaml
kubectl apply -f text-collector-service.yaml
