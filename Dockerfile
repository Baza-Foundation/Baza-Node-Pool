FROM node:8-alpine
RUN apk update
RUN apk add npm git boost-dev libressl-dev make build-base
RUN mkdir /pool/
COPY package.json /pool/
COPY package-lock.json /pool/
WORKDIR /pool/
# Why ?? Beacuse node was throwing gyp ERR! stack Error: certificate has expired error,
# See https://github.com/nodejs/node-gyp/issues/1224
RUN export NODE_TLS_REJECT_UNAUTHORIZED=0 && npm install
COPY . /pool/
CMD node init.js
