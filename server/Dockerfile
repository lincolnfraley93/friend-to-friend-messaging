FROM node:latest

WORKDIR /server

EXPOSE 3000

COPY ./package.json ./package-lock.json ./

RUN npm install

CMD ["npm", "run", "start"]
