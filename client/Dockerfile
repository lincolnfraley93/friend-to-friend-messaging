FROM node:latest

WORKDIR /client

EXPOSE 3000

RUN npm install -g react-scripts

COPY ./package.json ./package-lock.json ./

RUN npm install

