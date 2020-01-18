FROM node:10
RUN apt-get update \
  && apt-get install npm git boost-dev libressl-dev make build-essential
RUN mkdir /pool/
COPY package.json /pool/
COPY package-lock.json /pool/
WORKDIR /pool/
RUN npm install
COPY . /pool/
CMD node init.js
