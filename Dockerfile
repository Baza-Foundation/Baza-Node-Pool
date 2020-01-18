FROM node:8
RUN apt-get update \
  && apk-get install npm git boost-dev libressl-dev make build-essential
RUN mkdir /pool/
COPY package.json /pool/
COPY package-lock.json /pool/
WORKDIR /pool/
RUN npm install
COPY . /pool/
CMD node init.js
