FROM node:8-alpine
RUN apk update
RUN apk add npm git boost-dev libressl-dev make build-base
RUN mkdir /pool/
COPY package.json /pool/
COPY package-lock.json /pool/
WORKDIR /pool/
RUN npm install
COPY . /pool/
CMD node init.js
