FROM node

WORKDIR /app

COPY package.json ./

COPY package-lock.json ./

COPY ./ ./

RUN npm i

ENV PORT 8000

EXPOSE ${PORT}

# RUN npm run db

CMD ["npm", "run", "start:dev"]