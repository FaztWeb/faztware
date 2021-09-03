FROM node:16-alpine

WORKDIR /app

COPY package*.json .

RUN npm ci

COPY . .

ENV NODE_ENV=production

CMD ["npm", "start"]