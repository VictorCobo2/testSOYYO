FROM node

WORKDIR /index

COPY package*.json ./

RUN npm install

COPY ..

EXPOSE 9000

CMD ["npm", "start"]