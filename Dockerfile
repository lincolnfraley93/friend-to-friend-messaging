FROM node:latest

WORKDIR /friend-to-friend-messaging

EXPOSE 3000

RUN npm install -g yarn

RUN npm install -g react-scripts

RUN npm install

CMD ["npm", "run", "start"]
