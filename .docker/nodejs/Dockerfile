FROM node:14-alpine AS base

RUN mkdir -p /flashcard
RUN chown node /flashcard
USER node
WORKDIR /flashcard
EXPOSE 3000


FROM base AS build

COPY package*.json ./
RUN npm ci
CMD [ "node", "src/app.js" ]
