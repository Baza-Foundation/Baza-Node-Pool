FROM node:8-alpine
RUN apk update \
  && apk add npm git boost-dev libressl-dev make build-base
RUN mkdir /pool/
COPY package-lock.json /pool/
WORKDIR /pool/
RUN npm update
COPY . /pool/
CMD node init.js
