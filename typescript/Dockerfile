FROM node:14-alpine

EXPOSE 3000
WORKDIR /app

COPY package*.json /app/
RUN yarn install

COPY . /app
RUN yarn run build

CMD yarn run start:prod
