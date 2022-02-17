FROM node

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

RUN ls -la

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]