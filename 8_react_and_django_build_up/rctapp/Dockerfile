FROM node:20.16.0-slim

WORKDIR /usr/src/rctapp

COPY package*.json .

RUN npm install

COPY . .
