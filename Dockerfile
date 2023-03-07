FROM node:current-alpine3.12

LABEL NAME=MAIN_TEST Version=1.0

WORKDIR /app

COPY ["package.json", "yarn.lock", "./"]

RUN yarn install

COPY . /app/

EXPOSE 3000
ENV PORT=3000

CMD yarn start:prod