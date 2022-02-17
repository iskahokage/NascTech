FROM node

WORKDIR /app

COPY package*.json ./

RUN npm install

RUN mkdir node_modules/.cache && chmod -R 777 node_modules/.cache

COPY . .

ENV PORT 8000

EXPOSE ${PORT}

# RUN npm run db

CMD ["npm", "run", "start:dev"]