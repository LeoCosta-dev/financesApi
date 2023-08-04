#!make

PROJECT = "Financials API"

start:
	yarn start

run-local-docker:
	MONGO_URL=mongodb://localhost:27017 \
	MONGO_USERNAME=local \
	MONGO_PASSWORD=local \
	yarn dev:docker

run-local:
	yarn dev