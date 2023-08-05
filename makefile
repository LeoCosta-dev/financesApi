#!make

PROJECT = "Financials API"

start:
	npm run compile
	npm run start

run-local-docker:
	MONGO_URL=mongodb://localhost:27017 \
	MONGO_USERNAME=local \
	MONGO_PASSWORD=local \
	npm run dev:docker

run-local:
	npm run dev

deploy:
	npm i -g vercel
	npm run compile
	vercel --prod

setup:
	npm i
