FROM node:8-alpine
ADD https://raw.githubusercontent.com/vishnubob/wait-for-it/master/wait-for-it.sh /
RUN apk update \
  && apk add npm git boost-dev libressl-dev make build-base \
  && chmod +x /wait-for-it.sh
RUN mkdir /pool/
COPY package-lock.json /pool/
WORKDIR /pool/
RUN npm update
COPY . /pool/
CMD node init.js
